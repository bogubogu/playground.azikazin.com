var config = {
    type: Phaser.AUTO,
    parent:'gameDiv',
    width: 800,
    height: 600,
    backgroundColor: '#FFFFFF',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('artwork', 'assets/eyeballs_cover.jpg');

    this.load.setPath('assets/audio');

    this.load.audio('bass', [ 'minimpc (1).mp3' ]);
    this.load.audio('drums', [ 'minimpc (2).mp3' ]);
    this.load.audio('percussion', [ 'minimpc (3).mp3' ]);
    this.load.audio('synth1', [ 'minimpc (4).mp3' ]);
    this.load.audio('synth2', [ 'minimpc (5).mp3' ]);
    this.load.audio('top1', [ 'minimpc (6).mp3' ]);
    this.load.audio('top2', [ 'minimpc (7).mp3' ]);
}

function create ()
{
    this.add.image(800, 700, 'artwork').setOrigin(1.1);

    var bass = this.sound.add('bass');
    var drums = this.sound.add('drums');
    var percussion = this.sound.add('percussion');
    var synth1 = this.sound.add('synth1');
    var synth2 = this.sound.add('synth2');
    var top1 = this.sound.add('top1');
    var top2 = this.sound.add('top2');

    var keys = [
        'Press A for Bass',
        'Press B for Drums',
        'Press C for Percussion',
        'Press D for Synth1',
        'Press E for Synth2',
        'Press F for Top1',
        'Press G for Top2',
        '',
        'SPACE to stop all sounds'
    ];

    var text = this.add.text(10, 10, keys, { font: '32px Courier', fill: '#00ff00' });

    if (this.sound.stop)
    {
        text.setText('Click to start');

        this.sound.once('unlocked', function ()
        {
            text.setText(keys);
        });
    }

    this.input.keyboard.on('keydown-SPACE', function () {
        this.sound.stopAll();
    }, this);

    this.input.keyboard.on('keydown-A', function () {
        bass.play();
    });

    this.input.keyboard.on('keydown-B', function () {
        drums.play();
    });

    this.input.keyboard.on('keydown-C', function () {
        percussion.play();
    });

    this.input.keyboard.on('keydown-D', function () {
        synth1.play();
    });

    this.input.keyboard.on('keydown-E', function () {
        synth2.play();
    });

    this.input.keyboard.on('keydown-F', function () {
        top1.play();
    });

    this.input.keyboard.on('keydown-G', function () {
        top2.play();
    });
}