
function isPortrait() {
  return window.innerHeight > window.innerWidth;
}

const tween = new TimelineLite();
const startElementPosition = isPortrait() ? "-130vw" : "-90vw";

tween
  .from(".cartridge-hint .circle", 2, { autoAlpha: 0 })
  .from(".cartridge-hint .content", 1, { autoAlpha: 0 })
  .to(".hint.cartridge-hint", 1, { autoAlpha: 0 }, "+=2")
  .from(".filter", 6, { "margin-top": startElementPosition })
  .from(".silicone-hose-hint .circle", 2, { autoAlpha: 0 })
  .from(".silicone-hose-hint .content", 1, { autoAlpha: 0 })
  .to(".hint.silicone-hose-hint", 1, { autoAlpha: 0 }, "+=2")
  .from(".ball", 6, { "margin-top": startElementPosition }, "-=1")
  .set(".ball", { attr: { src:"images/gold-ball-cutted.png" } })
  .to(".ball", 0, { "z-index": "10" })
  .from(".ball-hint .circle", 2, { autoAlpha: 0 })
  .from(".ball-hint .content", 1, { autoAlpha: 0 })
  .to(".hint.ball-hint", 1, { autoAlpha: 0 }, "+=2")
  .from(".faucet", 3, { "margin-top": startElementPosition }, "-=1")
  .set(".faucet", { attr: { src:"images/faucet-cutted.png" } }, "-=0.3")
  .to(".faucet", 0, { "z-index": "11" }, "+=0.3")
  .from(".spout-hint .circle", 2, { autoAlpha: 0 })
  .from(".spout-hint .content", 1, { autoAlpha: 0 })
  .to(".hint.spout-hint", 1, { autoAlpha: 0 }, "+=2");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '#app',
  triggerHook: 0,
  duration: 7000,
})
  .setTween(tween)
  .setPin('#app')
  .addTo(controller);
