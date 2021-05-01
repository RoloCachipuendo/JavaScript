const API_URL = "https://swapi.dev/api";
const PEOPLE = "/people/:id";

const luckUrl = `${API_URL}${PEOPLE.replace(":id", 1)}`;
const opt = { crossDomain: true };
const onLukeResponse = function (luke) {
  console.log(`Hola soy ${luke.name}`);
};

/**
 * Esto es un poco más refactorizado
 */
function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    var luckUrl = `${API_URL}${PEOPLE.replace(":id", id)}`;
    $.get(luckUrl, opt, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}
function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`Hola, soy ${personaje.name}`);
    return obtenerPersonaje(2);
  })
  .then((personaje) => {
    console.log(`Hola, soy ${personaje.name}`);
    return obtenerPersonaje(3);
  })
  .then((person) => {
    console.log(`Hola, soy ${person.name}`);
    return obtenerPersonaje(4);
  })
  .then(person=>{
    console.log(`Hola, soy ${person.name}`);
  })
  .catch(onError);

//Encadenar varias promesas
