  function init() {
    console.log('init')
    if (window.DeviceOrientationEvent) {
      console.log(window.DeviceOrientationEvent)
      console.log('supported')
      // document.getElementById("doEvent").innerHTML = "DeviceOrientation";
      // Listen for the deviceorientation event and handle the raw data
      window.addEventListener('deviceorientation', function(eventData) {

        console.log(eventData)
        // gamma is the left-to-right tilt in degrees, where right is positive
        var tiltLR = eventData.gamma;

        // beta is the front-to-back tilt in degrees, where front is positive
        var tiltFB = eventData.beta;

        // alpha is the compass direction the device is facing in degrees
        var dir = eventData.alpha

        console.log(tiltLR, tiltFB, dir)

        // call our orientation event handler
        deviceOrientationHandler(tiltLR, tiltFB, dir);
        }, false);
    } else {
      console.log('not supported')
      // document.getElementById("doEvent").innerHTML = "Not supported on your device or browser.  Sorry."
    }
  }

var checker = true

  function initAccel() {
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', function(eventData) {
          if (checker){
            // console.log(eventData)
            // checker = false
          }

          console.log(initAccel)
          var accX = eventData.acceleration.x
          var accY = eventData.acceleration.y
          var accZ = eventData.acceleration.z

          var accGX = eventData.accelerationIncludingGravity.x
          var accGY = eventData.accelerationIncludingGravity.y
          var accGZ = eventData.accelerationIncludingGravity.z

          var rotLR = eventData.rotationRate.alpha
          var rotFB = eventData.rotationRate.beta
          var rotDir = eventData.rotationRate.gamma

          deviceMotionHandler(accX, accY, accZ, accGX, accGY, accGZ, rotLR, rotFB, rotDir)
        }, false)
    } else {
      console.log("Acceleration not supported on your device or browser.  Sorry.")
    }

  }

  function deviceOrientationHandler(tiltLR, tiltFB, dir) {
    console.log('checking')
    // document.getElementById("doTiltLR").innerHTML = Math.round(tiltLR);
    // document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);
    // document.getElementById("doDirection").innerHTML = Math.round(dir);
    // Apply the transform to the image
    // Temporarily disabled
    // var logo = document.getElementById("imgLogo");
    // logo.style.webkitTransform = "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
    // logo.style.MozTransform = "rotate("+ tiltLR +"deg)";
    // logo.style.transform = "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";

    // Front / Back
    // if (tiltFB > 20){
    //   tiltClap = true
    // }
    // else{
    //   tiltClap = false
    // }
    //
    // if (tiltFB < 45){
    //   tiltKick = true
    // }
    // else{
    //   tiltKick = false
    // }
    //
    // // Left / Right
    // if (tiltLR > 25){
    //   tiltSnare = true
    // }
    // else{
    //   tiltSnare = false
    // }
    //
    // if (tiltLR < -25){
    //   tiltCrash = true
    // }
    // else{
    //   tiltCrash = false
    // }
    //
    // // Front Side Left / Right
    // if (tiltFB > 20 && tiltLR > 25){
    //   tiltClap = false
    //   tilt1 = true
    // }
    // else if (tiltFB > 20 && tiltLR < -25) {
    //   tiltClap = false
    //   tilt2 = true
    // }
    //
    // else if (tiltFB < 45 && tiltLR > 25){
    //   tiltKick = false
    //   tilt3 = true
    // }
    // else if (tiltFB < 45 && tiltLR < -25){
    //   tiltKick = false
    //   tilt4 = true
    // }

    // Back Side Left / Right


  }

var maxX = 0, maxY = 0, maxZ = 0, minX = 0, minY = 0, minZ = 0

  function deviceMotionHandler(accX, accY, accZ, accGX, accGY, accGZ, rotLR, rotFB, rotDir) {
    console.log(Math.round(accX));
    console.log(Math.round(accY));
    console.log(Math.round(accZ));

    console.log(Math.round(accGX));
    console.log(Math.round(accGY));
    console.log(Math.round(accGZ));

    console.log(Math.round(rotLR));
    console.log(Math.round(rotFB));
    console.log(Math.round(rotDir));


    // Front / Back



    // Left / Right
    if (maxX < accX){
      maxX = accX
      console.log(accX);
    }
    if (maxY < accY){
      maxY = accY
      console.log(accX);
    }
    if (maxZ < accZ){
      maxZ = accZ
      console.log(accX);
    }
    if (minX > accX){
      minX = accX
      console.log(accX);
    }
    if (minY > accY){
      minY = accY
      console.log(accX);
    }
    if (minZ > accZ){
      minZ = accZ
      console.log(accX);
    }

  }

  init();
  initAccel();
