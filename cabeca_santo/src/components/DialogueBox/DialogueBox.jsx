import "./DialogueBox.css";
import { scenes } from "../../data/scene_list";
import { useState, useEffect } from "react";

export function DialogueBox() {
	function changeScene(current){
		setShow("")
		return current.next[0]
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
		<div onClick={() => {setCurrent(scenes[changeScene(current)])}} className="dialoguebox">{
			show
		}</div>
	);
}