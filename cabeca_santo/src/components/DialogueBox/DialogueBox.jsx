import "./DialogueBox.css";
import { scenes } from "../../data/scene_list";
import { useState, useEffect } from "react";

export function DialogueBox() {
	let start = scenes["a.1"];
	const [show, setShow] = useState("");
	useEffect(() => {
		const timers = [];

		for (let i = 0; i < start.text.length; i++) {
			const timer = setTimeout(() => {
				setShow(prev => prev + start.text[i]);
			}, 100 * i);

			timers.push(timer);
		}

		return () => {
			timers.forEach(timer => clearTimeout(timer));
		};
	}, [start.text]);
	return (
		<div className="dialoguebox">{
			show
		}</div>
	);
}