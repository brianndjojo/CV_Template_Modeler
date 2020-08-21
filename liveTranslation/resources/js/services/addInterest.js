function addInterest(){
    var addSerButt = document.getElementById('addInterest');
    var removeButton = document.getElementById('removeInterest');
    var infoPos = document.getElementById('fillingInterest');
    var outputPos = document.getElementById('interestOutput');
    
    var init = document.getElementsByClassName('inputInterest');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedInt");
    outputPos.appendChild(paraInit);

    config.interest.push(initFields);
    config.interestPlaceholders.push(paraInit);

    addSerButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputInterest');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;
   
        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedInt");
        outputPos.appendChild(para);

        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3 mt-3"> <input type="text" class="form-control inputInterest" placeholder="Authors"> </div> <div class="col-md-4  mb-3 mt-3"> <input type="text" class="form-control inputInterest" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3 mt-3"> <input type="date" class="form-control inputInterest" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.interest.push(newInputPos);
        config.interestPlaceholders.push(para);

     
    });

    removeButton.addEventListener('click', function(){
        config.interest.pop(config.interest);
        config.interestPlaceholders.pop(config.interestPlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);

        if(outputPos.childElementCount < 2){
            removeButton.style.display = 'none';
        }

    });
}

addInterest();