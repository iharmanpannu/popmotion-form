  const container = popmotion.styler(document.querySelector('.container'))
  const formElements = popmotion.styler(document.querySelector('.inner'))
  const msgPop = popmotion.styler(document.querySelector('.msg'))
popmotion.tween({
  form: {
    scale: .9,
    y: -300
  },
  to: {
    scale: 1,
    y: 1
  },
  duration: 1000,
}).start(container.set)