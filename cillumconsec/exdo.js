const enter = {
  x: 0,
  y: 100,
  opacity: 0,
};

const animationConfig = {
  x: enter.x,
  y: enter.y,   // Here we assign enter.y to the y property
  opacity: enter.opacity,
  duration: 500,
};

animateElement(element, animationConfig);
