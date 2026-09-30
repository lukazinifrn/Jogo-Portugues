import "./DialogueBox.css";
import { scenes } from "../../data/scene_list";
import { characters } from "../../data/character_list";
import { useState, useEffect } from "react";
// import talkSound from "../../sounds/sfx/talk.wav";
import { backgrounds } from "../../data/background_list";


export function DialogueBox() {
	function nextScene() {
		setShow("")
		setCurrent(scenes[current.next[0]])
	}
	function setScene(scene) {
		setCurrent(scenes[scene])
	}
	const [current, setCurrent] = useState(scenes["a.260"]);
	const [show, setShow] = useState("");

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

		return () => {
			timers.forEach(timer => clearTimeout(timer));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current.text]);
	return (
		<>
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
								<button onClick={() => setScene(choice.next)} key={choice.next}>{choice.text}</button>
							)
						})
					}</div>
					:
					<div className="final">
						<h1>{current.text}</h1>
						<p>{current.description}</p>
					</div>}
		</>
	);
}