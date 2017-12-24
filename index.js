const container = popmotion.styler(document.querySelector(".container"));
const formElements = document.querySelector(".inner");
const msgPop = popmotion.styler(document.querySelector(".msg"));

const myAnim = popmotion.tween({
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
});

const myAnim2 = popmotion.keyframes({
  values: [
    { y: -50, opacity: 0 },
    { y: -20, opacity: 1 },
    { y: -20, opacity: 1 },
    { y: 0, opacity: 0 }
  ],
  times: [0, 0.2, 0.8, 1],
  duration: 3000
});

myAnim.start({
  update: container.set,
  complete: () => {
    myAnim2.start(msgPop.set);
  }
});

const stylers = Array.from(formElements.children).map(popmotion.styler);

const animations = Array(stylers.length).fill(
  popmotion.spring({ from: 100, to: 0 })
);

popmotion
  .stagger(animations, 100)
  .start(v => v.forEach((x, i) => stylers[i].set({ y: x })));
