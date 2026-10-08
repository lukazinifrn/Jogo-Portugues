import "./DialogueBox.css";
import { scenes } from "../../data/scene_list";
import { characters } from "../../data/character_list";
import { useState, useEffect } from "react";
// import talkSound from "../../sounds/sfx/talk.wav";
import { backgrounds } from "../../data/background_list";


export function DialogueBox() {
	function handleKeyDown(event){
		if (current.type === "click" && (event.key === "Enter" || event.key === " ")){
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
	const [current, setCurrent] = useState(scenes["a.1"]);
	const [show, setShow] = useState("");
	const [checkpoint, setCheckpoint] = useState("a.1");

	// const sound = new Audio(talkSound)

	useEffect(() => {
		const timers = [];

		for (let i = 0; i < current.text.length; i++) {
			const timer = setTimeout(() => {
				setShow(prev => prev + current.text[i]);
				// sound.currentTime = 0
				// sound.play()
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
									if (choice.checkpoint != ""){
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