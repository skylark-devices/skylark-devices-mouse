/**
 * skylark-devices-points - The points  utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./points"],function(e){return e.mouse={mouseWheelEvent:function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},normalizeWheel:function(e){var l=0,n=0,t=0,i=0;return"detail"in e&&(n=e.detail),"wheelDelta"in e&&(n=-e.wheelDelta/120),"wheelDeltaY"in e&&(n=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(l=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(l=n,n=0),t=10*l,i=10*n,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(t=e.deltaX),(t||i)&&e.deltaMode&&(1===e.deltaMode?(t*=40,i*=40):(t*=800,i*=800)),t&&!l&&(l=t<1?-1:1),i&&!n&&(n=i<1?-1:1),{spinX:l,spinY:n,pixelX:t,pixelY:i}}}});
//# sourceMappingURL=sourcemaps/mouse.js.map
