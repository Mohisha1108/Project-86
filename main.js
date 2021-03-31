var canvas = new fabric.Canvas('my_canvas');
var block_width = 30;
var block_height = 30;

var superhero_x = 10;
var superhero_y = 10;

var superhero_object = "";
var block_object = "";

function superhero_update() {
  fabric.Image.fromURL("Superhero.jpg",function(Img){
    superhero_object = Img;
    superhero_object.scaleToWidth(150);
    superhero_object.scaleToHeight(140);
    superhero_object.set({
      top: superhero_y,
      left:superhero_x
    });
    canvas.add(superhero_object)
  })
}
function new_image(get_image) {
  fabric.Image.fromURL(get_image,function(Img){
    block_object = Img;
   block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
      top: superhero_y,
      left: superhero_x
    });
    canvas.add(block_object)
  })
}
