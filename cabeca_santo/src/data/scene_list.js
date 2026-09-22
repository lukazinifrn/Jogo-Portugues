import { characters } from "./character_list";
import { Scene } from "../classes/scene";
import { Choice } from "../classes/choice";

export const scenes = {
	"a.1": new Scene("Você está parado...", "", "click", "", ["a.2"], 1, 0),
	"a.2": new Scene("Hey, você!", "b1", "click", characters.C1, ["c.1"], 1),
	"c.1": new Scene("", "b1", "choice", characters.C1, [new Choice("Fazer nada", "a.3.1"), new Choice("Explodir espontaneamente", "a.3.2")], 1, 0),
	"a.3.1": new Scene("Incrível...", "b1", "click", characters.C1, ["a.4"], 1, 0),
	"a.3.2": new Scene("ABSURDO!!!", "b1", "click", characters.C1, ["a.4"], 1, 0),
	"a.4": new Scene("*Dança freneticamente*", "b1", "click", characters.C1, ["f1"], 1, 1),
	"f1": new Scene("Melhor final de todos", "", "final", "", [], 0, "Ele dançou freneticamente para todo sempre")
}