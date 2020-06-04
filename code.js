var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["43721c75-7f5b-4e9e-99fc-8d39fd0571d5","9d64f631-ea20-4c3d-b006-ba07e8ce411f","7f633a28-408f-4205-acfa-f2cd731660c2","06ef4031-3f7f-4edc-a04c-11c007267228","8c589935-6e0d-4974-bae3-50ff16914075","89a5349f-a2f2-4976-9aec-fe6f4107848c","a742a338-3d7f-4935-bf42-cca3a215bca7","1d534f4e-3e82-463a-b5d8-3ebc783f64c8","777be752-1bbb-4637-8201-bb6f1bdd3dd9"],"propsByKey":{"43721c75-7f5b-4e9e-99fc-8d39fd0571d5":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/S4D.8xCWBpDZ.O8KXYpHbFMnTT55uH3o/category_vehicles/enemyBlack4.png","frameSize":{"x":82,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"S4D.8xCWBpDZ.O8KXYpHbFMnTT55uH3o","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/S4D.8xCWBpDZ.O8KXYpHbFMnTT55uH3o/category_vehicles/enemyBlack4.png"},"9d64f631-ea20-4c3d-b006-ba07e8ce411f":{"name":"playerShip3_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/kHBflH2AV9LS4aCF.ls8EFSVLMWVS4V0/category_vehicles/playerShip3_blue.png","frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"kHBflH2AV9LS4aCF.ls8EFSVLMWVS4V0","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kHBflH2AV9LS4aCF.ls8EFSVLMWVS4V0/category_vehicles/playerShip3_blue.png"},"7f633a28-408f-4205-acfa-f2cd731660c2":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/LAAhepGpZ8sJKoH4jgk839l109_JHmJH/category_vehicles/enemyBlue2.png","frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"LAAhepGpZ8sJKoH4jgk839l109_JHmJH","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LAAhepGpZ8sJKoH4jgk839l109_JHmJH/category_vehicles/enemyBlue2.png"},"06ef4031-3f7f-4edc-a04c-11c007267228":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"Bp7bnrg6uzPP7ma_KKDniFNCaGCguuM1","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/06ef4031-3f7f-4edc-a04c-11c007267228.png"},"8c589935-6e0d-4974-bae3-50ff16914075":{"name":"space","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"2cLX4.PMNg7E.YQFbxVqgeq5z4XdtQ4f","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/8c589935-6e0d-4974-bae3-50ff16914075.png"},"89a5349f-a2f2-4976-9aec-fe6f4107848c":{"name":"decoy","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"BrG1Wwk6EAgCodHIM2DLg1Bws0J1.rhr","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/89a5349f-a2f2-4976-9aec-fe6f4107848c.png"},"a742a338-3d7f-4935-bf42-cca3a215bca7":{"name":"back2","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"TNbNZMJ8Es.qq9IbVON4WH5q__BzMJ9C","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/a742a338-3d7f-4935-bf42-cca3a215bca7.png"},"1d534f4e-3e82-463a-b5d8-3ebc783f64c8":{"name":"bullet","sourceUrl":null,"frameSize":{"x":5,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"LU8ClDPqRG620opieLHv.MaMXbk4x7i3","loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":10},"rootRelativePath":"assets/1d534f4e-3e82-463a-b5d8-3ebc783f64c8.png"},"777be752-1bbb-4637-8201-bb6f1bdd3dd9":{"name":"pop","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"hi4iTvXe9A5jgLGmoCwUq3k4LjY0ZsB6","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/777be752-1bbb-4637-8201-bb6f1bdd3dd9.png"}}};
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



var back2 = createSprite(200,200,30,30);
back2.setAnimation("back2");

var decoy = createSprite(200,200,30,30);
decoy.setAnimation("decoy");

var back = createSprite(200,200,400,400);
back.setAnimation("space");


var player = createSprite(190, 375,20,20);
player.setAnimation("playerShip3_blue_1");

var score = 0;

 var enemies = createGroup();
 var bullet;
 var bulletGroup=createGroup();
function draw() {
  background("white");
 
 
 
 back.velocityY = 8;
 decoy.velocityY = 8;
    player.x = World.mouseX;
  
  spawnShips();
  
   player.y = 375;
  
  back.velocityY = 8;
 
  
  if(back.y>600){
    back.y = -200;
    back.velocityY = 8;
  }
  
 if(decoy.y>600){
    decoy.y = -350;
    decoy.velocityY = 8;
 }
 //console.log(.y);
 
 if(keyDown("space")){
   bullets();
 }
  if(bulletGroup.isTouching(enemies)){
       score++;
       enemies.setAnimationEach("pop");
       enemies.destroyEach();
      }
  
  drawSprites();
  textSize(14)
  text("Score = "+score,310,30);
}


function spawnShips (){
  if(World.frameCount%100===0){
      var r = randomNumber(1,3);
      
      var enemy1 = createSprite(randomNumber(1,400),0,20,30);
      
      enemy1.setAnimation("enemy"+r);
      enemy1.scale = 0.5;
      enemy1.velocityY = 3;
     
    
      enemies.add (enemy1);
  }
     }
function bullets(){
  if (World.frameCount%1===0){
   
    
  bullet = createSprite(player.x,375,50,50);
     bullet.velocityY = -7;
     player.depth = bullets.depth;
     bullet.depth++;
     bullet.setAnimation("bullet");
     bulletGroup.add(bullet);
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
