// Reverse a string 

function reverseString(text) {
   
    let result = "";

    
    for (let i = text.length - 1; i >= 0; i--) {
        
      
        result = result + text[i];
    }

    
    return result;
}


console.log(reverseString("Lorem Ipsum")); 