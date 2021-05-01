class Persona {
  constructor(name, lastName, age, height) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
  }

  saludar(fn) {
    //var nombre=this.name
    //var apellido =this.lastName
    var { name, lastName } = this;
    console.log("Hello");
    if (fn) {
      fn(name, lastName);
    }
  }
  soyAlto() {
    return this.height > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(name, lastName, age, height) {
    super(name, lastName, age, height);
  }
  saludar(fn) {
    var { name, lastName } = this;
    console.log("Hello Desarrollador");
    if (fn) {
      fn(name, lastName, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Eres Desarrollador`);
  }
}

var rolando = new Persona("Rolando", "Cachipuendo", 33, 1.64);

var elias = new Desarrollador("Rolando", "Cachipuendo", 33, 1.64);

rolando.saludar();
elias.saludar(responderSaludo);
