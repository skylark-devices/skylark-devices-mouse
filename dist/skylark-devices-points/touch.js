/**
 * skylark-devices-points - The points  utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./points"],function(n){return n.touch={isTouchEnabled:function(){return new Promise(function(n){var t=function(e){n(!!e),window.removeEventListener("touchstart",t)};window.addEventListener("touchstart",t,!1),setTimeout(t,1e4)})}}});
//# sourceMappingURL=sourcemaps/touch.js.map
