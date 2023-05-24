const ratePoints = document.querySelectorAll('.rate-box__ratings-item')
console.log(ratePoints);


const chosenOptionHighlight = (e)=>{
    const alreadyActive = document.querySelector('.rate-box__ratings-item.active');
    if(alreadyActive) {
        alreadyActive.classList.remove('active')
    }
    e.target.classList.add('active')
}



const rateOptionListeners = ()=>{
    ratePoints.forEach(element => {
        element.addEventListener('click', chosenOptionHighlight)
    });
}

rateOptionListeners()