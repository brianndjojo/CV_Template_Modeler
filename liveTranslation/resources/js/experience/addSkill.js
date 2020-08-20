function addSkill(){
    var addExpButt = document.getElementById('addSkill');
    var removeButton = document.getElementById('removeSkill');
    var infoPos = document.getElementById('fillingSkill');
    var outputPos = document.getElementById('skillOutput');
    
    var init = document.getElementsByClassName('inputSkill');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedExp");
    outputPos.appendChild(paraInit);

    config.skills.push(initFields);
    config.skillsPlaceholders.push(paraInit);

    addExpButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputSkill');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;


        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedExp");
        outputPos.appendChild(para);


        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3 mt-3"> <input type="text" class="form-control inputSkill" placeholder="Authors"> </div> <div class="col-md-4  mb-3 mt-3"> <input type="text" class="form-control inputSkill" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3 mt-3"> <input type="date" class="form-control inputSkill" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.skills.push(newInputPos);
        config.skillsPlaceholders.push(para);

        console.log(config.skills);
        console.log(config.skillsPlaceholders);
     
    });

    removeButton.addEventListener('click', function(){
        config.skills.pop(config.skills);
        config.skillsPlaceholders.pop(config.skillsPlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);

        if(outputPos.childElementCount < 2){
            removeButton.style.display = 'none';
        }

    });
}

addSkill();