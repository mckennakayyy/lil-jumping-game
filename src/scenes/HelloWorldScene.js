import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        // this.load.setBaseURL('http://labs.phaser.io')

        this.load.image('sky', 'assets/forest.png')
        this.load.image('logo', 'assets/logo.png')
        this.load.image('name', 'assets/name.png')
    }

    create()
    {
        this.add.image(400, 300, 'sky')


        const logo = this.physics.add.image(400, 100, 'logo')
        logo.scale = 4

        logo.setVelocity(50, 100)
        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)

        const name = this.physics.add.image(100, 400, 'name')
        name.scale = 4

        name.setVelocity(50, 100)
        name.setBounce(1, 1)
        name.setCollideWorldBounds(true)



    }
}
