import { Character } from "../classes/character";

// Samuel
import samuel_1_bravo from "../sprites/characters/Samuel/samuel_1_bravo.png";
import samuel_1_assustado from "../sprites/characters/Samuel/samuel_1_assustado.png";
import samuel_1_triste from "../sprites/characters/Samuel/samuel_1_triste.png";
import samuel_2_bravo from "../sprites/characters/Samuel/samuel_2_bravo.png";
import samuel_2_triste from "../sprites/characters/Samuel/samuel_2_triste.png";
import samuel_2_assustado from "../sprites/characters/Samuel/samuel_2_assustado.png";

// Mariinha
import mariinha_bravo from "../sprites/characters/Mariinha/mariinha_bravo.png";
import mariinha_feliz from "../sprites/characters/Mariinha/mariinha_feliz.png";
import mariinha_assustado from "../sprites/characters/Mariinha/mariinha_assustado.png";
import mariinha_triste from "../sprites/characters/Mariinha/mariinha_triste.png";

// Caminhoneiro
import caminhoneiro from "../sprites/characters/Caminhoneiro/caminhoneiro.png";

// Helenice
import helenice_base from "../sprites/characters/Helenice/helenice_base.png";
import helenice_feliz from "../sprites/characters/Helenice/helenice_feliz.png";
import helenice_assustado from "../sprites/characters/Helenice/helenice_assustado.png";
import helenice_triste from "../sprites/characters/Helenice/helenice_triste.png";

// Madeinusa
import madeinusa_bravo from "../sprites/characters/Madeinusa/madeinusa_bravo.png";
import madeinusa_base from "../sprites/characters/Madeinusa/madeinusa_base.png";
import madeinusa_assustado from "../sprites/characters/Madeinusa/madeinusa_assustado.png";
import madeinusa_triste from "../sprites/characters/Madeinusa/madeinusa_triste.png";

// Niceia 
import niceia_bravo from "../sprites/characters/Niceia/niceia_bravo.png";
import niceia_feliz from "../sprites/characters/Niceia/niceia_feliz.png";
import niceia_assustado from "../sprites/characters/Niceia/niceia_assustado.png";
import niceia_triste from "../sprites/characters/Niceia/niceia_triste.png";

// Francisco
import francisco_bravo from "../sprites/characters/Francisco/francisco_bravo.png";
import francisco_feliz from "../sprites/characters/Francisco/francisco_feliz.png";
import francisco_assustado from "../sprites/characters/Francisco/francisco_assustado.png";
import francisco_triste from "../sprites/characters/Francisco/francisco_triste.png";

// Ivanísia
import ivanisia_bravo from "../sprites/characters/Ivanisia/ivanisia_bravo.png";
import ivanisia_base from "../sprites/characters/Ivanisia/ivanisia_base.png";

// Manoel
import manoel_assustado from "../sprites/characters/Manoel/manoel_assustado.png";
import manoel_base from "../sprites/characters/Manoel/manoel_base.png";

// Chico
import chico from "../sprites/characters/Chico/chico_meme.png";

// Adriano
import adriano_1_bravo from "../sprites/characters/Adriano/adriano_1_bravo.png";
import adriano_1_assustado from "../sprites/characters/Adriano/adriano_1_assustado.png";
import adriano_1_triste from "../sprites/characters/Adriano/adriano_1_triste.png";
import adriano_1_base from "../sprites/characters/Adriano/adriano_1_base.png";
import adriano_1_feliz from "../sprites/characters/Adriano/adriano_1_feliz.png";
import adriano_2_bravo from "../sprites/characters/Adriano/adriano_2_bravo.png";
import adriano_2_triste from "../sprites/characters/Adriano/adriano_2_triste.png";
import adriano_2_assustado from "../sprites/characters/Adriano/adriano_2_assustado.png";
import adriano_2_feliz from "../sprites/characters/Adriano/adriano_2_feliz.png";

