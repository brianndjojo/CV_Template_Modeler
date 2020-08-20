function addAffilation(){
    var addSerButt = document.getElementById('addAffilation');
    var removeButton = document.getElementById('removeAffilation');
    var infoPos = document.getElementById('fillingAffilation');
    var outputPos = document.getElementById('affilationsOutput');
    
    var init = document.getElementsByClassName('inputAffilation');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedAff");
    outputPos.appendChild(paraInit);

    config.affilations.push(initFields);
    config.affilationsPlaceholders.push(paraInit);

    addSerButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputAffilation');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;
   
        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedAff");
        outputPos.appendChild(para);

        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3 mt-3"> <input type="text" class="form-control inputAffilation" placeholder="Authors"> </div> <div class="col-md-4  mb-3 mt-3"> <input type="text" class="form-control inputAffilation" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3 mt-3"> <input type="date" class="form-control inputAffilation" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.affilations.push(newInputPos);
        config.affilationsPlaceholders.push(para);

        console.log(config.affilations);
        console.log(config.affilationsPlaceholders);
     
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

addAffilation();