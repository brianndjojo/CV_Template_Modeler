function selectPublication(){
    var forms = document.getElementsByClassName('selectPub');
    var outputs = document.getElementsByClassName('pubOutput');
    var dropdownPub = document.getElementsByClassName('switchPublication');
    var dropdowncarousel = document.getElementsByClassName('pubCarousel');
    var prevIndex = 0;
    forms[0].style.display="block";
    for(let i = 0; i < dropdownPub.length; i++){
        dropdownPub[i].addEventListener('click', function(){
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

selectPublication();