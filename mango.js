class Mango
{
    constructor(x, y, width, height)
    {
        var options = {density : 0.5, restitution : 0.5, friction : 1, isStatic : true};

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;;
        this.image = loadImage("sprites/mango.png");

        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}