function getBaitPosition() {
  return {
    top: `${Math.floor(Math.floor(Math.random() * (300 - SIZE))/SIZE)*SIZE}px`,
    left: `${Math.floor(Math.floor(Math.random() * (300 - SIZE))/SIZE)*SIZE}px`
  }
}

function getPositionValue(str) {
  let value = 0;
  if (str.length === 1) {
    value = 0;
  } else {
    value = str.substr(0, str.length - 2);
  }
  return Number(value);
}

function isOpposite(direction) {
  return state.opposites[state.direction] === direction;
}