// Aecio
import aecio_assustado from "../sprites/characters/Aecio/aecio_assustado.png";
import aecio_base from "../sprites/characters/Aecio/aecio_base.png";
import aecio_triste from "../sprites/characters/Aecio/aecio_triste.png";

// Rosa
import rosa_bravo from "../sprites/characters/Rosa/rosa_bravo.png";
import rosa_base from "../sprites/characters/Rosa/rosa_base.png";

// Osório
import osorio_assustado from "../sprites/characters/Osorio/osorio_assustado.png";
import osorio_base from "../sprites/characters/Osorio/osorio_base.png";

// Crianca
import crianca_bravo from "../sprites/characters/Crianca/crianca_bravo.png";
import crianca_feliz from "../sprites/characters/Crianca/crianca_feliz.png";
import crianca_triste from "../sprites/characters/Crianca/crianca_triste.png";

// Jose
import jose_bravo from "../sprites/characters/Jose/jose_bravo.png";
import jose_base from "../sprites/characters/Jose/jose_base.png";
import jose_triste from "../sprites/characters/Jose/jose_triste.png";

// Rosário
import rosario_assustado from "../sprites/characters/Rosario/rosario_assustado.png";
import rosario_base from "../sprites/characters/Rosario/rosario_base.png";

export const characters = {
	"Samuel": new Character("Samuel", [samuel_1_bravo, samuel_1_triste, samuel_1_assustado, samuel_2_bravo, samuel_2_assustado, samuel_2_triste]),
	"Mariinha": new Character("Mariinha", [mariinha_feliz, mariinha_assustado, mariinha_bravo, mariinha_triste]),
	"Caminhoneiro": new Character("Caminhoneiro", [caminhoneiro]),
	"Helenice": new Character("Helenice", [helenice_base, helenice_assustado, helenice_feliz, helenice_triste]),
	"?Madeinusa": new Character("???", [madeinusa_base, madeinusa_assustado, madeinusa_bravo, madeinusa_triste]),
	"Madeinusa": new Character("Madeinusa", [madeinusa_base, madeinusa_assustado, madeinusa_bravo, madeinusa_triste]),
	"Niceia": new Character("Niceia", [niceia_feliz, niceia_triste, niceia_bravo, niceia_assustado]),
	"Francisco": new Character("Francisco", [francisco_feliz, francisco_assustado, francisco_bravo, francisco_triste]),
	"?Francisco": new Character("???", [francisco_feliz, francisco_assustado, francisco_bravo, francisco_triste]),
	"Ivanisia": new Character("Ivanísia", [ivanisia_base, ivanisia_bravo]),
	"?Ivanisia": new Character("???", [ivanisia_base, ivanisia_bravo]),
	"?Manoel": new Character("???", [manoel_base, manoel_assustado]),
	"Manoel": new Character("Manoel", [manoel_base, manoel_assustado]),
	"Chico": new Character("Chico Coveiro", [chico]),
	"Adriano": new Character("Adriano", [adriano_1_base, adriano_1_assustado, adriano_1_bravo, adriano_1_feliz, adriano_1_triste, adriano_2_assustado, adriano_2_bravo, adriano_2_feliz, adriano_2_triste]),
	"Aecio": new Character("Aécio Diniz", [aecio_base, aecio_assustado, aecio_triste]),
	"Rosa": new Character("Rosa", [rosa_base, rosa_bravo]),
	"?Rosa": new Character("???", [rosa_base, rosa_bravo]),
	"Osorio": new Character("Osório", [osorio_base, osorio_assustado]),
	"?Osorio": new Character("???", [osorio_base, osorio_assustado]),
	"Crianca": new Character("Crianca", [crianca_feliz, crianca_bravo, crianca_triste]),
	"Jose": new Character("Francisco José", [jose_base, jose_bravo, jose_triste]),
	"?Jose": new Character("???", [jose_base, jose_bravo, jose_triste]),
	"Rosario": new Character("Rosário", [rosario_base, rosario_assustado]),
	"?Rosario": new Character("???", [rosario_base, rosario_assustado]),
}
