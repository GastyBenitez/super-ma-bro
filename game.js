/* global Phaser*/

const config = {
    type: Phaser.AUTO, //webgl, canvas..
    width: 256,
    height: 244,
    backgroundcolor: '#049cd8',
    parent: 'game',
    scene: {
        preload, //se ejecuta para precarar recursos
        create, //se ejecuta cuando el juego comienza
        update //se ejecuta en cada frame
    }
}

new Phaser.Game(config)

function preload () {
    this.load.image(
        'cloud1',
        'assets/scenery/overworld/cloud1.png'
    )
    
}

function create () {
    this.add.image(100, 50, 'cloud1')
    .setOrigin(0, 0)
    .setScale(0.15)
}

function update () {
    
    
}