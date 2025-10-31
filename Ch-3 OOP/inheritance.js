class A {
  displayA() {
    console.log("displayA");
  }
}
class B extends A {
  displayB() {
    console.log("displayB");
  }
}
let obj = new B();
obj.displayA(); 



