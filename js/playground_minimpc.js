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
    this.load.image('artwork', 'assets/noodlegame1.png');

    this.load.image('mpcscreen1', 'assets/mpcscreen1.png');
    this.load.image('mpcscreen2', 'assets/mpcscreen2.png');
    this.load.image('mpcscreen3', 'assets/mpcscreen3.png');
    this.load.image('mpcscreen4', 'assets/mpcscreen4.png');
    this.load.image('mpcscreen5', 'assets/mpcscreen5.png');
    this.load.image('mpcscreen6', 'assets/mpcscreen6.png');

    this.load.setPath('assets/audio/soundpack');

    this.load.audio('loop1', [ 'loop1.mp3' ]);
    this.load.audio('loop2', [ 'loop2.mp3' ]);
    this.load.audio('loop3', [ 'loop3.mp3' ]);
    this.load.audio('loop4', [ 'loop4.mp3' ]);

    this.load.audio('chord5', [ 'chord5.mp3' ]);
    this.load.audio('chord6', [ 'chord6.mp3' ]);
    this.load.audio('chord7', [ 'chord7.mp3' ]);
    this.load.audio('chord8', [ 'chord8.mp3' ]);
    this.load.audio('chord9', [ 'chord9.mp3' ]);
    this.load.audio('chord10', [ 'chord10.mp3' ]);
    this.load.audio('chord11', [ 'chord11.mp3' ]);
    this.load.audio('chord12', [ 'chord12.mp3' ]);

    this.load.audio('sample13', [ 'sample13.mp3' ]);
    this.load.audio('sample14', [ 'sample14.mp3' ]);
    this.load.audio('sample15', [ 'sample15.mp3' ]);
    this.load.audio('sample16', [ 'sample16.mp3' ]);
}

