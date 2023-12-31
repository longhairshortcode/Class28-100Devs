//Thurs 8/31 Codewars

//Task
//An isogram is a word that has no repeating letters, 
//consecutive or non-consecutive. Implement a function 
//that determines whether a string that contains only 
//letters is an isogram. Assume the empty string is 
//an isogram. Ignore letter case.

//code

//way 1
function isIsogram(str){
    return new Set(str.toLowerCase()).size === str.length
    }

// way 2

function isIsogram(str){
    const letterCount = {};
      
      for (const letter of str.toLowerCase()){
        if (letterCount[letter]){
          return false;
        }else{
          letterCount[letter] = true;
        }
      } return true;
    };