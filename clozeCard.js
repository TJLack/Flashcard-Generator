
	
		function ClozeFlashCard(text, cloze) {
	this.cloze = cloze;
	this.text = text;
	this.partial = this.text.replace(this.cloze, '...');
	this.fullText = text;
	this.error = function() {
		if (this.text.includes(this.cloze)) {
		}
		else {
			console.log("error");
		}
	};
};

	var firstPresident = new ClozeFlashCard(
	"George Washington was the first president of the United States.",
	"George Washington");

	console.log(firstPresident.cloze);
	console.log(firstPresident.partial);
	console.log(firstPresident.fullText);


	var brokenCloze = new ClozeFlashCard("This doesn't work", "error");
	brokenCloze.error();


	module.exports = ClozeFlashCard;