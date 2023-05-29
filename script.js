// inserir dado
localStorage.setItem("name", "Kauan");


// resgatar item
const name = localStorage.getItem("name");

/* console.log(name); */

// resgatando item que não existe
const lastName = localStorage.getItem("lastName");

/* console.log(lastName); */

if(!lastName){
    console.log("Sem sobrenome!");
}

// remover item
localStorage.removeItem("name")

// limpar todos os itens
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

// console.log('typeof localStorage.getItem("a"))

localStorage.clear();

// session storage

// inserir dado
sessionStorage.setItem("number", 12);

// resgatar item
const n = sessionStorage.getItem("number");

/* console.log(n); */

/* sessionStorage.removeItem("number"); */
sessionStorage.clear();