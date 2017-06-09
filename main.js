window.onload = () => {
  let numberOfTalentPoints = 0;
  let talentPoints = document.querySelector('.talentPoints');
  talentPoints.innerHTML = numberOfTalentPoints;


  const toggleTalent = (talent, active) => {
    //grabs the x cord position of the sprite
    let positions = getComputedStyle(talent).backgroundPosition.split(' ');
    talent.style['borderImage'] = '-webkit-linear-gradient(top, rgb(110, 174, 236) 54%, rgb(48, 68, 101) 25%, rgb(100, 162, 223) 100%)';
    //toggle off talent
    if (active === true) {
      //toggle on talent
      positions[3] = '-50px';
      return positions.join(' ');
    } else {
      //target off talent
      positions[3] = '0px';
      return positions.join(' ');
    }
  }

  const togglePath = (path, off) => {
    if (off) {
      path.style.borderBottom = '1px solid #272729';
      path.style.borderTop = '1px solid #272729';
      path.style.background = '#1c1d1f'
    } else {
      path.style.borderBottom = '1px solid #4f5356';
      path.style.borderTop = '1px solid #4f5356';
      path.style.background = '#333436'
    }
    
  }

  const handler = (e) => {
    e.preventDefault();
    let button = e.button;
    //left click - add talent
    if (button === 0) {
      let talentActive = e.target.attributes[2].value;
      
      if (numberOfTalentPoints < 6) {
        if (talentActive === 'false') {
          if (e.target.attributes[0].value === 'talentOne' || e.target.attributes[0].value === 'talentFive') {
            numberOfTalentPoints++;
            talentPoints.innerHTML = numberOfTalentPoints;
            e.target.attributes[2].value = true;
            e.target.style.backgroundPosition = toggleTalent(e.target, true);
          } else {
              //gets previous talent
              let previousTalent = e.target.previousElementSibling.previousElementSibling;
              if (previousTalent.attributes[2].value === 'true') {
                numberOfTalentPoints++;
                talentPoints.innerHTML = numberOfTalentPoints;
                e.target.attributes[2].value = true;
                e.target.style.backgroundPosition = toggleTalent(e.target, true);
                togglePath(e.target.previousElementSibling);
              }
          } 
        }
      }
    } else {
      //right click - remove talent
        if (e.target.attributes[2].value === 'true') {
        numberOfTalentPoints--;
        talentPoints.innerHTML = numberOfTalentPoints
        e.target.attributes[2].value = false;
        e.target.style.backgroundPosition = toggleTalent(e.target, false);
        console.log(e.target.attributes[0].value !== 'talentOne');
        if (e.target.attributes[0].value !== 'talentOne' && e.target.attributes[0].value !== 'talentFive') {
          console.log('here');
          togglePath(e.target.previousElementSibling, true);
        }
        e.target.removeAttribute('style');
      } 
    }
  };

  let talentTrees = document.getElementsByClassName('talentRow');
  //Attach listener to each talent to check for clicks
  talentTrees[0].childNodes.forEach((value) => {
    if (value.className !== 'path' && value.className !== 'rowTitle') {
      value.addEventListener('click', handler, false);
      value.addEventListener('contextmenu', handler, false);
    }
  });

  talentTrees[1].childNodes.forEach((value) => {
    if (value.className !== 'path' && value.className !== 'rowTitle') {
      value.addEventListener('click', handler, false);
      value.addEventListener('contextmenu', handler, false);
    }
  });
}