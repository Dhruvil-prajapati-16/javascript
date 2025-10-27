class Maths 
{
  constructor()
   {
    this.a = 10;
    this.b = 20;
  }
 constructorx(x,y)
{
     this.water = x;
    this.ethenol = y;

}
  sum1() 
  {
    let a = 5;
    let b = 5;
    let sum = a + b;
    console.log("sum:", sum);
  }
  sum1(x,y)
  {
    let k=x;
    let l=y;
    let sum = k + l;
    console.log("sum:", sum);
  }

  sum2() 
  {
    let a = 5;
    let b = 5;
    let sum = (this.a + this.b);
    console.log("sum:", sum);
  }
  sumx(){

    console.log("sum of x:",this.water + this.ethenol);
  }
}

let m1 = new Maths();
m1.sum1();
m1.sum1(500,500);
m1.sum2();
m1.constructorx(100,100);
m1.sumx();
