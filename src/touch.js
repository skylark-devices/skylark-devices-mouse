define([
	"./points"
],function(points){

  /**
   * @summary Detects if the user is using a touch screen
   * @returns {Promise<boolean>}
   */
   function isTouchEnabled () {
    return new Promise(function(resolve) {
      var listener = function(e) {
        if (e) {
          resolve(true);
        }
        else {
          resolve(false);
        }

        window.removeEventListener('touchstart', listener);
      };

      window.addEventListener('touchstart', listener, false);

      // after 10 secs auto-reject the promise
      setTimeout(listener, 10000);
    });
  };

  return points.touch = {
  	isTouchEnabled
  };
	
});