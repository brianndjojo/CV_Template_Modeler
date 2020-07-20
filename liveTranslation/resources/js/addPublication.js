function addPublication(){
    
    var addPubButt = document.getElementById('addPublication');
    var removeButton = document.getElementById('removePublication');
    
    var infoPos = document.getElementById('fillingPos');
    var inputPos = document.getElementById('publications');
    

    addPubButt.addEventListener('click', function(){
        var inputFields = document.getElementsByClassName('inputPublications');
        var newText = inputFields[inputFields.length-3].value + inputFields[inputFields.length-2].value + inputFields[inputFields.length-1].value;
        
        var newInputPos = [];
        newInputPos.push(inputFields[inputFields.length-3]);
        newInputPos.push(inputFields[inputFields.length-2]);
        newInputPos.push(inputFields[inputFields.length-1]);

        var para = document.createElement("DIV");
        para.innerText = newText;
        inputPos.appendChild(para);

        var inputNew = document.createElement("DIV")
        inputNew.classList.add("form-row");
        inputNew.innerHTML = inputNew.innerHTML + '<div class="col-md-5 mb-3"> <input type="text" class="form-control inputPublications" placeholder="Authors"> </div> <div class="col-md-4  mb-3"> <input type="text" class="form-control inputPublications" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3"> <input type="date" class="form-control inputPublications" placeholder="Issue-Date"> </div>';
        
        infoPos.appendChild(inputNew);
        
        removeButton.style.display = 'inline';

        config.publications.push(newInputPos);
        config.publicationPlaceholders.push(para);

        
        console.log(config.publications);
        console.log(config.publicationPlaceholders);
    })

    removeButton.addEventListener('click', function(){
        config.publications.pop(config.publications);
        config.publicationPlaceholders.pop(config.publicationPlaceholders);   

        inputPos.removeChild(inputPos.lastChild);
        infoPos.removeChild(infoPos.lastChild);
        if(inputPos.childElementCount < 1){
            removeButton.style.display = 'none';
        }
           

        console.log(config.publications);
        console.log(config.publicationPlaceholders)

    })

    
}

addPublication();