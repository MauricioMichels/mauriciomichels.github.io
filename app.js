var actualWord = null;
var actualPlayer = {};

speechSynthesis.getVoices();

var speak = function(word) {
	var speech = new SpeechSynthesisUtterance();
	speech.voice =  speechSynthesis.getVoices()[15];
	speech.text = word;
	speech.rate = 1;
	speech.pitch = 1;
	speech.volume = 1;

	speechSynthesis.speak(speech);
}

var getNotUsedWord = function() {
	var index = Math.floor(Math.random() * (words.length + 1));
	return words[index];
}

var removeUsedWord = function(word) {
	words.splice(word, 1);
}

var speakActualWord = function() {
	speak(actualWord.word);
}

var speakActualDefinition = function() {
	speak(actualWord.definition);
}

var initGame = function() {
	var name = document.querySelector('#name').value;
	if (name) {
		setName(name);
		gameMode();
		actualWord = getNotUsedWord();

	} else {
		alert('Informe um nome de usuario');
	}
}

var setName = function(name) {
	actualPlayer.name = name;
	document.querySelector('#nameLabel').innerHTML = actualPlayer.name;
}
var verifyWord = function() {
	var word = document.querySelector('#word').value;
	if (word.toUpperCase() == actualWord.word.toUpperCase()) {
		alert('acertou carai');
		nextWord();
		var word = document.querySelector('#word').value = "";
	} else {
		confirm('Errou');
		window.location.reload()
	}
}

var nextWord = function() {
	removeUsedWord(actualWord);
	actualWord = getNotUsedWord();
}

var initMode = function() {
	document.querySelector('#init').style.display = 'block';
	document.querySelector('#game').style.display = 'none';
}

var gameMode = function() {
	document.querySelector('#game').style.display = 'block';
	document.querySelector('#init').style.display = 'none';
}

initMode();