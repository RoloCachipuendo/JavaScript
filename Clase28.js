const API_URL = "https://swapi.dev/api";
const PEOPLE = "/people/:id";

const luckUrl = `${API_URL}${PEOPLE.replace(":id", 1)}`;
const opt = { crossDomain: true };
const onLukeResponse = function (luke) {
  console.log(`Hola soy ${luke.name}`);
};
/* esto es un primera instancia
function obtenerPersonaje(id, callback) {
  var luckUrl = `${API_URL}${PEOPLE.replace(":id", id)}`;
  $.get(luckUrl, opt, function (luke) {
    console.log(`Hola soy ${luke.name}`);
    if (callback) {
      callback();
    }
  });
}

obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3);
  });
});
*/

/**
 * Esto es un poco más refactorizado
 */
function obtenerPersonaje(id, callback) {
  var luckUrl = `${API_URL}${PEOPLE.replace(":id", id)}`;
  $.get(luckUrl, opt, callback).fail(function(){
      console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
  });
}

obtenerPersonaje(1, function (personaje) {
  console.log(`Hola soy ${personaje.name}`);
  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola soy ${personaje.name}`);
    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola soy ${personaje.name}`);
    });
  });
});
