//  Back end logic
export function Entry(sentence) {
  this.sentence = sentence;
};

Entry.prototype.countWords = function() {
  var sentencePerWord = this.sentence.split(" ");
  return sentencePerWord.length;
}

Entry.prototype.countVowels = function() {
  var vowels = /[aeiou]/i;
  var sentencePerChar = this.sentence.split("");
  var charCount = 0;
  for (var i = 0; i < sentencePerChar.length; i ++) {
    if (sentencePerChar[i].match(vowels)) {
      charCount+= 1;
    }
  }
  return charCount;
}

Entry.prototype.countConsonants = function() {
  var consonants = /[bcdfghjklmnpqrstvwxyz]/i;
  var sentencePerChar = this.sentence.split("");
  var charCount = 0;
  for (var i =0; i<sentencePerChar.length; i++){
    if (sentencePerChar[i].match(consonants)) {
      charCount +=1;
    }
  } return charCount;
}

Entry.prototype.getTeaser = function () {
  var sentencePerWord = this.sentence.split(" ");
  var sentenceEnd = /[.!?;]/i;
  var teaserSentence = [];
  for (var i = 0; i < sentencePerWord.length ; i++){
    if (i===7){
      teaserSentence.push(sentencePerWord[i]);
      return teaserSentence.join(" ");
    } else if (sentencePerWord[i].match(sentenceEnd)) {
      teaserSentence.push(sentencePerWord[i]);
      return teaserSentence.join(" ");
    } else {
      teaserSentence.push(sentencePerWord[i]);
    }
  }
}



