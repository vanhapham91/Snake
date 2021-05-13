const HEAD = document.getElementById('SnakeHead');

function getSnakePartEls() {
  return document.querySelectorAll('.snake-part');
}

function createNewPart() {
  let newPart = document.createElement('div');
  newPart.className = 'snake-part';
  document.getElementById('Snake').append(newPart);
}

function updatePartsPosition() {
  const parts = getSnakePartEls();
  for (let i = parts.length - 1; i > -1; i--) {
    parts[i].style.opacity = 1;
    if (i === 0) {
      parts[i].style.left = HEAD.style.left;
      parts[i].style.top = HEAD.style.top;
    } else {
      parts[i].style.left = parts[i-1].style.left;
      parts[i].style.top = parts[i-1].style.top;
      if (isOverlay(parts[i], HEAD)) {
        console.log(10);
        return () => {
          alert('YOU DIED!!!');
          startGame();
        }
      }
    }
  }
}

function isOverlay(part, head) {
  return part.style.left === head.style.left && part.style.top === head.style.top;
}

function removePartEls() {
  let parts = getSnakePartEls();
  if (parts.length > 0) {
    parts.forEach(el => {
      el.remove();
    })
  }
}

function createBaitEl() {
  let bait = document.createElement('div');
  let baitPosition = getBaitPosition();
  bait.id = 'Bait';
  bait.style.left = baitPosition.left;
  bait.style.top = baitPosition.top
  document.getElementById('snakeContainer').prepend(bait);
}

function removeBaitEl() {
  if (document.getElementById('Bait')) {
    document.getElementById('Bait').remove();
  }
}

function setHeadPosition(left, top) {
  HEAD.style.left = `${left}px`;
  HEAD.style.top = `${top}px`;
}

function updateHeadPosition() {
  let leftPosition = getPositionValue(HEAD.style.left);
  let topPosition = getPositionValue(HEAD.style.top);

  switch(state.direction) {
    case 'left':
      leftPosition = leftPosition <= 0 ? RIGHTLIMIT : leftPosition - SIZE;
      break;
    case 'right':
      leftPosition = leftPosition >= RIGHTLIMIT ? 0 : leftPosition + SIZE;
      break;
    case 'up':
      topPosition = topPosition <= 0 ? BOTTOMLIMIT : topPosition - SIZE;
      break;
    case 'down':
      topPosition = topPosition >= BOTTOMLIMIT ? 0 : topPosition + SIZE
      break;
    default:
      break;
  }

  return drawSnake(leftPosition, topPosition);
}


function getCurrentBaitPosition() {
  if (document.getElementById('Bait')) {
    return {
      left: getPositionValue(document.getElementById('Bait').style.left),
      top: getPositionValue(document.getElementById('Bait').style.top)
    }
  }
}
