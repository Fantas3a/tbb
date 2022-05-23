var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating the player Sofia
var Sofia = createSprite(28, 28, 24, 24); 
Sofia.shapeColor=("darkblue");
//creating the maze walls (wall1 - wall2)
   
  var wall1 = createSprite(200, 200, 60, 100);
  
  var wall2 = createSprite(163, 348, 120, 30);  

  var wall3 = createSprite(74, 246, 40, 100);

  var wall4 = createSprite(142, 78, 120, 30);

  var wall5 = createSprite(300, 375, 30, 100);

  var wall6 = createSprite(27, 100, 50, 30);

  var wall7 = createSprite(348, 198, 80, 30);

  var wall8 = createSprite(48, 161, 100, 30);

  var wall9 = createSprite(30, 345, 30, 100);

  var wall10 = createSprite(328, 102, 80, 30);

  var wall11 = createSprite(228, 97, 35, 100);

  var wall12 = createSprite(372, 297, 40, 90);

  var wall13 = createSprite(242, 299, 90, 30);
 
  var wall14 = createSprite (302, 20, 30, 90);

   

//create cup
var cup = createSprite(396, 384, 20, 40);
  





function draw() {
  //setting the background color to pink
  background(" lightgreen");
  
   if (keyDown("UP_ARROW")) {
  
   Sofia.velocityX=0;
   Sofia.velocityY=-4;
  }
  
    if (keyDown("DOWN_ARROW")) {

    Sofia.velocityX=0;
    Sofia.velocityY=4;
  }
  
    if (keyDown("LEFT_ARROW")) {
  
    Sofia.velocityX=-4;
    Sofia.velocityY=0;
  }
    
    if (keyDown("RIGHT_ARROW")) {
    
    Sofia.velocityX=4;
    Sofia.velocityY=0;
    }
     
    if (Sofia.isTouching(cup)){
      
    background("white");
    textSize(100);  
    stroke("black");
    text("You Win", 17,204); 
      
    }
     
    if (Sofia.isTouching(cup)) {
   
    playSound( "assets/category_bell/quiet_bell_notification.mp3");
    }
   
    if (Sofia.collide(cup)) {
      
    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    wall5.destroy();  
    wall6.destroy();  
    wall7.destroy();
    wall8.destroy();
    wall9.destroy();
    wall10.destroy();
    wall11.destroy();  
    wall12.destroy();
    wall13.destroy();  
    wall14.destroy();
      
      
    }
   
    createEdgeSprites();
    Sofia.bounceOff(edges); 
    Sofia.bounceOff(wall1);
    Sofia.bounceOff(wall2);
    Sofia.bounceOff(wall3);
    Sofia.bounceOff(wall4);
    Sofia.bounceOff(wall5);
    Sofia.bounceOff(wall6);
    Sofia.bounceOff(wall7);
    Sofia.bounceOff(wall8);
    Sofia.bounceOff(wall9);
    Sofia.bounceOff(wall10);
    Sofia.bounceOff(wall11);
    Sofia.bounceOff(wall12);
    Sofia.bounceOff(wall13);
    Sofia.bounceOff(wall14);


drawSprites();

}






































function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
}























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
