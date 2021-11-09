class dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.dustbin = loadImage("sprite/dustbingreen.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
      
    }
    display(){
      
      var pos =this.body.position;
      image(this.dustbin,800,210);
      fill("red");
      
    }
  }