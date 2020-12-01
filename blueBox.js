class BlueBox extends Box {
  constructor(x,y,width,height){
    super(x,y,width,height);
  }

  display()
  {
    fill(0,220,255);
    super.display();
  }
}