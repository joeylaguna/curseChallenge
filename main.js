window.onload = () => {
  let numberOfTalentPoints = 0;
  let talentPoints = document.querySelector('.talentPoints');
  talentPoints.innerHTML = numberOfTalentPoints;

  const handler = (e) => {
    e.preventDefault();
    let button = e.button;
    //left click - add talent
    if (button === 0) {
    let talentActive = e.target.attributes[2].value;
    let talentIndex = e.target.attributes[3].value;

      if (numberOfTalentPoints < 6) {
        if (talentActive === 'false') {
          numberOfTalentPoints++;
          talentPoints.innerHTML = numberOfTalentPoints;
          e.target.attributes[2].value = true;
          e.target.style.background = 'url(assets/talent-icons-sprite.png) no-repeat 0% 100.545%';
        }
      }
      
      
    } else {
      //left click - remove talent
      if (e.target.attributes[2].value === 'true') {
        numberOfTalentPoints--;
        talentPoints.innerHTML = numberOfTalentPoints
        e.target.attributes[2].value = false;
        e.target.style.background = 'url(assets/talent-icons-sprite.png) no-repeat 0% -18.455%';
      } 
    }
  }

  
  let talentTrees = document.getElementsByClassName('talentRow');
  //Attach listener to each talent to check for clicks
  talentTrees[0].childNodes.forEach((value) => {
    if (value.attributes) {
      let self = this;
      value.addEventListener('click', handler, false);
      value.addEventListener('contextmenu', handler, false);
    }
  });

  talentTrees[1].childNodes.forEach((value) => {
    if (value.attributes) {
      let self = this;
      value.addEventListener('click', handler, false);
      value.addEventListener('contextmenu', handler, false);
    }
  });
}