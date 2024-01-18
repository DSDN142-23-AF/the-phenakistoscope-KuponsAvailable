const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("branchring", "png")
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(branchring);
  layer1.mode( RING );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new Player(leaf);
  layer2.mode ( RING );
  layer2.set_boundary( 200, 1000 )

}

function branchring(x, y, animation, pScope){
  push()
  scale(3)
  if(animation.frame ==0){
    pScope.draw_image("branchring",x,y);
  }
  pop()
  
}

function leaf(x, y, animation, pScope){
  
}
