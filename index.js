const ratePoints = document.querySelectorAll('.rate-box__ratings-item')
console.log(ratePoints);


const chosenOptionHighlight = (e) => {
    const targetElement = e.target;
    const isActive = targetElement.classList.contains('active');
  
    if (isActive) {
      targetElement.classList.remove('active');
    } else {
      const alreadyActive = document.querySelector('.rate-box__ratings-item.active');
      if (alreadyActive) {
        alreadyActive.classList.remove('active');
      }
      targetElement.classList.add('active');
    }
  };
  




const rateOptionListeners = ()=>{
    ratePoints.forEach(element => {
        element.addEventListener('click', chosenOptionHighlight)
    });
}

rateOptionListeners()