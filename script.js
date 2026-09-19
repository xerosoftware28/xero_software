document.addEventListener("DOMContentLoaded", function () {


    // Buscamos el formulario

    const formulario = document.getElementById("loginForm");


    // Buscamos el lugar donde aparecerá el mensaje

    const mensaje = document.getElementById("mensaje");


    // Cuando el usuario presiona "Iniciar Sesión"

    formulario.addEventListener("submit", function (evento) {


        // Evita que la página se recargue

        evento.preventDefault();


        // Obtener usuario

        const usuario =
            document.getElementById("usuario").value.trim();


        // Obtener contraseña

        const password =
            document.getElementById("password").value;


        /*
        DATOS DE PRUEBA

        Usuario: admin
        Contraseña: 1234
        */


        if (
            usuario === "admin" &&
            password === "1234"
        ) {


            mensaje.textContent =
                "Inicio de sesión correcto";


            mensaje.style.color = "green";


            /*
            Más adelante aquí enviaremos
            al usuario al panel principal.
            */


            setTimeout(function () {

                window.location.href = "inicio.html";

            }, 1000);


        } else {


            mensaje.textContent =
                "Usuario o contraseña incorrectos";


            mensaje.style.color = "red";


        }

    });

});