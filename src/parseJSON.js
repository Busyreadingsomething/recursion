// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  //create a holder for index and the character
  // the idea is to loop through the JSON 'string';

  let index = 0;
  let character;

  var loop = function(char) {
  	if (char && char !== character) {
  		throw new SyntaxError(`Expected '${char}'' instead of '${character}'`);
  	}

  	character = json.charAt(index);
  	index++;
  	return character;
  }

  //create a parser function for each type
  // obj, array, string, number, special values

  // create a function that moves through the loop?
  // can I do this with a for loop?
  // delcaring functions within a for loop isn't ideal

  // create a function that calls each function depending on the character type
  // call the parser function that goes selects the appropriate parser
  // return that call
};
