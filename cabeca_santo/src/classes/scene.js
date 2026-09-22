export class Scene {
	constructor(text, background, type, character, next, time, image = 0,  description = "") {
		this.text = text
		this.background = background
		this.type = type
		this.character = character
		this.next = next
		this.time = time
		this.image = image
		this.description = description
	}
}