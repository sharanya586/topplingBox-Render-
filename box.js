class Box {
    constructor(x, y, width, height) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:0.8
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.w = width;
        this.h = height;
        World.add(world, this.body);

    }
    display() {

        push();
        /*translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        angleMode(RADIANS);*/
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
        pop();
    }

}