/* A convenience function to reverse a string, and 
 * one to set the content of an element.
 */

 /*https://inimino.org/~inimino/blog/javascript_live_text_input*/
 
 
function set(el,text){
  while(el.firstChild)el.removeChild(el.firstChild);
  el.appendChild(document.createTextNode(text))}
  
 /* setupUpdater will be called once, on page load.
  */
  
function setupUpdater(){
  var input=document.getElementsByTagName('input')
    , orig=document.getElementById('original')
    , oldText=input.value
    , timeout=null;
  
 /* handleChange is called 50ms after the user stops 
    typing. */


  function handleChange(){
    var newText = input[0].value + input[1].value;
    
    
    if (newText==oldText) return; else oldText=newText;
    set(orig, newText);
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
  return input;
}
  


var inputList = setupUpdater();

for( i = 0; i < inputList.length; i++){
  document.getElementsByTagName[i]('input').focus();
}
 
