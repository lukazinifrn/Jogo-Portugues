import "./DialogueBox.css";
import { scenes } from "../../data/scene_list";
import { characters } from "../../data/character_list";
import { useState, useEffect, useRef } from "react";
import { backgrounds } from "../../data/background_list";
import { musics } from "../../data/music_list";


export function DialogueBox() {
	function handleKeyDown(event) {
		if (current.type === "click" && (event.key === "Enter" || event.key === " ")) {
			nextScene()
		}
	}
	function nextScene() {
		setShow("")
		setCurrent(scenes[current.next[0]])
	}
	function setScene(scene) {
		setCurrent(scenes[scene])
	}
	function fadeAudio(audio, targetVolume, duration, onComplete) {
		const steps = 50;
		const interval = duration / steps;
		const initialVolume = audio.volume;
		let step = 0;

		const timer = setInterval(() => {
			step++;

			audio.volume =
				initialVolume +
				(targetVolume - initialVolume) * (step / steps);

			if (step >= steps) {
				clearInterval(timer);
				audio.volume = targetVolume;
				onComplete?.();
			}
		}, interval);

		return timer;
	}
	function startMusicLoop(audio) {
		let fadeTimer;
		let loopTimer;
		let cancelled = false;

		const fade = (from, to, duration, callback) => {
			clearInterval(fadeTimer);

			const steps = 50;
			const interval = duration / steps;
			let step = 0;

			audio.volume = from;

			fadeTimer = setInterval(() => {
				if (cancelled) {
					clearInterval(fadeTimer);
					return;
				}

				step++;
				audio.volume = from + (to - from) * (step / steps);

				if (step >= steps) {
					clearInterval(fadeTimer);
					audio.volume = to;
					callback?.();
				}
			}, interval);
		};

		const playCycle = () => {
			if (cancelled) return;

			audio.currentTime = 0;
			audio.volume = 0;

			audio.play().then(() => {
				fade(0, 0.5, 2000);

				const remaining = audio.duration - audio.currentTime;

				loopTimer = setTimeout(() => {
					if (cancelled) return;

					fade(0.5, 0, 2000, () => {
						audio.pause();
						playCycle();
					});
				}, Math.max(0, (remaining - 2) * 1000));
			}).catch(error => {
				console.error("Erro ao reproduzir música:", error);
			});
		};

		playCycle();

		return () => {
			cancelled = true;
			clearInterval(fadeTimer);
			clearTimeout(loopTimer);
			audio.pause();
		};
	}
	const [current, setCurrent] = useState(scenes["a.1"]);
	const [show, setShow] = useState("");
	const [checkpoint, setCheckpoint] = useState("a.1");

	const audioRef = useRef(null)

	if (audioRef.current === null) {
		audioRef.current = new Audio();
		audioRef.current.loop = true;
	}

	useEffect(() => {
		const audio = audioRef.current;

		if (!audio || current.music === "") return;

		const newMusic = musics[current.music];

		if (!newMusic) return;

		if (
			audio.src === new URL(newMusic, window.location.href).href
		) {
			return;
		}

		fadeAudio(audio, 0, 2000, () => {
			audio.pause();

			audio.src = newMusic;
			audio.volume = 0;
			audio.loop = true;

			audio.play()
				.then(() => {
					fadeAudio(audio, 0.2, 2000);
				})
				.catch(error => {
					console.error("Erro ao reproduzir música:", error);
				});
		});
	}, [current.music]);

	useEffect(() => {
		const timers = [];
		for (let i = 0; i < current.text.length; i++) {
			const timer = setTimeout(() => {
				setShow(prev => prev + current.text[i]);
			}, (current.time * 1000 / current.text.length) * i);

			timers.push(timer);
		}

		window.addEventListener("keydown", handleKeyDown)
		return () => {
			timers.forEach(timer => clearTimeout(timer));
			window.removeEventListener("keydown", handleKeyDown)
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current.text, current]);
	return (
		<>
			<p className="portrait-warning">Gire seu dispositivo para ficar em modo paisagem, ou largura miníma inadequada.</p>
			<div className="background">
				{current.background != ""
					&&
					<img src={backgrounds[current.background]}></img>
				}
			</div>
			<div className="character">{current.character != "" && <img src={characters[current.character].images[current.image]} />}</div>
			{current.type == "click"
				?
				<div onClick={nextScene} className="dialoguebox talk">
					<h1>{current.character != "" && characters[current.character].name}</h1>
					<p>{show}</p>
				</div>
				:
				current.type == "choice"
					?
					<div className="dialoguebox choice">{
						current.next.map((choice) => {
							return (
								<button onClick={() => {
									setScene(choice.next)
									if (choice.checkpoint != "") {
										setCheckpoint(choice.checkpoint)
									}
								}} key={choice.next}>{choice.text}</button>
							)
						})
					}</div>
					:
					<div className="final">
						<h1>{current.text}</h1>
						<p>{current.description}</p>
						<div className="final-options">
							{checkpoint != "a.1"
								?
								<button onClick={
									() => {
										setShow("")
										setScene(checkpoint)
									}}>Voltar para última escolha</button>
								:
								<span></span>
							}
							<button onClick={
								() => {
									setShow("")
									setCheckpoint("a.1")
									setScene("a.1")
								}}>Voltar para o início</button>
						</div>
					</div>}
		</>
	);
}