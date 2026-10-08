export class Choice{
	constructor(text, next, checkpoint = "") {
		this.text = text
		this.next = next
		this.checkpoint = checkpoint
	}
}