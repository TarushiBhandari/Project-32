class YellowBox extends Box{
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
  }

  display()
  {
    fill("yellow");
    super.display();
  }
}