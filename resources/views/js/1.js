function upper(params) {
    var newWord = "";

   words = params.split(' ');
   for (let i = 0; i < words.length; i++) {
    newWord += words[i].toUpperCase() ;

    if (i != words.length -1) {newWord += " ";}
   }
   return newWord;

}
console.log(upper('hi you how are you'))




//---------------------------------------------------------------------





function swap(word) {
    var newWord = "";
    for (let i = 0; i < word.length; i++) {
        if(word[i].toUpperCase() == word[i] ) {
            newWord += word[i].toLowerCase(); 
        }

        else
         {
            newWord += word[i].toUpperCase();
         }
        
    }
    return newWord;
}
console.log(swap("HeLlO"));
 



//---------------------------------------------------------------------


function unique(word) {
    var values = [];
    var values2 = [];
    var newWord = "";


for (let i = 0; i < word.length; i++) {
    values.push(word[i]);
}

 var x = word.length;
for (let i = 0; i < x; i++) {
    values.shift();
    // values.push(-1);
     
    if (!values2.includes(word[i])) 
    {
        newWord+=word[i];
        values2.push(word[i]);
    }

}

return newWord;

}  

   console.log(unique("thequickbrownfxjmpsvlazydg"));






//---------------------------------------------------------------------



   function longest (words) {
    words = words.split(' ');
   var  largest = words[0];
    for (let i = 1; i < words.length; i++) {
       if( words[i].length > largest.length ) 
       {
        largest = words[i];
       }
    }
    return largest;

   }

   console.log(longest('Web Development Tutorial'))