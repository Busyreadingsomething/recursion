// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  let res = [];

  let search = function(elem) {
  	if(elem.classList && elem.classList.contains(className)) {
  		res.push(elem);
  	}

  	for (let i = 0; i < elem.childNodes.length; i++) {
  		search(elem.childNodes[i]);
  	}
  }

  search(document.body);
  return res;

};