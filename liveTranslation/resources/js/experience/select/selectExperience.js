function selectExperience(){
    var forms = document.getElementsByClassName('selectExp');
    var outputs = document.getElementsByClassName('expOutput');
    var dropdownExp = document.getElementsByClassName('switchExp');
    var dropdowncarousel = document.getElementsByClassName('expCarousel');
    var prevIndex = 0;
    forms[0].style.display="block";
    for(let i = 0; i < dropdownExp.length; i++){
        dropdownExp[i].addEventListener('click', function(){
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

selectExperience();