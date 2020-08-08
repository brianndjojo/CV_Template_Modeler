function addConference(){
    var addPubButt = document.getElementById('addConference');
    var removeButton = document.getElementById('removeConference');
    var infoPos = document.getElementById('fillingConference');
    var outputPos = document.getElementById('conferences');
    
    var init = document.getElementsByClassName('inputConference');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedPub");
    outputPos.appendChild(paraInit);

    config.conferences.push(initFields);
    config.conferencesPlaceholders.push(paraInit);

    addPubButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputConference');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;


        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedPub");
        outputPos.appendChild(para);


        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3 mt-3"> <input type="text" class="form-control inputConference" placeholder="Authors"> </div> <div class="col-md-4  mb-3 mt-3"> <input type="text" class="form-control inputConference" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3 mt-3"> <input type="date" class="form-control inputConference" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.conferences.push(newInputPos);
        config.conferencesPlaceholders.push(para);

        
        console.log(config.conferencesPlaceholders);
        console.log(config.conferencesPlaceholders);

        
        
    });

    removeButton.addEventListener('click', function(){
        config.conferences.pop(config.conferences);
        config.conferencesPlaceholders.pop(config.conferencesPlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);

        if(outputPos.childElementCount < 2){
            removeButton.style.display = 'none';
        }
           

        console.log(config.conferences);
        console.log(config.conferencesPlaceholders)

    });
}

addConference();