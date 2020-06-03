var game = new Phaser.Game (800,600,Phaser.CANVAS,'gameDiv');

var spacefield;

var backgroundv;

var player;

var cursors;

var bullets;
var bulletTime = 0;
var fireButton;

var mainState = {
    preload:function(){

    game.load.image('starfield' , "assets/starfield.png");
    game.load.image('player', "assets/player2.png");
    

    },
     
    create:function(){
    spacefield = game.add.tileSprite(0,0,800,600,'starfield');
    backgroundv = 4;

        player = game.add.sprite(game.world.centerX-150,game.world.centerY-100, 'player');
        game.physics.enable(player,Phaser.Physics.ARCADE);    
    
        cursors = game.input.keyboard.createCursorKeys();
        
    },

    update:function(){

        player.body.velocity.x = 0;
        spacefield.tilePosition.y += backgroundv;
        if (cursors.left.isDown)
        {
            player.body.velocity.x = -350;
        }

        if(cursors.right.isDown)
        {
            player.body.velocity.x = 350;
        }



    },   

}

game.state.add('mainState',mainState);
game.state.start('mainState');
