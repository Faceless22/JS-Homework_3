"use strict";

// (1)
function isNumberInRange(num){
    if(num > 0 && num < 10){
        return true;
    }else{
        return false;
    }
}

// (2)
function isEven(num){
	if(num % 2 == 0){
		return true;
	}else{
		return false;
	}
}

// (3)
var value = +prompt('value?', '');
switch(value){
    case 0:
    console.log(0);
    break;

    case 1:
    console.log(1);
    break;

    case 2:
    case 3:
    console.log(2, 3);
    break;
}

// (4)
function min(a, b){
    if(a < b){
      return a;
    }else {
      return b;
    }
}