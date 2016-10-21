var actualWord = null


var speak = function (word) {
	var speech = new SpeechSynthesisUtterance();

	speech.text = word;
	speech.lang = 'pt-BR';
	speech.rate = 1;
	speech.pitch = 1;
	speech.volume = 1;

	speechSynthesis.speak(speech);
}

var getNotUsedWord = function () {
	
	var index = Math.floor(Math.random() * (words.length + 1));
	return words[index];
}
actualWord = getNotUsedWord();
console.log(actualWord);

var speakActualWord = function () {
	speak(actualWord.word);
}

var speakActualDefinition = function () {
	speak(actualWord.definition);
}