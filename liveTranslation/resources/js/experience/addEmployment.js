function addEmployment(){
    var addExpButt = document.getElementById('addEmploy');
    var removeButton = document.getElementById('removeEmploy');
    var infoPos = document.getElementById('fillingEmploy');
    var outputPos = document.getElementById('employmentOutput');
    
    var init = document.getElementsByClassName('inputEmploy');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedExp");
    outputPos.appendChild(paraInit);

    config.employment.push(initFields);
    config.employmentPlaceholders.push(paraInit);

    addExpButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputEmploy');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;


        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedExp");
        outputPos.appendChild(para);


        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3 mt-3"> <input type="text" class="form-control inputEmploy" placeholder="Authors"> </div> <div class="col-md-4  mb-3 mt-3"> <input type="text" class="form-control inputEmploy" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3 mt-3"> <input type="date" class="form-control inputEmploy" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.employment.push(newInputPos);
        config.employmentPlaceholders.push(para);

        console.log(config.employment);
        console.log(config.employmentPlaceholders);
     
    });

    removeButton.addEventListener('click', function(){
        config.employment.pop(config.employment);
        config.employmentPlaceholders.pop(config.employmentPlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);

        if(outputPos.childElementCount < 2){
            removeButton.style.display = 'none';
        }

    });
}

addEmployment();