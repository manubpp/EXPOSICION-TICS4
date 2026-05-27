        let temporizadorInterval;
        let tiempoRestante = 20;
        let enEjecucion = false;

        function iniciarTemporizador() {
            if (enEjecucion) return; // Evita múltiples clics
            
            const btnTimer = document.getElementById('btn-timer');
            const timerText = document.getElementById('timer-text');
            const timerMensaje = document.getElementById('timer-mensaje');
            const timerBarra = document.getElementById('timer-barra');

            enEjecucion = true;
            tiempoRestante = 20;
            btnTimer.disabled = true;
            btnTimer.innerHTML = '<i class="bi bi-hourglass-split me-2"></i> Frotando...';
            timerBarra.style.width = '0%';
            timerBarra.style.background = 'linear-gradient(90deg, #38bdf8, #2dd4bf)';

            const mensajes = [
                "Frota palma con palma...",
                "Entrelaza tus dedos...",
                "Limpia los pulgares...",
                "¡No olvides las uñas!",
                "Enjuaga con abundante agua..."
            ];

            temporizadorInterval = setInterval(() => {
                tiempoRestante--;
                
                timerText.innerText = tiempoRestante + 's';
                let porcentaje = ((20 - tiempoRestante) / 20) * 100;
                timerBarra.style.width = porcentaje + '%';

                if(tiempoRestante % 4 === 0 && tiempoRestante > 0) {
                    let indiceMensaje = Math.floor((20 - tiempoRestante) / 4);
                    if(indiceMensaje < mensajes.length) {
                        timerMensaje.innerText = mensajes[indiceMensaje];
                    }
                }

                if (tiempoRestante <= 0) {
                    clearInterval(temporizadorInterval);
                    timerText.innerText = '¡Listo!';
                    timerMensaje.innerHTML = '<span class="text-success fw-bold"><i class="bi bi-stars"></i> ¡Manos 100% limpias y seguras!</span>';
                    timerBarra.style.background = '#10b981'; // Color verde de éxito
                    
                    setTimeout(() => {
                        enEjecucion = false;
                        btnTimer.disabled = false;
                        btnTimer.innerHTML = '<i class="bi bi-arrow-counterclockwise me-2"></i> Repetir Lavado';
                    }, 3500);
                }
            }, 1000);
        }