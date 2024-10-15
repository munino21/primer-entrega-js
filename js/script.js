const canciones = [];

function mostrarCanciones() {
    console.log("Lista de Canciones:");
    canciones.forEach((cancion, index) => {
        console.log(`${index + 1}. ${cancion}`);
    });
}

function agregarCancion() {
    let nuevaCancion = prompt("Introduce el nombre de la nueva canción:");
    if (nuevaCancion) {
        canciones.push(nuevaCancion);
        alert(`La canción "${nuevaCancion}" ha sido agregada.`);
    } else {
        alert("No se agregó ninguna canción.");
    }
}

function eliminarCancion() {
    let indice = parseInt(prompt("Introduce el número de la canción que quieres eliminar:"));
    if (indice > 0 && indice <= canciones.length) {
        let cancionEliminada = canciones.splice(indice - 1, 1);
        alert(`La canción "${cancionEliminada}" ha sido eliminada.`);
    } else {
        alert("Número de canción inválido.");
    }
}

function iniciarSimulador() {
    alert("Bienvenido al simulador de lista de canciones.");
    let jugar = confirm("¿Quieres gestionar tu lista de canciones?");
    
    if (jugar) {
        let seguirJugando = true;
        while (seguirJugando) {
            let opcion = prompt(
                "Elige una opción:\n" +
                "1. Ver lista de canciones\n" +
                "2. Agregar una canción\n" +
                "3. Eliminar una canción\n" +
                "4. Salir"
            );

            if (opcion === "1") {
                mostrarCanciones();
            } else if (opcion === "2") {
                agregarCancion();
            } else if (opcion === "3") {
                eliminarCancion();
            } else if (opcion === "4") {
                seguirJugando = false;
            } else {
                alert("Opción inválida. Intenta de nuevo.");
            }
        }
        alert("Menú terminado. ¡Gracias por usar el simulador!");
    } else {
        alert("Menú cancelado.");
    }
}

document.getElementById("startBtn").addEventListener("click", iniciarSimulador);