function create ()
{
    this.add.image(400, 300, 'artwork');



    var loop1 = this.sound.add('loop1');
    var loop2 = this.sound.add('loop2');
    var loop3 = this.sound.add('loop3');
    var loop4 = this.sound.add('loop4');

    var chord5 = this.sound.add('chord5');
    var chord6 = this.sound.add('chord6');
    var chord7 = this.sound.add('chord7');
    var chord8 = this.sound.add('chord8');
    var chord9 = this.sound.add('chord9');
    var chord10 = this.sound.add('chord10');
    var chord11 = this.sound.add('chord11');
    var chord12 = this.sound.add('chord12');


    var sample13 = this.sound.add('sample13');
    var sample14 = this.sound.add('sample14');
    var sample15 = this.sound.add('sample15');
    var sample16 = this.sound.add('sample16');

    var keys = [
        'Press 1 for LOOP1',
        'Press 2 for LOOP2',
        'Press 3 for LOOP3',
        'Press 4 for LOOP4',
        '',
        'Press Q for Sound1',
        'Press W for Sound2',
        'Press E for Sound3',
        'Press R for Sound4',
        'Press T for Sound5',
        'Press Y for Sound6',
        'Press U for Sound7',
        '',
        'Press I for Sound8',
        'Press S for Sound9',
        'Press F for Sound10',
        'Press H for Sound11',
        'Press K for Sound12',
        '',
        'SPACE to stop all sounds'
    ];

    var text = this.add.text(10, 10, keys, { font: '22px Helvetica', fill: '#00ff00' });

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

    



// LOOP 
    this.input.keyboard.on('keydown-ONE', function () {
        if(loop1.play()) { //loop1
            loop1.stop()
        }
        if(loop2.play()) {
            loop2.stop()
        }
         if(loop3.play()){
            loop3.stop()
        }
        if(loop4.play()){
            loop4.stop()
        }

        loop1.play();
        this.add.image(400, 300, 'mpcscreen1');
        
    }, this);

    this.input.keyboard.on('keydown-TWO', function () {
        if(loop1.play()) { //loop1
            loop1.stop()
        }
        if(loop2.play()) {
            loop2.stop()
        }
         if(loop3.play()){
            loop3.stop()
        }
        if(loop4.play()){
            loop4.stop()
        }

        loop2.play();
        this.add.image(400, 300, 'mpcscreen2');
        
    }, this);

    this.input.keyboard.on('keydown-THREE', function () {
        if(loop1.play()) { //loop1
            loop1.stop()
        }
        if(loop2.play()) {
            loop2.stop()
        }
         if(loop3.play()){
            loop3.stop()
        }
        if(loop4.play()){
            loop4.stop()
        }

        loop3.play();
        this.add.image(400, 300, 'mpcscreen3');
        
    }, this);

    this.input.keyboard.on('keydown-FOUR', function () {
        if(loop1.play()) { //loop1
            loop1.stop()
        }
        if(loop2.play()) {
            loop2.stop()
        }
        if(loop3.play()){
            loop3.stop()
        }
        if(loop4.play()){
            loop4.stop()
        }

        loop4.play();
        this.add.image(400, 300, 'mpcscreen4');
        
    }, this);

    this.input.keyboard.on('keydown-NUMPAD_ONE', function () {
        if(loop1.play()) { //loop1
            loop1.stop()
        }
        if(loop2.play()) {
            loop2.stop()
        }
         if(loop3.play()){
            loop3.stop()
        }
        if(loop4.play()){
            loop4.stop()
        }

        loop1.play();
        this.add.image(400, 300, 'mpcscreen5');
        
    }, this);

    this.input.keyboard.on('keydown-NUMPAD_TWO', function () {
        if(loop1.play()) { //loop1
            loop1.stop()
        }
        if(loop2.play()) {
            loop2.stop()
        }
         if(loop3.play()){
            loop3.stop()
        }
        if(loop4.play()){
            loop4.stop()
        }

        loop2.play();
        this.add.image(400, 300, 'mpcscreen6');
        
    }, this);

    this.input.keyboard.on('keydown-NUMPAD_THREE', function () {
        if(loop1.play()) { //loop1
            loop1.stop()
        }
        if(loop2.play()) {
            loop2.stop()
        }
         if(loop3.play()){
            loop3.stop()
        }
        if(loop4.play()){
            loop4.stop()
        }

        loop3.play();
        this.add.image(400, 300, 'mpcscreen1');
        
    }, this);

    this.input.keyboard.on('keydown-NUMPAD_FOUR', function () {
        if(loop1.play()) { //loop1
            loop1.stop()
        }
        if(loop2.play()) {
            loop2.stop()
        }
         if(loop3.play()){
            loop3.stop()
        }
        if(loop4.play()){
            loop4.stop()
        }

        loop4.play();
        this.add.image(400, 300, 'mpcscreen2');
        
    }, this);

    this.input.keyboard.on('keydown-Q', function () {
        if(chord5.play()) { //loop1
            chord5.stop()
        }
        if(chord6.play()) {
            chord6.stop()
        }
         if(chord7.play()){
            chord7.stop()
        }
        if(chord8.play()){
            chord8.stop()
        }
        if(chord9.play()){
            chord9.stop()
        }
        if(chord10.play()){
            chord10.stop()
        }
        if(chord11.play()){
            chord11.stop()
        }
        chord5.play();
        this.add.image(400, 300, 'mpcscreen3');
        
    }, this);
    

    this.input.keyboard.on('keydown-W', function () {
        if(chord5.play()) { //loop1
            chord5.stop()
        }
        if(chord6.play()) {
            chord6.stop()
        }
         if(chord7.play()){
            chord7.stop()
        }
        if(chord8.play()){
            chord8.stop()
        }
        if(chord9.play()){
            chord9.stop()
        }
        if(chord10.play()){
            chord10.stop()
        }
        if(chord11.play()){
            chord11.stop()
        }
        chord6.play();
        this.add.image(400, 300, 'mpcscreen4');
        
    }, this);

    this.input.keyboard.on('keydown-E', function () {
        if(chord5.play()) { //loop1
            chord5.stop()
        }
        if(chord6.play()) {
            chord6.stop()
        }
         if(chord7.play()){
            chord7.stop()
        }
        if(chord8.play()){
            chord8.stop()
        }
        if(chord9.play()){
            chord9.stop()
        }
        if(chord10.play()){
            chord10.stop()
        }
        if(chord11.play()){
            chord11.stop()
        }
        chord7.play();
        this.add.image(400, 300, 'mpcscreen5');
        
    }, this);

    this.input.keyboard.on('keydown-R', function () {
        if(chord5.play()) { //loop1
            chord5.stop()
        }
        if(chord6.play()) {
            chord6.stop()
        }
         if(chord7.play()){
            chord7.stop()
        }
        if(chord8.play()){
            chord8.stop()
        }
        if(chord9.play()){
            chord9.stop()
        }
        if(chord10.play()){
            chord10.stop()
        }
        if(chord11.play()){
            chord11.stop()
        }
        chord8.play();
        this.add.image(400, 300, 'mpcscreen6');
        
    }, this);

    this.input.keyboard.on('keydown-T', function () {
        if(chord5.play()) { //loop1
            chord5.stop()
        }
        if(chord6.play()) {
            chord6.stop()
        }
         if(chord7.play()){
            chord7.stop()
        }
        if(chord8.play()){
            chord8.stop()
        }
        if(chord9.play()){
            chord9.stop()
        }
        if(chord10.play()){
            chord10.stop()
        }
        if(chord11.play()){
            chord11.stop()
        }
        chord9.play();
        this.add.image(400, 300, 'mpcscreen1');
        
    }, this);

    this.input.keyboard.on('keydown-Y', function () {
        if(chord5.play()) { //loop1
            chord5.stop()
        }
        if(chord6.play()) {
            chord6.stop()
        }
         if(chord7.play()){
            chord7.stop()
        }
        if(chord8.play()){
            chord8.stop()
        }
        if(chord9.play()){
            chord9.stop()
        }
        if(chord10.play()){
            chord10.stop()
        }
        if(chord11.play()){
            chord11.stop()
        }
        chord10.play();
        this.add.image(400, 300, 'mpcscreen2');
        
    }, this);

    this.input.keyboard.on('keydown-U', function () {
        if(chord5.play()) { //loop1
            chord5.stop()
        }
        if(chord6.play()) {
            chord6.stop()
        }
         if(chord7.play()){
            chord7.stop()
        }
        if(chord8.play()){
            chord8.stop()
        }
        if(chord9.play()){
            chord9.stop()
        }
        if(chord10.play()){
            chord10.stop()
        }
        if(chord11.play()){
            chord11.stop()
        }
        chord11.play();
        this.add.image(400, 300, 'mpcscreen3');
        
    }, this);

    this.input.keyboard.on('keydown-I', function () {
        chord12.play();
        this.add.image(400, 300, 'mpcscreen4');
        
    }, this);

    this.input.keyboard.on('keydown-S', function () {
        sample13.play();
        this.add.image(400, 300, 'mpcscreen5');
        
    }, this);

    this.input.keyboard.on('keydown-F', function () {
        sample14.play();
        this.add.image(400, 300, 'mpcscreen6');
        
    }, this);

    this.input.keyboard.on('keydown-H', function () {
        sample15.play();
        this.add.image(400, 300, 'mpcscreen1');
        
    }, this);

    this.input.keyboard.on('keydown-K', function () {
        sample16.play();
        this.add.image(400, 300, 'mpcscreen2');
        
    }, this);
}