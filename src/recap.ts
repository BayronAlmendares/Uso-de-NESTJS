const myname = 'Bayron';
const myage = 33;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 12);

class Persona {
  // private age;
  // private name;

  // constructor(age: number, name: string) {
  //   this.age = age;
  //   this.name = name;
  // }
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name} y mi edad
     es ${this.age} `;
  }
}

const person = new Persona(33, 'Miguel');
person.getSummary();
