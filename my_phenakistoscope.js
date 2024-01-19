const SLICE_COUNT = 12;
let leafSize1 = 80; // Initial size of the first leaf
let leafSize2 = 40; // Initial size of the second leaf

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.draw_slits(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("branchring", "png");
}

function setup_layers(pScope){

  new PLayer(null, 19, 21, 156);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(branchring);
  layer1.mode(RING);
  layer1.set_boundary(200, 1000);

  var layer2 = new PLayer(leaf);
  layer2.mode(RING);
  layer2.set_boundary(200, 1000);

  var layer3 = new PLayer(ring);
  layer3.mode(RING);
  layer3.set_boundary(970,1000)

}

function branchring(x, y, animation, pScope){
  push();
  scale(3);
  if(animation.frame == 0){
    pScope.draw_image("branchring", x, y);
  }
  pop();
}

function leaf(x, y, animation, pScope){
  push();
  scale(1.5);

  // First leaf
  fill(102, 204, 0);
  drawLeaf(200, 300, leafSize1);

  // Second leaf
  fill(102, 204, 0);
  drawLeaf(250, 300, leafSize2);

  // Increase the size for the next frame and add noise for subtle movement
  leafSize1 += 0.5; // Adjust growth rate for the first leaf
  leafSize2 += 0.3;
  
  let leaf1Noise = noise(frameCount * 0.005) * 2 - 1; // Map noise to [-1, 1]
  let leaf2Noise = noise((frameCount + 100) * 0.005) * 2 - 1; // Different seed for the second leaf
  
  // Apply noise to leaf positions
  let leaf1X = 200 + leaf1Noise * 5;
  let leaf1Y = 300 + leaf1Noise * 5;
  
  let leaf2X = 250 + leaf2Noise * 5;
  let leaf2Y = 300 + leaf2Noise * 5;
  
  // Draw leaves with noise-based positions
  drawLeaf(leaf1X, leaf1Y, leafSize1);
  drawLeaf(leaf2X, leaf2Y, leafSize2);
  
  // Check if the leaves have reached a certain size, reset if too big
  if (leafSize1 > 150) {
    leafSize1 = 80;
  }
  
  if (leafSize2 > 100) {
    leafSize2 = 40;
  }
  pop();
}

// Function to draw a lemon leaf at a given position and size
function drawLeaf(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x + size / 2, y - size, x - size / 2, y - size, x, y);
  endShape(CLOSE);
}

function ring(x,y, animation, pScope){
  pScope.fill_background(204, 219, 182)
}