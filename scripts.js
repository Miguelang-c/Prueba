        // Función para mostrar la hora actual
        function mostrarHora() {

            let fecha = new Date();
            let hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
            document.getElementById("hora").innerHTML = hora;
        }

        // Función para iniciar un temporizador de 3 segundos
        function iniciarTemporizador() {
            document.getElementById("mensajeTimeout").innerHTML = "Esperando...";
            
            setTimeout(function() {
                document.getElementById("mensajeTimeout").innerHTML = "¡El temporizador terminó después de 3 segundos!";
            }, 3000);
        }

        // Funciones para iniciar, detener y resetear un contador de tiempo
        let tiempo = 0;
        let intervalo;

        function iniciarContador() {
            // Si ya está en ejecución, no iniciar otro intervalo
            if (!intervalo) {
                intervalo = setInterval(function() {
                    tiempo++;
                    document.getElementById("contador").innerHTML = "Tiempo: " + tiempo + " segundos";
                }, 1000);
            }
        }

        function detenerContador() {
            clearInterval(intervalo);
            intervalo = null; // Reiniciar la variable para poder reiniciar después
        }

        function resetearContador() {
            detenerContador();
            tiempo = 0;
            document.getElementById("contador").innerHTML = "Tiempo: 0 segundos";
        }