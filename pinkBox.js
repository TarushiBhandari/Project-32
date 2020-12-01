class PinkBox extends Box{
  constructor(x,y,width,height){
    super(x,y,width,height);
  }

  display()
  {
    fill(225,119,245);
    super.display();
  }
}