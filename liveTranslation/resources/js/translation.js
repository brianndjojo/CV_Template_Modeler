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
  
function setupUpdater(index){
  var input=document.getElementsByTagName('input')
    , //orig=document.getElementById('original')
    orig=document.getElementsByClassName('textarea')
    , oldText=input.value
    , timeout=null
    //, selectedIndex=index
    ;
  
 /* handleChange is called 50ms after the user stops 
    typing. */


  function handleChange(){
    var inputs = document.getElementsByTagName('input');
    var originals = document.getElementsByClassName('textarea');
    //var newText = input[selectedIndex].value;
    console.log(inputs.length);
    console.log(originals.length);
    for(i=0; i < inputs.length; i++){
      inputs[i].addEventListener('change', function(){
        var newText = 'test';
        console.log(newText);
        if (newText==oldText) return; else oldText=newText;
        set(originals[i], newText);
      })
      
    }
    
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

var retrieveIndex = 0;
setupUpdater(retrieveIndex);


 
