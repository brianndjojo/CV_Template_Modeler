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
    , name=document.getElementById('namePlaceHolder')
    , email=document.getElementById('emailPlaceHolder')
    , contactTemp=document.getElementById('phonePlaceHolder')
    , univ=document.getElementById('universityPlaceHolder')
    , depart=document.getElementById('departmentPlaceHolder')
    , researchTemp=document.getElementById('researchInterestPlaceHolder')
    , timeout=null;
  
 /* handleChange is called 50ms after the user stops 
    typing. */


  function handleChange(){
    var fullName = document.getElementById('maritalStatus').value + ' ' + input[0].value + ' ' + input[1].value;
    var emailAddr = input[2].value;
    var contactNo = input[3].value;
    var university = input[4].value;
    var department = input[5].value;
    var researchInterest = input[6].value;
    var newJournal, newConference, newMonograph, newChapter, newReview, newPending, newPatents, newOthers;
    // if (newText==oldText) return; else oldText=newText;
    set(name, fullName);
    set(email, emailAddr)
    set(contactTemp, contactNo)
    set(univ, university);
    set(depart, department);
    set(researchTemp, researchInterest);

    //Live translation section for publications.

    //Journals
    for(let i = 0; i < config.publicationPlaceholders.length; i++){
      newJournal = config.publications[i][0].value + config.publications[i][1].value + config.publications[i][2].value;
      set(config.publicationPlaceholders[i], newJournal);
    }

    //Conferences
    for(let k = 0; k < config.conferencesPlaceholders.length; k++){
      newConference = config.conferences[k][0].value + config.conferences[k][1].value + config.conferences[k][2];
      set(config.conferencesPlaceholders[k], newConference);
    }

    //Monographs
    for(let l = 0; l < config.monographsPlaceholders.length; l++){
      newMonograph = config.monographs[l][0].value + config.monographs[l][1].value + config.monographs[l][2].value;
      set(config.monographsPlaceholders[l], newMonograph);
    }

    //Book Chapters
    for(let m = 0; m < config.chaptersPlaceholders.length; m++){
      newChapter = config.chapters[m][0].value + config.chapters[m][1].value + config.chapters[m][2].value;
      set(config.chaptersPlaceholders[m], newChapter);
    }

    //Others
    for(let j = 0; j < config.otherPlaceholders.length; j++){
      newOthers = config.others[j][0].value + config.others[j][1].value + config.others[j][2].value;
      set(config.otherPlaceholders[j], newOthers)
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

setupUpdater();

 
