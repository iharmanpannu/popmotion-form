const container = popmotion.styler(document.querySelector(".container"));
const formElements = document.querySelector(".inner");
const msgPop = popmotion.styler(document.querySelector(".msg"));

popmotion.tween({
  from: {
    scale: 0.7,
    opacity: 0,
    y: -300
  },
  to: {
    scale: 1,
    opacity: 1,
    y: 0
  },
  duration: 1000
}).start(container.set);

const stylers = Array
  .from(formElements.children)
  .map(popmotion.styler);

const animations = Array(stylers.length).fill(popmotion.spring({from: 100, to: 0}));

popmotion
  .stagger(animations, 100)
  .start(v => v.forEach((x, i) => stylers[i].set("x", x)));