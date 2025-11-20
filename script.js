<body>
    <h1>Calculadora de Estimación por Intervalos</h1>
    
    <div class="form-group">
        <label for="mediaMuestral">Media Muestral (x̄):</label>
        <input type="number" id="mediaMuestral">
    </div>
    
    <div class="form-group">
        <label for="desviacionEstandar">Desviación Estándar de la Población (σ):</label>
        <input type="number" id="desviacionEstandar">
    </div>

    <div class="form-group">
        <label for="tamanoMuestra">Tamaño de la Muestra (n):</label>
        <input type="number" id="tamanoMuestra">
    </div>

    <div class="form-group">
        <label for="nivelConfianza">Nivel de Confianza:</label>
        <select id="nivelConfianza">
            <option value="90">90%</option>
            <option value="95" selected>95%</option>
            <option value="99">99%</option>
        </select>
    </div>

    <button onclick="calcularIntervalo()">Calcular</button>

    <div id="resultado">
        <!-- Los resultados aparecerán aquí -->
    </div>

    <script src="script.js"></script>
	 </div>

    <script>
	
	function calcularIntervalo() {
            // Obtener valores de los inputs
            const mediaMuestral = parseFloat(document.getElementById('mediaMuestral').value);
            const desviacionEstandar = parseFloat(document.getElementById('desviacionEstandar').value);
            const tamanoMuestra = parseInt(document.getElementById('tamanoMuestra').value);
            const nivelConfianza = parseInt(document.getElementById('nivelConfianza').value);

            // Validar inputs
            if (isNaN(mediaMuestral) || isNaN(desviacionEstandar) || isNaN(tamanoMuestra) || tamanoMuestra <= 0) {
                alert("Por favor, ingrese valores válidos.");
                return;
            }

            // Valores críticos de Z para niveles de confianza comunes
            const zScores = {
                90: 1.645,
                95: 1.96,
                99: 2.576
            };
            const z = zScores[nivelConfianza];

            // Calcular el error estándar (sigma / sqrt(n))
            const errorEstandar = desviacionEstandar / Math.sqrt(tamanoMuestra);

            // Calcular el margen de error (Z * Error Estándar)
            const margenError = z * errorEstandar;

            // Calcular los límites del intervalo
            const limiteInferior = mediaMuestral - margenError;
            const limiteSuperior = mediaMuestral + margenError;

            // Mostrar el resultado
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = `
                <p>Margen de Error: &plusmn; ${margenError.toFixed(3)}</p>
                <p>Intervalo de Confianza del ${nivelConfianza}%:</p>
                <p>[${limiteInferior.toFixed(3)}, ${limiteSuperior.toFixed(3)}]</p`;
            
			resultadoDiv.style.display ='block';
		}
			