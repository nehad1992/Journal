// User Interface

import './bootstrap.css';
import './styles.css';
import{Entry} from './journal.js';


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
  var input = new Entry($("#sentence").val());
  $("#output").text(input.sentence);
  $("#vowels").text(input.countVowels());
  $("#consonants").text(input.countConsonants());
  $("#teaser").text(input.getTeaser());
  });
});