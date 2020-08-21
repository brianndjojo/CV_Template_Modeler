function selectServices(){
    var forms = document.getElementsByClassName('selectService');
    var outputs = document.getElementsByClassName('serveOutput');
    var dropdownServ = document.getElementsByClassName('switchService');
    var dropdowncarousel = document.getElementsByClassName('serviceCarousel');
    var prevIndex = 0;
    forms[0].style.display="block";
    for(let i = 0; i < dropdownServ.length; i++){
        dropdownServ[i].addEventListener('click', function(){
            if(outputs[i].style.display == "block"){
                outputs[i].style.display = "none";
            }
            else{
                outputs[i].style.display="block";
            }
        })
    }

    for(let j = 0; j < dropdowncarousel.length; j++){
        dropdowncarousel[j].addEventListener('click', function(){
            forms[prevIndex].style.display = 'none';
            forms[j].style.display = 'block';
            prevIndex = j;
        })
    }
}

selectServices();