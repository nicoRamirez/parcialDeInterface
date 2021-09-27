let boton = document.getElementById("boton");

    boton.addEventListener("click",() => {
        let usuario = document.getElementById("usuario");
        let contraseña = document.getElementById("contraseña");
        if(usuario.value.length <= 8 &&  contraseña.value.length >=4){
            localStorage.setItem("usuario",usuario.value);
            window.location.href="./paginas/paginaPrincipal.html";
        }
        else{
            alert("usuario o contraseña incorrecta, intente de nuevo");
        }
    })
