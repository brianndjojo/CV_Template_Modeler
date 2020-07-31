function switchCarousel(){
    var inputs = document.getElementsByClassName('detailsForm');
    var switchSection = document.getElementsByClassName('switchSection');
    
    console.log(inputs);
    console.log(inputs.length);
    console.log(switchSection.length);
    console.log(switchSection);
    
    for(let i = 0; i < switchSection.length; i++){
        switchSection[i].addEventListener('click', function(){
            
            config.prevCarousel = config.currentCarousel;
            config.currentCarousel = i;
            
            inputs[config.prevCarousel].style.display="none";
            inputs[config.currentCarousel].style.display="block";
            
            console.log(config.currentCarousel);
            console.log(config.prevCarousel);
            
        })
    }
    
 
}

switchCarousel();