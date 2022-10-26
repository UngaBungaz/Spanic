controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim2`,
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim4`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim3`,
    100,
    true
    )
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999ffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999fffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999fffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999ffffffffffff999999999999999999999999999999999999999999999999999999999999999fff99999999999999999999999999999999999999999999999999999999999999999999
    999999999999fffffffff9999999999999999999ffffff9999999999999999999999999999999999999999999fff99999999999999999999999999999999999999999999999999999999999999999999
    9999999999fffffff99999999999999999999999ffffffff99999999999999999999999999999999999999999fff99999999999999999999999999999999999999999999999999999999999999999999
    9999999999ffffff999999999999999999999999ffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999fffff999999999999999999999999ffff9fffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999fffffff9999999999999999999999ffff99ffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999fffffff999999999999999999999ffff999fff9999999999fff999999999999999999999999999999fff99999999999999999999999999999999999999999999999999999999999999999
    9999999999999fffffffff99999999999999999fff9999fff999999999ffff999999999999999999999999999999fff99999999999999999999999999999999999999999999999999999999999999999
    999999999999999ffffffff9999999999999999fff9999fff99999999fffff999999999999999999999999999999ffff9999999999999999999999999999999999999999999999999999999999999999
    9999999999999999fffffffff99999999999999fff9999fff9999999ffffff999999999999999999999999999999ffff9999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999fffffff999999999999fff999ffff999999ffffffff9999999999ffffff9999999999999ffff9999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999ffffffff9999999999ffffffffff99999fffffffff9999999999ffffffff999999999999ffff999999999999999999999999ffff99999999999999999999999999999999999
    99999999999999999999999fffffff99999999ffffffffff99999fffff99fff9999999999fffffffff99999999999ffff9999999999999999999999ffffff99999999999999999999999999999999999
    9999999999999999999999999fffff99999999fffffffff99999fffff999ffff99999999ffff9ffffff99999999999fff999999999999999999999fffffff99999999999999999999999999999999999
    999999999999999999999999999fff99999999fff9999999999fffff9999ffff99999999ffff999fffff9999999999fff999999999999999999999fffff9999999999999999999999999999999999999
    999999999999999999999999999fff99999999fff999999999ffffff99999fff99999999fff99999ffffff99999999ffff9999999999999999999fffff99999999999999999999999999999999999999
    99999999999999999999999fffffff99999999fff99999999fffffffff999fffff99999ffff999999ffffff9999999ffff99999999999999999ffffff999999999999999999999999999999999999999
    999999999999999999999fffffffff99999999fff99999999fffffffffffffffff99999ffff9999999fffff99999999ffff9999999999999999fffff9999999999999999999999999999999999999999
    9999999999999999999ffffffffff999999999fff999999fffff99fffffffffffff9999fff9999999999ffff9999999fffff99999999999999fffff99999999999999999999999999999999999999999
    99999999999999999ffffffff9999999999999fff999999fffff9999fffffffffff9999ffff999999999fffff9999999ffff99999999999999ffff999999999999999999999999999999999999999999
    9999999999999999ffffffff99999999999999999999999ffff9999999999999ffff999ffff9999999999ffff99999999fff9999999999999ffff9999999999999999999999999999999999999999999
    9999999999999999fffff99999999999999999999999999ffff9999999999999ffff9999fff9999999999ffff99999999fff9999999999999ffff9999999999999999999999999999999999999999999
    9999999999999999ffff999999999999999999999999999999999999999999999ffff999fff99999999999fff99999999ffff999999999999fff99999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999ffff999fff9999999999999999999999ffff999999999999fff99999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999fff99999999999999999999999999999ffff99999999999fff99999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999fff99999999999999999999999999999ffff99999999999fff99999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999fff99999999999999999999999999999fffff9999999999ffff9999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff9999999999ffffff99999999999999999999999999999999999999999
    99999999999999999999999999999999999f999999999999999999999999999999999999999999999999999999999999999ffff9999999999fffffff9999999999999999999999999999999999999999
    99999999999999999999999999999999999f9999999999999999999999999999999999999999999999999999999999999999999999999999999ffffff999999999999999999999999999999999999999
    99999999999ffff999999f9ff9999999999f999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff99999999999999999999999999999999999
    9999999ff99f99f99999ff99ff99999999f9999fffffff999999999999999999999999999999999999999999999999999999999999999999999999fffffffff999999999999999999999999999999999
    9999999fff9f99ff9999f9999f99999f99f9999f9999ff9999999999999999999999999999999999999999999999999999999999999999999999999fffffffffff999999999999999999999999999999
    9999999f9ff9999f9999f9999f99999f9f99999f99fff9999999999999999f999999999999999999999999999999fff999ff99999999999999999999999fffffffffff99999999999999999999999999
    9999999f9ff9999ff9999fffff99999fff99999fff999999999999f99999999999999999999999999999999999ff99f99f999999999999999999999999999fffffffff99999999999999999999999999
    999999ff99f999999999999999999999ff999999f9999999999f99f99999999999ffffff99f9999999999999ff999ff9ff999999999999999999999999999999ffffff99999999999999999999999999
    999999f9999999999999999999999999ff999999f9f99999999ff9f9999999999999ff9f99f9999999999999fffffff9f999999999999999999999999999999999999999999999999999999999999999
    999999f9999999999999999999999999999999999ff999999999f9ff9f999f999999f99999f9fff999999999f99999f9f99999ff99999999999999999999999999999999999999999999999999999999
    999999f999999999999999999999999999999999999999999999ff9f9f99ff999999f99999fff9ff9999999ff99999f9f9999ff99999f999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999fff99f9999999999999ff999f99999999999999f99999ff99999ffff9999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999ff9999f9999999999999999999f999999f99f9999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff99f999f99f99999999999f999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f99ff999f9ff9999f99999ff999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f99f9999f9ff999ff99999f9999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffff9999fffff9ff99999ffffff999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff99999999999f999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff9999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff99999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
mySprite = sprites.create(assets.image`SANN`, SpriteKind.Player)
mySprite.setPosition(80, 180)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
