/* A convenience function to reverse a string, and 
 * one to set the content of an element.
 */

 /*https://inimino.org/~inimino/blog/javascript_live_text_input*/
 
 //adds text properly to the field.
function set(el,text){
  while(el.firstChild)
    el.removeChild(el.firstChild);
  el.appendChild(document.createTextNode(text))
}
  
 /* setupUpdater will be called once, on page load.
  */
  
function setupUpdater(){
  var input=document.getElementsByTagName('input')
    , orig=document.getElementById('original')
    , foo= document.getElementById('a')
    , bar= document.getElementById('b')
    , origClass=document.getElementsByClassName('textarea')
    , oldText=input.value
    , timeout=null;
  
 /* handleChange is called 50ms after the user stops 
    typing. */


  function handleChange(){
    var newText1 = input[1].value;
    var newText2 = input[2].value;
    
    var newText0 = input[0].value;
    
    var selectedIndex = 0;
    for(i = 0; i < input.length-1; i++){
      input[i].addEventListener("change", function(){
        newText = input[i].value;
        selectedIndex = i
        console.log("log: " + i); //12
      })
    }
    console.log(input.length, newText0, input[1].value, input[2].value, selectedIndex);
    // if (newText==oldText) return; else oldText=newText;
    set(orig, newText0);
    set(foo, newText1);
    
    set(bar, newText2);

    
  }
  
 /* eventHandler is called on keyboard and mouse events.
    If there is a pending timeout, it cancels it.
    It sets a timeout to call handleChange in 50ms. */
  function eventHandler(){
   if(timeout) clearTimeout(timeout);
   timeout=setTimeout(handleChange, 50);
  }

  for(i= 0 ; i < input.length; i++){
    input[i].onkeydown=input[i].onkeyup=input[i].onclick=eventHandler;
  }
}

//MODULARIZATION CODE APPEARS TO NOT BE WORKING.

/*var retrieve = document.getElementsByTagName('input');
var retrieveIndex;

for( i = 0; i < retrieve.length; i++){
  document.getElementsByTagName('input')[i].focus();
}

for(i = 0; i < retrieve.length; i++){
  document.getElementsByTagName('input')[i].addEventListener('keydown',function(){
    retrieveIndex = i;
  })
}*/

var retrieve = document.getElementsByTagName('input');
for( i = 0; i < retrieve.length; i++){
  document.getElementsByTagName('input')[i].focus();
}

setupUpdater();


 
