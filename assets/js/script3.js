        //EventListener para ejecución de función suma en caso de hacer click en botón correspondiente
        let addButtom = document.getElementById('btn-sumar');
        addButtom.addEventListener('click', addition);

        // Escucha al boton restar, si se presiona, ejecuta funcion restar
        let substractionButtom = document.getElementById('btn-restar');
        substractionButtom.addEventListener('click', substraction);

        // Genera la suma entre dos numeros
        function addition() {
            let num1 = parseInt(document.getElementById('valor1').value);
            let num2 = parseInt(document.getElementById('valor2').value);
            let answer = num1 + num2;
            let result = document.getElementsByClassName('resultado');
            result[0].innerHTML = answer;
        }

        // Función resta de dos números. Incorporá IF para mostrar 0 en acso de resultado negativo
        function substraction() {
            let num1 = parseInt(document.getElementById('valor1').value);
            let num2 = parseInt(document.getElementById('valor2').value);
            let answer = num1 - num2;
            if (answer < 0) {
                answer = 0;
            }
            let result = document.getElementsByClassName('resultado');
            result[0].innerHTML = answer;
        }