function addIndustry(){
    var addExpButt = document.getElementById('addIndustry');
    var removeButton = document.getElementById('removeIndustry');
    var infoPos = document.getElementById('fillingIndustry');
    var outputPos = document.getElementById('industrialExpOutput');
    
    var init = document.getElementsByClassName('inputIndustry');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedExp");
    outputPos.appendChild(paraInit);

    config.industry.push(initFields);
    config.industryPlaceholders.push(paraInit);

    addExpButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputIndustry');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;


        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedExp");
        outputPos.appendChild(para);


        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3 mt-3"> <input type="text" class="form-control inputIndustry" placeholder="Authors"> </div> <div class="col-md-4  mb-3 mt-3"> <input type="text" class="form-control inputIndustry" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3 mt-3"> <input type="date" class="form-control inputIndustry" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.industry.push(newInputPos);
        config.industryPlaceholders.push(para);

        console.log(config.industry);
        console.log(config.industryPlaceholders);
     
    });

    removeButton.addEventListener('click', function(){
        config.industry.pop(config.industry);
        config.industryPlaceholders.pop(config.industryPlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);

        if(outputPos.childElementCount < 2){
            removeButton.style.display = 'none';
        }

    });
}

addIndustry();