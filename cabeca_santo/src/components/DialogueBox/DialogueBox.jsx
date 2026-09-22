import "./DialogueBox.css";
import { scenes } from "../../data/scene_list";
import { useState, useEffect } from "react";

export function DialogueBox() {
	function nextScene(){
		setShow("")
		setCurrent(scenes[current.next[0]])
	}
	function setScene(scene){
		setCurrent(scenes[scene])
	}
	const [current, setCurrent] = useState(scenes["a.1"]);
	const [show, setShow] = useState("");

	useEffect(() => {
		const timers = [];

		for (let i = 0; i < current.text.length; i++) {
			const timer = setTimeout(() => {
				setShow(prev => prev + current.text[i]);
			}, 100 * i);

			timers.push(timer);
		}

		return () => {
			timers.forEach(timer => clearTimeout(timer));
		};
	}, [current.text]);
	return (
		current.type == "click"
		?
		<div onClick={nextScene} className="dialoguebox">{
			show
		}</div>
		:
		<div className="dialoguebox">{
			current.next.map((choice) => {
				return (
					<button onClick={() => setScene(choice.next)} key={crypto.randomUUID}>{choice.text}</button>
				)
			})
		}</div>
	);
}