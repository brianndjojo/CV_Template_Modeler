function addInterest(){
    var addSerButt = document.getElementById('addLanguage');
    var removeButton = document.getElementById('removeLanguage');
    var infoPos = document.getElementById('fillingLanguage');
    var outputPos = document.getElementById('languageOutput');
    
    var init = document.getElementsByClassName('inputLanguage');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedLang");
    outputPos.appendChild(paraInit);

    config.language.push(initFields);
    config.languagePlaceholders.push(paraInit);

    addSerButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputLanguage');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;
   
        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedLang");
        outputPos.appendChild(para);

        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3 mt-3"> <input type="text" class="form-control inputLanguage" placeholder="Authors"> </div> <div class="col-md-4  mb-3 mt-3"> <input type="text" class="form-control inputLanguage" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3 mt-3"> <input type="date" class="form-control inputLanguage" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.language.push(newInputPos);
        config.languagePlaceholders.push(para);

        console.log(config.language);
        console.log(config.languagePlaceholders);
     
    });

    removeButton.addEventListener('click', function(){
        config.language.pop(config.language);
        config.languagePlaceholders.pop(config.languagePlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);

        if(outputPos.childElementCount < 2){
            removeButton.style.display = 'none';
        }

    });
}

addInterest();