function addMembership(){
    var addSerButt = document.getElementById('addMemberships');
    var removeButton = document.getElementById('removeMemberships');
    var infoPos = document.getElementById('fillingMemberships');
    var outputPos = document.getElementById('membershipOutput');
    
    var init = document.getElementsByClassName('inputMemberships');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedMem");
    outputPos.appendChild(paraInit);

    config.affilations.push(initFields);
    config.affilationsPlaceholders.push(paraInit);

    addSerButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputMemberships');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;
   
        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedMem");
        outputPos.appendChild(para);

        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3 mt-3"> <input type="text" class="form-control inputMemberships" placeholder="Authors"> </div> <div class="col-md-4  mb-3 mt-3"> <input type="text" class="form-control inputMemberships" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3 mt-3"> <input type="date" class="form-control inputMemberships" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.affilations.push(newInputPos);
        config.affilationsPlaceholders.push(para);

    
     
    });

    removeButton.addEventListener('click', function(){
        config.affilations.pop(config.affilations);
        config.affilationsPlaceholders.pop(config.affilationsPlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);

        if(outputPos.childElementCount < 2){
            removeButton.style.display = 'none';
        }

    });
}

addMembership();