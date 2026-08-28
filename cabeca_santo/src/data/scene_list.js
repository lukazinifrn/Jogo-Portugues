import { characters } from "./character_list";
import { Scene } from "../classes/scene";
import { Choice } from "../classes/choice";
import { Ending } from "../classes/ending";

export const scenes = {
	"a.1": Scene("Você está parado...", "backgroud.png", "click", "", ["a.2"], 2),
	"a.2": Scene("Hey, você!", "background.png", "choice", characters.C1, [Choice("Fazer nada", "a.3.1"), Choice("Explodir espontaneamente", "a.3.2")], 2),
	"a.3.1": Scene("Incrível...", "background.png", "pass", characters.C1, ["a.4"], 5),
	"a.3.2": Scene("ABSURDO!!!", "background.png", "pass", characters.C1, ["a.4"], 1),
	"a.4": Scene("*Dança freneticamente*", "background.png", "click", characters.C1, ["f1"], 3),
	"f1": Ending(1, "Melhor final", "Ele dançou freneticamente para sempre...")
}