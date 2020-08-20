function addLeader(){
    var addExpButt = document.getElementById('addLeader');
    var removeButton = document.getElementById('removeLeader');
    var infoPos = document.getElementById('fillingLeader');
    var outputPos = document.getElementById('leadershipOutput');
    
    var init = document.getElementsByClassName('inputLeader');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedExp");
    outputPos.appendChild(paraInit);

    config.leadership.push(initFields);
    config.leadershipPlaceholders.push(paraInit);

    addExpButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputLeader');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;


        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedExp");
        outputPos.appendChild(para);


        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3 mt-3"> <input type="text" class="form-control inputLeader" placeholder="Authors"> </div> <div class="col-md-4  mb-3 mt-3"> <input type="text" class="form-control inputLeader" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3 mt-3"> <input type="date" class="form-control inputLeader" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.leadership.push(newInputPos);
        config.leadershipPlaceholders.push(para);

        console.log(config.leadership);
        console.log(config.leadershipPlaceholders);
     
    });

    removeButton.addEventListener('click', function(){
        config.industry.pop(config.leadership);
        config.industryPlaceholders.pop(config.leadershipPlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);

        if(outputPos.childElementCount < 2){
            removeButton.style.display = 'none';
        }

    });
}

addLeader();