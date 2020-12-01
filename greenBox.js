class GreenBox extends Box{
  constructor(x,y,width,height) {
    super(x,y,width,height);
  }

  display()
  {
    fill(0,225,4);
    super.display();
  }
}