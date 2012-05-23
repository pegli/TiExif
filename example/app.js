// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var tiexif = require('com.obscure.TiExif');
Ti.API.info("module is => " + tiexif);

label.text = "click me";
label.addEventListener('click', function(e) {
  Ti.Media.openPhotoGallery({
    success: function(item) {
      // alert(String.format("len: %d h: %d w: %d", item.media.length, item.media.height, item.media.width));
      label.text = JSON.stringify(tiexif.imageMetadata(item.media));
    }
  });
});
