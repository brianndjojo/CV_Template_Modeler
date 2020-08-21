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
    , currentTemp=document.getElementById('currentPositionPlaceHolder')
    , educationInput=document.getElementsByClassName('inputEducation')
    , phdTemp=document.getElementById('phd')
    , mastersTemp=document.getElementById('masters')
    , bachelorsTemp=document.getElementById('bachelors')
    , secondaryTemp=document.getElementById('secondary')
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
    var currentPosition = input[7].value + ' ' + input[8].value + ' ' + input[9].value;
    var newJournal, newConference, newMonograph, newChapter, newReview, newPending, newPatents, newOthers;
    var newCert, newFellowship;
    var newIndustry, newEmployment, newLeader, newSkill;
    var newAff, newInt, newLan, newMem, newVol;
    var newRef;

    var phd = educationInput[0].value + ' ' + educationInput[1].value + ' ' + educationInput[2].value;
    var masters = educationInput[3].value + ' ' + educationInput[4].value + ' ' + educationInput[5].value;
    var bachelors = educationInput[6].value + ' ' + educationInput[7].value + ' ' + educationInput[8].value;
    var secondary = educationInput[9].value + ' ' + educationInput[10].value + ' ' + educationInput[11].value;
 
    

    set(name, fullName);
    set(email, emailAddr)
    set(contactTemp, contactNo)
    set(univ, university);
    set(depart, department);
    set(researchTemp, researchInterest);
    set(currentTemp, currentPosition);

    //Live translation section for education
    set(phdTemp, phd);
    set(mastersTemp, masters);
    set(bachelorsTemp, bachelors);
    set(secondaryTemp, secondary);

    //live translation for certifications
    for(let i = 0; i < config.certPlaceholders.length; i++){
      newCert = config.certs[i][0].value + config.certs[i][1].value + config.certs[i][2].value;
      set(config.certPlaceholders[i], newCert);
    }    

    //Live translation for fellowship/awards
    for(let i = 0; i < config.fellowshipPlaceholders.length; i++){
      newFellowship = config.fellowship[i][0].value + config.fellowship[i][1].value + config.fellowship[i][2].value;
      set(config.fellowshipPlaceholders[i], newFellowship);
    }
    

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

    //Under Review
    for(let n = 0; n < config.reviewsPlaceholders.length; n++){
      newReview = config.reviews[n][0].value + config.reviews[n][1].value + config.reviews[n][2].value;
      set(config.reviewsPlaceholders[n], newReview);
    }

    //Pending Submissions
    for(let o = 0; o < config.pendingsPlaceholders.length; o++){
      newPending = config.pendings[o][0].value + config.pendings[o][1].value + config.pendings[o][2].value;
      set(config.pendingsPlaceholders[o], newPending);
    }

    //Patents
    for(let p = 0; p < config.patentsPlaceholders.length; p++){
      newPatents = config.patents[p][0].value + config.patents[p][1].value + config.patents[p][2].value;
      set(config.patentsPlaceholders[p], newPatents);
    }

    //Others
    for(let j = 0; j < config.otherPlaceholders.length; j++){
      newOthers = config.others[j][0].value + config.others[j][1].value + config.others[j][2].value;
      set(config.otherPlaceholders[j], newOthers)
    }

    //Live translation for Internships and Professional Experience.
    //Industrial Experience
    for(let i = 0; i < config.industryPlaceholders.length; i++){
      newIndustry = config.industry[i][0].value + config.industry[i][1].value + config.industry[i][2].value;
      set(config.industryPlaceholders[i], newIndustry);
    }
    //Employment
    for(let j = 0; j < config.employmentPlaceholders.length; j++){
      newEmployment = config.employment[j][0].value + config.employment[j][1].value + config.employment[j][2].value;
      set(config.employmentPlaceholders[j], newEmployment);
    }
    //Leadership Exprience
    for(let k = 0; k < config.leadershipPlaceholders.length; k++){
      newLeader = config.leadership[k][0].value + config.leadership[k][1].value + config.leadership[k][2].value;
      set(config.leadershipPlaceholders[k], newLeader);
    }
    //Relevant SKillset
    for(let n = 0; n < config.skillsPlaceholders.length; n++){
      newSkill = config.skills[n][0].value + config.skills[n][1].value + config.skills[n][2].value;
      set(config.skillsPlaceholders[n], newSkill);
    }

    //Live Translation for services
    for(let i = 0; i < config.affilationsPlaceholders.length; i++){
      newAff = config.affilations[i][0].value + config.affilations[i][1].value + config.affilations[i][2].value;
      set(config.affilationsPlaceholders[i], newAff);
    }
    
    for(let j = 0; j < config.interestPlaceholders.length; j++){
      newInt = config.interest[i][0].value + config.interest[i][1].value + config.interest[i][2].value;
      set(config.interestPlaceholders[j], newInt);
    }

    for(let k = 0; k < config.languagePlaceholders.length; k++){
      newLan = config.language[k][0].value + config.language[k][1].value + config.language[k][2].value;
      set(config.languagetPlaceholders[k], newLan);
    }

    for(let m = 0; m < config.membershipsPlaceholders.length; m++){
      newMem = config.memberships[m][0].value + config.memberships[m][1].value + config.memberships[m][2].value;
      set(config.membershipsPlaceholders[m], newMem);
    }

    for(let n = 0; n < config.voluntaryPlaceholders.length; n++){
      newVol = config.voluntary[n][0].value + config.voluntary[n][1].value + config.voluntary[n][2].value;
      set(config.voluntaryPlaceholders[n], newVol);
    }
    
    //for referees
    for(let i = 0; i < config.refsPlaceholders.length; i++){
      newRef = config.refs[i][0].value + config.refs[i][1].value + config.refs[i][2].value;
      set(config.refsPlaceholders[i], newRef);
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

 
