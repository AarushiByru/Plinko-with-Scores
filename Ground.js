class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.groundObj = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.groundObj);
    }
    display(){
      var pos =this.groundObj.position;
      translate(pos.x, pos.y)
      //rectMode(CENTER);
      fill("brown");
      //rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
    }
  };
