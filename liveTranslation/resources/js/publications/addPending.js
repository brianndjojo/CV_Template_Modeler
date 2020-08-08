function addPending(){
    
    var addOthersButt = document.getElementById('addPending');
    var removeButton = document.getElementById('removePending');
    var infoPos = document.getElementById('fillingPending');
    var outputPos = document.getElementById('pendingSubmissions');
    
    var init = document.getElementsByClassName('inputPending');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedPending");
    outputPos.appendChild(paraInit);

    config.others.push(initFields);
    config.otherPlaceholders.push(paraInit);

    addOthersButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputPending');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;


        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedPending");
        outputPos.appendChild(para);


        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3"> <input type="text" class="form-control inputPending" placeholder="Authors"> </div> <div class="col-md-4  mb-3"> <input type="text" class="form-control inputPending" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3"> <input type="date" class="form-control inputPending" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.pendings.push(newInputPos);
        config.pendingsPlaceholders.push(para);

        
        console.log(config.pendings);
        console.log(config.pendingsPlaceholders);

        
        
    });

    removeButton.addEventListener('click', function(){
        config.pendings.pop(config.pendings);
        config.pendingsPlaceholders.pop(config.pendingsPlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);
        if(outputPos.childElementCount < 2){
            removeButton.style.display = 'none';
        }
           

        console.log(config.pendings);
        console.log(config.pendingsceholders)

    });

}

addPending();