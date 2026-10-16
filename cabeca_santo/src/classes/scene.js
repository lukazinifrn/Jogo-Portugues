export class Scene {
	constructor(text, background, type, character, next, time = 1, image = 0,  description = "", music = "") {
		this.text = text
		this.background = background
		this.type = type
		this.character = character
		this.next = next
		this.time = time
		this.image = image
		this.description = description
		this.music = music
	}
}