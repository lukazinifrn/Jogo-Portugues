import { Scene } from "../classes/scene";
import { Choice } from "../classes/choice";

export const scenes = {
    // Texto, fundo, tipo, personagem, next, duração, imagem (opcional), descrição (opcional)

    // Começo da história
	"a.1": new Scene("...", "", "click", "", ["a.2"]),
    "a.2": new Scene("Meu filho...", "b1", "click", "Mariinha", ["a.3"]),
    "a.3": new Scene("Eu vou embora na quinta...", "b1", "click", "Mariinha", ["a.4"]),
    "a.4": new Scene("Minha mãe vem me buscar.", "b1", "click", "Mariinha", ["a.5"]),
    "a.5": new Scene("Não fala essas coisas, mãe...", "b1", "click", "Samuel", ["a.6"]),
    "a.6": new Scene("Samuel, me escute, eu quero que você faça algo para mim...", "b1", "click", "Mariinha", ["a.7"]),
    "a.7": new Scene("", "b1", "choice", "Mariinha", [new Choice("Sim, mãe Mariinha", "a.8"), new Choice("Me desculpe, mãe Mariinha...", "b.1")], 1),

    // Final 1 (Tormento)
    "b.1": new Scene("Está tudo bem, meu filho...", "b1", "click", "Mariinha", ["b.2"]),
    "b.2": new Scene("Eu ainda te amarei...", "b1", "click", "Mariinha", ["b.3"], 2, 1),
    "b.3": new Scene("...para sempre.", "", "click", "", ["b.4"]),
    "b.4": new Scene("...", "", "click", "", ["b.5"]),
    "b.5": new Scene("Após a morte de Mariinha, Samuel vive a sua vida com constante arrependimento...", "", "click", "", ["b.6"], 1.5),
    "b.6": new Scene('"O que será que minha mão queria que eu fizesse?", pensa ele todos os dias.', "", "click", "", ["b.7"], 1.5),
    "b.7": new Scene("Mas não importa o quão forte sua melancolia e arrependimento sejam.", "", "click", "", ["b.8"]),
    "b.8": new Scene("Nada irá mudar as decisões que tomou, viverá de tormenta para sempre, assim como Mariinha se foi para sempre.", "", "click", "", ["b.9"], 1.5),
    "b.9": new Scene("Talvez se pudesse voltar no tempo e aceitar o desejo da sua mãe...", "", "click", "", ["b.10"]),
    "b.10": new Scene('"Tudo seria melhor."', "", "click", "", ["F.1"]),
    "F.1": new Scene("Final 1 - Tormento", "", "final", "", [], 0, 0, "Samuel passa o resto da sua vida arrependido."),
    // Fim do final 1

    "a.8": new Scene("Muito obrigada, Samuel.", "b1", "click", "Mariinha", ["a.9"]),
    "a.9": new Scene("Eu quero que você acenda três velas para minha alma.", "b1", "click", "Mariinha", ["a.10"]),
    "a.10": new Scene("A primeira no santuário do meu padim Cícero...", "b1", "click", "Mariinha", ["a.11"]),
    "a.11": new Scene("A segunda na estátua do são Francisco de Canindé, no dia em que você puder ir lá...", "b1", "click", "Mariinha", ["a.12"], 1.5),
    "a.12": new Scene("E a terceira é para santo Antônio, porque ele era o santo de devoção da minha mãe.", "b1", "click", "Mariinha", ["a.13"], 1.5),
    "a.13": new Scene("Todas três nos pés deles, meu filho, encostadas nos pés, isso é importante pra mim.", "b1", "click", "Mariinha", ["a.14"], 1.5),
    "a.14": new Scene("Mas o mais importante para mim é que você vá encontrar o seu pai e sua avó, em Candeia.", "b1", "click", "Mariinha", ["a.15"], 1.5),
    "a.15": new Scene("Não quero procurar aquela gente que nunca se importou com nós!", "b1", "click", "Samuel", ["a.16"]),
    "a.16": new Scene("Esse maldito... já deve ter família e filhos...", "b1", "click", "Samuel", ["a.17"]),
    "a.17": new Scene("Samuel, por favor... eu sei que é você é muito frustado em relação a isso...", "b1", "click", "Mariinha", ["a.18"], 1.5),
    "a.18": new Scene("Mas tente perdoá-los, meu filho. Vá até Candeia.", "b1", "click", "Mariinha", ["a.19"]),
    "a.19": new Scene("Samuel respira fundo.", "b1", "click", "", ["a.20"]),
    "a.20": new Scene("Certo... farei isso por você, mãe Mariinha.", "b1", "click", "Samuel", ["a.21"]),
    "a.21": new Scene("Muito obrigada novamente, meu filho... minha alma poderá descansar.", "b1", "click", "Mariinha", ["a.22"], 1.5),
    "a.22": new Scene("Mariinha dá um papel velho a Samuel, com umas palavras e números escritos.", "b1", "click", "", ["a.23"], 1.5),
    "a.23": new Scene("Deus irá te ajudar, Samuel.", "b1", "click", "Mariinha", ["a.24"]),
    "a.24": new Scene("...", "", "click", "", ["a.25"]),
}