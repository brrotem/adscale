//print layers
var msg = 'Hello World';
console.log(msg);
var fs = require("fs");
var path = require("path");
var PSD = require('psd');
console.log(process.cwd())



var psd = PSD.fromFile("C:/Users/rotem/Desktop/new startup/adscale/adscale/psdtest/aeg.psd");


psd.parse();

console.log(psd.tree().export());
node = psd.tree().descendants()[3];
node.get('name').export;
node.get('width');
png = psd.image.toPng(); // get PNG object
psd.image.saveAsPng("C:/Users/rotem/Desktop/new startup/adscale/adscale/psdtest/aeg.png").then(function () {
  console.log('Exported!');
});



/**
  * Change text content of a specific named Text Layer to a new text string.
  *
  * @param {Object} doc - A reference to the document to change.
  * @param {String} layerName - The name of the Text Layer to change.
  * @param {String} newTextString - New text content for the Text Layer.
  */
/*function printLayerContent(doc) {
  for (var i = 0, max = doc.layers.length; i < max; i++) {
    var layerRef = doc.layers[i];
    console.log("layerRef.typename"+layerRef.typename);
    console.log("layerRef.name"+layerRef.name);
    /*if (layerRef.typename === "ArtLayer") {
      if (layerRef.name === layerName && layerRef.kind === LayerKind.TEXT) {
        layerRef.textItem.contents = newTextString;
      }
    } else {
      changeTextLayerContent(layerRef, layerName, newTextString);
    }*
  }
}*/