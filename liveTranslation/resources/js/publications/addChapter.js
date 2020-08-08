function addChapters(){
    
    var addPubButt = document.getElementById('addChapter');
    var removeButton = document.getElementById('removeChapter');
    var infoPos = document.getElementById('fillingChapter');
    var outputPos = document.getElementById('chapters');
    
    var init = document.getElementsByClassName('inputChapter');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedPub");
    outputPos.appendChild(paraInit);
   
    config.chapters.push(initFields);
    config.chaptersPlaceholders.push(paraInit);

    addPubButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputChapter');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;


        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedPub");
        outputPos.appendChild(para);


        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3 mt-3"> <input type="text" class="form-control inputChapter" placeholder="Authors"> </div> <div class="col-md-4  mb-3 mt-3"> <input type="text" class="form-control inputChapter" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3 mt-3"> <input type="date" class="form-control inputChapter" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.chapters.push(newInputPos);
        config.chaptersPlaceholders.push(para);

        
        console.log(config.chapters);
        console.log(config.chaptersPlaceholders);

        
        
    });

    removeButton.addEventListener('click', function(){
        config.chapters.pop(config.chapters);
        config.chaptersPlaceholders.pop(config.chaptersPlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);

        if(outputPos.childElementCount < 2){
            removeButton.style.display = 'none';
        }
           

        console.log(config.chapters);
        console.log(config.chaptersPlaceholders);

    });

}

addChapters();