const API_URL = "https://swapi.dev/api";
const PEOPLE = "/people/:id";

const luckUrl = `${API_URL}${PEOPLE.replace(":id", 1)}`;
const opt = { crossDomain: true };
const onLukeResponse = function (luke) {
  console.log(`Hola soy ${luke.name}`);
};

/**
 * Esto es un poco más refactorizado
 * @param {code} id of person
 * @returns {LinkStyle}fullfilled or rejected
 */
function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    var luckUrl = `${API_URL}${PEOPLE.replace(":id", id)}`;
    $.get(luckUrl, opt, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}
/**
 *
 * @param {code} id of person
 */
function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}

var ids = [1, 2, 3, 4, 5, 6, 7];
/* This is with normal function
var promises = ids.map(function (id) {
  return obtenerPersonaje(id);
});
*/

//This is with arrow function
var promises = ids.map((id) => obtenerPersonaje(id));


async function getPersons() {
  try {
    var persons = await Promise.all(promises);
    console.log(persons);
  } catch (error) {
    onError(error);
  }
}
getPersons();
