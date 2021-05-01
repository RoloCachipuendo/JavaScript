function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {};
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototipoHijo = new fn();
  prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(name, lastName, age, height) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.height = height;
}

//para clases no es recomendable utilizar arrow function,
//ya que no puedo apuntar al atributo de la clase, no hace referencia this.
Persona.prototype.saludar = () => {
  console.log("Hello");
};
Persona.prototype.soyAlto = function () {
  return this.height > 1.8;
};

function Desarrollador(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
  console.log("Soy desarrollador");
};

var rolando = new Persona("Rolando", "Cachipuendo", 33, 1.64);
