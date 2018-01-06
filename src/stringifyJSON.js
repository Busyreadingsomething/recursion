// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let res = '';
  
  if (Array.isArray(obj)) {
    res += '[';
  } else if (typeof obj === 'object' && obj !== null) {
    res += '{';
  }

  if (typeof obj === 'object' && obj !== null) {
  	
  	_.each(obj, function(value, i) {
  	  if (typeof value !== 'undefined' && typeof value !== 'function') {
  	  	if (typeof i === 'string') {
		  res += `"${i}":`;
		}

		if (value === null) {
		  res += 'null';        
		} else if (typeof value === 'object') {
		  res += stringifyJSON(value);
		} else if (typeof value === 'string') {
		  res += `"${value}"`;
		} else if (typeof value !== 'undefined' && typeof value !== 'function') {
		  res += value.toString();
		} 

		if (Array.isArray(obj)) {
		  if (i !== obj.length - 1) {
		    res += ',';
		  }
		} else if (typeof obj === 'object' && obj !== null) {
		  let keys = Object.keys(obj);
		  if (i !== keys[keys.length - 1]) {
		    res += ',';
		  }
		}
  	  }

	});

  } else {
  	if (obj === null) {
      res += 'null';        
    } else if (typeof obj === 'string') {
      res += `"${obj}"`;
    } else if (typeof obj !== 'undefined' && typeof obj !== 'function') {
      res += obj.toString();
    }
  }
  
  if (Array.isArray(obj)) {
    res += ']';
  } else if (typeof obj === 'object' && obj !== null) {
    res += '}';
  }
  
  return res;
};
