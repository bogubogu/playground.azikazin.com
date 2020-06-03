    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent:'gameDiv',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y:300},
                debug: false
            },
            audio: {
                disableWebAudio: true
            },
        
        },

        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);
    var score = 0;
    var scoreText;

    function preload ()
    {

        this.load.image('sky', 'assets/sky2.png');
        this.load.image('ground', 'assets/platform4.png');
        this.load.image('star', 'assets/juice.png');
        this.load.image('bomb', 'assets/creature2.png');
        this.load.spritesheet('dude','assets/dude3.png', {frameWidth:32, frameHeight:48});
        this.load.image('bgstars1','assets/stars_0001.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars2','assets/stars_0002.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars3','assets/stars_0003.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars4','assets/stars_0004.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars5','assets/stars_0005.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars6','assets/stars_0006.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars7','assets/stars_0007.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars8','assets/stars_0008.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars9','assets/stars_0009.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars10','assets/stars_0010.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars11','assets/stars_0011.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars12','assets/stars_0012.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars13','assets/stars_0013.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars14','assets/stars_0014.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars15','assets/stars_0015.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars16','assets/stars_0016.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars17','assets/stars_0017.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars18','assets/stars_0018.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars19','assets/stars_0019.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars20','assets/stars_0020.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars21','assets/stars_0021.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars22','assets/stars_0022.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars23','assets/stars_0023.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars24','assets/stars_0024.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars25','assets/stars_0025.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars26','assets/stars_0026.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars27','assets/stars_0027.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars28','assets/stars_0028.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars29','assets/stars_0029.png', {frameWidth:800, frameHeight:600});
        this.load.image('bgstars30','assets/stars_0030.png', {frameWidth:800, frameHeight:600});
        this.load.audio('theme', ['assets/audio/goodmorning.mp3']);
        this.load.audio('coinsound', ['assets/audio/coin.mp3']);
        this.load.audio('gameoversound', ['assets/audio/gameover.mp3']);
        
    }
 


    function create ()
    {
        this.music = this.sound.add('theme',config);
        this.music.play(config);
        this.music.setLoop(true);


        
       





        this.add.image(400, 300, 'sky');
        platforms = this.physics.add.staticGroup ();

        platforms.create(400,568, 'ground').setScale(4).refreshBody();

        platforms.create(450,445, 'ground');

        this.anims.create({
        key: 'bgstarsplay',
        frames: [
            { key: 'bgstars1' },
            { key: 'bgstars2' },
            { key: 'bgstars3' },
            { key: 'bgstars4' },
            { key: 'bgstars5' },
            { key: 'bgstars6' },
            { key: 'bgstars7' },
            { key: 'bgstars8' },
            { key: 'bgstars9' },
            { key: 'bgstars10' },
            { key: 'bgstars11' },
            { key: 'bgstars12' },
            { key: 'bgstars13' },
            { key: 'bgstars14' },
            { key: 'bgstars15' },
            { key: 'bgstars16' },
            { key: 'bgstars17' },
            { key: 'bgstars18' },
            { key: 'bgstars19' },
            { key: 'bgstars20' },
            { key: 'bgstars21' },
            { key: 'bgstars22' },
            { key: 'bgstars23' },
            { key: 'bgstars24' },
            { key: 'bgstars25' },
            { key: 'bgstars26' },
            { key: 'bgstars27' },
            { key: 'bgstars28' },
            { key: 'bgstars29' },
            { key: 'bgstars30',}],
        frameRate: 12,
        repeat: -1
    });

    this.add.sprite(350, 400, 'bgstars1').play('bgstarsplay');
        player = this.physics.add.sprite(100,450,'dude');
        
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key:'left',
            frames: this.anims.generateFrameNumbers('dude', {start:0, end: 3}),
            frameRate:10,
            repeat: -1
        });
    
        this.anims.create({
            key:'turn',
            frames: [ { key:'dude', frame:4}],
            frameRate:20
        });

        this.anims.create({
            key:'right',
            frames:this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
            frameRate: 10,
            repeat:-1
        });
        this.physics.add.collider(player, platforms);


        cursors = this.input.keyboard.createCursorKeys();

        stars = this.physics.add.group({
            key: 'star',
            repeat: 20,
            setXY: {x:351, y:00, stepX:10, stepY:-0.5}
        });

        stars.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
        
        this.physics.add.collider(stars, platforms);


        this.physics.add.overlap(player, stars, collectStar, null, this);

        scoreText = this.add.text(16, 16, 'score:0', {fontsize:'32px', fill: '#000'});


        bombs = this.physics.add.group();
        this.physics.add.collider(bombs, platforms);
        this.physics.add.collider(player, bombs, hitbomb, null, this);




    }

    function collectStar (player, star)
    {
        star.disableBody(true, true);

        var coin = this.sound.add('coinsound',config)
        coin.play(config);

        score +=10;
        scoreText.setText('score: ' + score);
        


        if (stars.countActive(true) === 0)
        {
            stars.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
            });

            var x = (player.x < 400) ? Phaser.Math.Between(400,800) :
            Phaser.Math.Between(0,400);

            var bomb = bombs.create (x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setScale(0.5);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        }
    }



    function hitbomb (player, bomb)
    {


        this.music.stop(config);
        var gameoversound = this.sound.add('gameoversound',config)
        gameoversound.play(config);


        this. physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        gameOver = true;

        if (gameOver = true)
        {


    }
    }


    function update ()
    
    {
        
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);
            player.anims.play('right',true);
        }
        else
            {
                player.setVelocityX(0);
                player.anims.play('turn');
            }
            
        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-270);
        }

        if (cursors.down.isDown)
        {
            player.setVelocityY(+200);
        }



    }
    
