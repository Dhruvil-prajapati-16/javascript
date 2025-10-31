// private
class A{
    #a = 4
    #b = 6
 constructor(){
    console.log(this.#a+this.#b)
 }   
}

class B extends A {
 #x = 50
 #y = 50
 
 constructor(){
    super()
    console.log(this.#x+this.#y)
 }
} 
const objb = new B;



class P{
     a = 600
     b = 400
  constructor(){
    console.log("class p constructor")
  }
}

class Q{
    h=250
    k=250
    q=120
    p=30
    constructor(){
console.log(this.q + this.p)
    }

}
function mix(...bases) {
  class Combined {}
  bases.forEach(base => Object.assign(Combined.prototype, base.prototype));
  return Combined;
}

class C extends mix(P, Q) {
constructor(){
    super()
    new P()
    new Q()
}  
}
const obj = new C();

class X{
    g = "4"
    j = 10

}
class Y extends X {
    constructor(){
        super()
console.log(this.g + this.j)        
    }

}

const objy = new Y()
