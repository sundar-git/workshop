
function DOMLoaded() {

  // Wait for PhoneGap to load
  //
  if (window.device) {
    document.addEventListener("deviceready", onDeviceReady, false);
  } else {
    alert( "Device Properties not supported for browsers." );
  }

  // PhoneGap is ready
  //
  function onDeviceReady() {
    var element = document.getElementById('deviceProperties');
    element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                        'Device PhoneGap: ' + device.phonegap + '<br />' + 
                        'Device Platform: ' + device.platform + '<br />' + 
                        'Device UUID: '     + device.uuid     + '<br />' + 
                        'Device Version: '  + device.version  + '<br />';
  }
}