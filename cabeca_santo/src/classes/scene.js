export class Scene {
	constructor(text, background, type, character, next, time = 0) {
		this.text = text
		this.background = background
		this.type = type
		this.character = character
		this.next = next
		this.time = time
	}
}