class Sling
{
    constructor(bodyA, pointA)
    {
        var options = {bodyA : bodyA, pointA : pointB, stiffness : 0.04, lenght : 10};

        this.pointA = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
        var pos = this.bodyA.position;
        var pon = this.pointB;

        if(pos.x < pon.x)
        {
            line(pos.x, pos.y, pon.x, pon.y);
        } else
        {
            fly();
        }
    }
}