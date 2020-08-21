function addRefs(){
    
    var addRefsButt = document.getElementById('addRef');
    var removeButton = document.getElementById('removeRef');
    var infoPos = document.getElementById('fillingRef');
    var outputPos = document.getElementById('referees');
    
    var init = document.getElementsByClassName('inputRef');
    var initFields = [];
    
    initFields.push(init[0]);
    initFields.push(init[1]);
    initFields.push(init[2]);
    
    //Div for the added publications.
    var paraInit = document.createElement("DIV");
    paraInit.classList.add("p-2");
    paraInit.classList.add("addedRef");
    outputPos.appendChild(paraInit);

    config.refs.push(initFields);
    config.refsPlaceholders.push(paraInit);
    
    addRefsButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputRef');
        //var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;


        //Div for the added publications.
        var para = document.createElement("DIV");
        para.classList.add("p-2");
        para.classList.add("addedRef");
        outputPos.appendChild(para);


        //Div for the form for adding pubolications.
        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3"> <input type="text" class="form-control inputRef mt-3" placeholder="Authors"> </div> <div class="col-md-4  mb-3"> <input type="text" class="form-control inputRef mt-3" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3"> <input type="date" class="form-control inputRef mt-3" placeholder="Issue-Date"> </div>';
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        var newInputPos = []; //for adding new form
        //adding the 3 latest inputs.
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        config.refs.push(newInputPos);
        config.refsPlaceholders.push(para);

        
        console.log(config.refs);
        console.log(config.refsPlaceholders);

        
        
    });

    removeButton.addEventListener('click', function(){
        config.refs.pop(config.refs);
        config.refsPlaceholders.pop(config.refsPlaceholders);   

        outputPos.removeChild(outputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);
        if(outputPos.childElementCount < 2){
            removeButton.style.display = 'none';
        }
           

        console.log(config.refs);
        console.log(config.refsPlaceholders)

    });

}

addRefs();