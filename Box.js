class Box {
  constructor(x, y, width, height){

    var options = {
      isStatic: false
  }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.visibility= 255;
  this.width = width;
  this.height = height;
  World.add(world, this.body);
}
display(){
 
  var pos =this.body.position;
  rectMode(CENTER);
  rect(pos.x, pos.y, this.width, this.height);
}

score(){
  if(this.visibility<0 && this.visibility>(-105)){
    score++;
  }
}
}

