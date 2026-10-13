import { Character } from "../classes/character";
import c1 from "../sprites/characters/c1/c1.jpeg";
import c1_dancando from "../sprites/characters/c1/c1_dancando.jpeg"

// Samuel
import samuel_1_bravo from "../sprites/characters/Samuel/samuel_1_bravo.png";
import samuel_1_desconfiado from "../sprites/characters/Samuel/samuel_1_desconfiado.png";
import samuel_1_surpreso from "../sprites/characters/Samuel/samuel_1_surpreso.png";
import samuel_1_triste from "../sprites/characters/Samuel/samuel_1_triste.png";
import samuel_2_assustado from "../sprites/characters/Samuel/samuel_2_assustado.png";
import samuel_2_base from "../sprites/characters/Samuel/samuel_1_bravo.png";
import samuel_2_triste from "../sprites/characters/Samuel/samuel_2_triste.png";

// Mariinha
import mariinha_brava from "../sprites/characters/Mariinha/mariinha_brava.png";
import mariinha_feliz from "../sprites/characters/Mariinha/mariinha_feliz.png";
import mariinha_assustada from "../sprites/characters/Mariinha/mariinha_assustada.png";
import mariinha_triste from "../sprites/characters/Mariinha/mariinha_triste.png";

export const characters = {
	"Samuel": new Character("Samuel", [samuel_1_bravo, samuel_1_desconfiado, samuel_1_surpreso, samuel_1_triste, samuel_2_assustado, samuel_2_base, samuel_2_triste]),
	"Mariinha": new Character("Mariinha", [mariinha_assustada, mariinha_brava, mariinha_feliz, mariinha_triste]),
	"Caminhoneiro": new Character("Caminhoneiro", [c1, c1_dancando]),
	"Helenice": new Character("Helenice", [c1, c1_dancando]),
	"?Madeinusa": new Character("???", [c1, c1_dancando]),
	"Madeinusa": new Character("Madeinusa", [c1, c1_dancando]),
	"Niceia": new Character("Niceia", [c1, c1_dancando]),
	"Francisco": new Character("Francisco", [c1, c1_dancando]),
	"?Francisco": new Character("???", [c1, c1_dancando]),
	"Ivanisia": new Character("Ivanísia", [c1, c1_dancando]),
	"?Ivanisia": new Character("???", [c1, c1_dancando]),
	"?Manoel": new Character("???", [c1, c1_dancando]),
	"Manoel": new Character("Manoel", [c1, c1_dancando]),
	"Chico": new Character("Chico Coveiro", [c1, c1_dancando]),
	"Adriano": new Character("Adriano", [c1, c1_dancando]),
	"Aecio": new Character("Aécio Diniz", [c1, c1_dancando]),
	"Rosa": new Character("Rosa", [c1, c1_dancando]),
	"?Rosa": new Character("???", [c1, c1_dancando]),
	"Osorio": new Character("Osório", [c1, c1_dancando]),
	"?Osorio": new Character("???", [c1, c1_dancando]),
	"Crianca": new Character("Crianca", [c1, c1_dancando]),
	"Jose": new Character("Francisco José", [c1, c1_dancando]),
	"?Jose": new Character("???", [c1, c1_dancando]),
	"Rosario": new Character("Rosário", [c1, c1_dancando]),
	"?Rosario": new Character("???", [c1, c1_dancando]),
}
