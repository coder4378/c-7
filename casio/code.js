var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["76d4a64a-40de-43d0-8b4c-896d31818276","b690be9f-27eb-4e95-aba8-079368898c81","e14737b2-5261-4314-8aff-4bb79debfac0","f1c30fff-dcb1-4929-b8ff-4d601230cbfe","f70778ec-8975-4bbc-beb9-d15f50ff1c98","0beab434-f8e2-4c69-ac09-54ca4812e245","e8d9b06a-c2c5-4686-be1b-9b45a71469df"],"propsByKey":{"76d4a64a-40de-43d0-8b4c-896d31818276":{"name":"base","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"h3jfPU8rh4eb4P7QZSlHqQzG3M7xnMWE","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/76d4a64a-40de-43d0-8b4c-896d31818276.png"},"b690be9f-27eb-4e95-aba8-079368898c81":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"nvshK0EjyJT1TIAFCJ4ZNjUxQXgHdmdF","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b690be9f-27eb-4e95-aba8-079368898c81.png"},"e14737b2-5261-4314-8aff-4bb79debfac0":{"name":"animation_1_copy_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"jd_8j1yQeHqfAWeCUGTXVULeS.6q9D48","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e14737b2-5261-4314-8aff-4bb79debfac0.png"},"f1c30fff-dcb1-4929-b8ff-4d601230cbfe":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"O7PdGb9_0ypros6kIgQw7fYdwQibpQYr","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f1c30fff-dcb1-4929-b8ff-4d601230cbfe.png"},"f70778ec-8975-4bbc-beb9-d15f50ff1c98":{"name":"animation_3_copy_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"rVa7ZK394KHtqP4ek.NBlYQVHYrXlcKC","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f70778ec-8975-4bbc-beb9-d15f50ff1c98.png"},"0beab434-f8e2-4c69-ac09-54ca4812e245":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZAZM_YfogF.cd4VOEQ.CV.F0iN4MGw2F","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0beab434-f8e2-4c69-ac09-54ca4812e245.png"},"e8d9b06a-c2c5-4686-be1b-9b45a71469df":{"name":"animation_2_copy_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"y1I9uVT7A1VfYuZAaLCPXvSWeR1MN0os","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e8d9b06a-c2c5-4686-be1b-9b45a71469df.png"}}};
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

var base1 = createSprite(200, 200);
base1.setAnimation("base");
var key1 = createSprite(80, 200);
key1.setAnimation("animation_1");
var key2 = createSprite(120, 200);
key2.setAnimation("animation_1");
var key3 = createSprite(160, 200);
key3.setAnimation("animation_1");
var key4 = createSprite(200, 200);
key4.setAnimation("animation_1");
var key5 = createSprite(240, 200);
key5.setAnimation("animation_1");
var key6 = createSprite(280, 200);
key6.setAnimation("animation_1");
var key7 = createSprite(320, 200);
key7.setAnimation("animation_1");
var drum = createSprite(310, 125);
drum.setAnimation("animation_2");
var music = createSprite(310, 120);
music.setAnimation("animation_3");
textSize(30);
fill("255");

function draw() {
  background("green");
  if (keyDown("1")) {
    key1.setAnimation("animation_1_copy_1");
    playSound("assets/category_bell/bells_win.mp3");
  }
  if (keyWentUp("1")) {
    key1.setAnimation("animation_1");
  }
  if (keyDown("2")) {
    key2.setAnimation("animation_1_copy_1");
    playSound("assets/category_bell/bells_win_high.mp3");
  }
  if (keyWentUp("2")) {
    key2.setAnimation("animation_1");
  }
  if (keyDown("3")) {
    key3.setAnimation("animation_1_copy_1");
    playSound("assets/category_bell/vibrant_game_correct_answer_1.mp3");
  }
  if (keyWentUp("3")) {
    key3.setAnimation("animation_1");
  }
  if (keyDown("4")) {
    key4.setAnimation("animation_1_copy_1");
    playSound("assets/category_bell/bells_win.mp3");
  }
  if (keyWentUp("4")) {
    key4.setAnimation("animation_1");
  }
  if (keyDown("5")) {
    key5.setAnimation("animation_1_copy_1");
    playSound("assets/category_bell/bells_win_high.mp3");
  }
  if (keyWentUp("5")) {
    key5.setAnimation("animation_1");
  }
  if (keyDown("6")) {
    key6.setAnimation("animation_1_copy_1");
    playSound("assets/category_bell/vibrant_game_bell_twinkle_positive_touch_1.mp3");
  }
  if (keyWentUp("6")) {
    key6.setAnimation("animation_1");
  }
  if (keyDown("7")) {
    key7.setAnimation("animation_1_copy_1");
    playSound("assets/category_instrumental/chime.mp3");
  }
  if (keyWentUp("7")) {
    key7.setAnimation("animation_1");
  }
  if (keyDown("SPACE")) {
    drum.setAnimation("animation_2_copy_2");
    playSound("assets/category_instrumental/digital_drum_stutter.mp3");
  }
  if (keyWentUp("SPACE")) {
    drum.setAnimation("animation_2");
  }
  if (keyDown("enter")) {
    music.setAnimation("animation_3_copy_1");
    playSound("assets/category_music/birthday_kazoo_positive_game_cue_1.mp3");
  }
  if (keyWentUp("enter")) {
    music.setAnimation("animation_3");
  }
  drawSprites();
  text("use 1 to 7 key to play", 60, 340);
  text("use SPACE key for drum", 60, 300);
  text("use ENTER key for music", 60, 380);
  
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
