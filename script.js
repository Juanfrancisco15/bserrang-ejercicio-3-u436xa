// En el siguiente ejercicio debéis sacar por consola (console.log) una lista con el nombre de los usuarios.
// Dicha la lista la obtendréis del documento "users.json" haciendo uso de la función "fetch". Una vez tengáis el array de usuarios, debéis generar otro array con la función "filter" para que solo estén los usuarios que tengán más de 500 en la propiedad "money".
// Teniendo la lista ya filtrada, la recorreréis con el método "forEach" para mostrar por consola el nombre de cada usuario.

let buttonShowList = document.getElementById("showList");
buttonShowList.addEventListener("click", getUsers);
function getUsers(){
var users = [];

class User {
  constructor(name, money,) {
    this.name = name;
    this.money = money;

  }
}

fetch("./users.json")
  .then(response => response.json())
  .then(data => {
    let ar = [...data];
    ar = ar.map(x => new User(x.name,x.money));
    ar.forEach(x => users.push(x));
    for(i=0;i<users.length;i++){
      if(users[i].money > 500){
        console.log(users[i]);
      }
    }
  });

};