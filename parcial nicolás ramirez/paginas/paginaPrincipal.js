let p = document.getElementById("usuario");
p.innerText=localStorage.getItem("usuario");

let boton = document.getElementById("botonVolver");

    boton.addEventListener("click",() => {
        
            window.location.href="../index.html";
    })