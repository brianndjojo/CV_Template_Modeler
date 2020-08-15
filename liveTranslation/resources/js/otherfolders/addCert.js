function addCert(){
    var addButton = document.getElementById('addCert');
    var removeButton = document.getElementById('removeCert');
    var certInputPlaceholder = document.getElementById('fillingCert');
    var certOutput = document.getElementById('certificationOutput');

    let certInit = document.createElement("DIV");
    certInit.classList.add("p-2");
    certInit.classList.add("addedCert");
    certOutput.appendChild(certInit);

    addButton.addEventListener('click', function(){
        //for cvsection
        var certInit = document.createElement("DIV");
        certInit.classList.add("p-2");
        certInit.classList.add("addedCert");
        certOutput.appendChild(certInit);

        //for input section
        var inputInit = document.createElement("DIV")
        inputInit.classList.add("form-row");
        inputInit.innerHTML = inputInit.innerHTML + '<div class="col-md-5 mb-3 mt-3"> <input type="text" class="form-control inputCert" placeholder="Authors"> </div> <div class="col-md-4  mb-3 mt-3"> <input type="text" class="form-control inputCert" placeholder="Article-Title"> </div> <div class="col-md-3  mb-3 mt-3"> <input type="date" class="form-control inputCert" placeholder="Issue-Date"> </div>';
        certInputPlaceholder.appendChild(inputInit);
        
        removeButton.style.display = 'inline';
    });

    removeButton.addEventListener('click', function(){
        certOutput.removeChild(certOutput.lastChild);
        certInputPlaceholder.removeChild(certInputPlaceholder.lastChild);

        if(certOutput.childElementCount < 2){
            removeButton.style.display = 'none';
        }
    })
}
addCert();