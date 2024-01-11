// console.log("Hola mundo estoy en un archivo externo");

//DOM
/*let enlaces = document.querySelectorAll("a");
enlaces.forEach(function(link){
    console.log(link);
});*/

// let celdas = document.querySelectorAll("td");

// celdas.forEach(function(td){
//     td.addEventListener("click", function(){
//         console.log("Click")
//     })
// });

// let celdas = document.querySelectorAll("td");

// celdas.forEach(function(td){
//     td.addEventListener("click", function(){
//         console.log(this);
//     })
// });

//obtener los elementos de la clase .close
let enlace = document.querySelectorAll(".close");
//Reccorrer cada uno de los elementos
enlace.forEach(function(link){
    //Agregar un evento click a cada uno de ellos
    link.addEventListener("click", function(evento){
        evento.preventDefault();
        let contenido = document.querySelector(".content");
        //Quitarle las animaciones que ya tiene
        contenido.classList.remove("animate__animated");
        contenido.classList.remove("animate__backInUp");
        //Agregar clases para animar su salida
        contenido.classList.add("animate__fadeOutUp");
        contenido.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "/";
        }, 600);

        return false;
    })
});

// let iconoes = document.querySelectorAll("i");
// iconoes.forEach(function(icono){
//     icono.classList.remove("fa-star");
// })
