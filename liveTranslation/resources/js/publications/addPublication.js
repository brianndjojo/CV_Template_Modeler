function addPublication(){
    
    var addPubButt = document.getElementById('addPublication');
    var removeButton = document.getElementById('removePublication');
    var infoPos = document.getElementById('fillingPublication');
    var outputPos = document.getElementById('publications');
    
    var init = document.getElementsByClassName('inputPublications');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedPub");
    outputPos.appendChild(paraInit);

    config.publications.push(initFields);
    config.publicationPlaceholders.push(paraInit);

    addPubButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputPublications');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;


        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedPub");
        outputPos.appendChild(para);


        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3"> <input type="text" class="form-control inputPublications" placeholder="Authors"> </div> <div class="col-md-4  mb-3"> <input type="text" class="form-control inputPublications" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3"> <input type="date" class="form-control inputPublications" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.publications.push(newInputPos);
        config.publicationPlaceholders.push(para);

        
        console.log(config.publications);
        console.log(config.publicationPlaceholders);

        
        
    });

    removeButton.addEventListener('click', function(){
        config.publications.pop(config.publications);
        config.publicationPlaceholders.pop(config.publicationPlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);
        if(outputPos.childElementCount < 3){
            removeButton.style.display = 'none';
        }
           

        console.log(config.publications);
        console.log(config.publicationPlaceholders)

    });

}

addPublication();