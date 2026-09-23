document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registroForm');
    
    // 1. Expresión Regular para el Carnet (2 letras, seguidas de 6 números)
    // Ejemplo válido: HB240784
    const regexCarnet = /^[A-Za-z]{2}\d{6}$/;
    
    // 2. Expresión Regular para Correo Electrónico estándar
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // 3. Expresión Regular para Contraseña (Mínimo 8 caracteres, al menos 1 mayúscula y 1 número)
    const regexPassword = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    // Función auxiliar para validar y aplicar estilos visuales
    function validarCampo(inputElement, feedbackElement, regex, mensajeExito, mensajeError) {
        const valor = inputElement.value.trim();
        
        if (regex.test(valor)) {
            inputElement.classList.remove('invalid');
            inputElement.classList.add('valid');
            feedbackElement.textContent = mensajeExito;
            feedbackElement.className = 'feedback success';
            return true;
        } else {
            inputElement.classList.remove('valid');
            inputElement.classList.add('invalid');
            feedbackElement.textContent = mensajeError;
            feedbackElement.className = 'feedback error';
            return false;
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        const carnetValido = validarCampo(
            document.getElementById('carnet'),
            document.getElementById('carnetFeedback'),
            regexCarnet,
            '¡Formato de carnet correcto!',
            'Error: Debe contener 2 letras seguidas de 6 números.'
        );

        const correoValido = validarCampo(
            document.getElementById('correo'),
            document.getElementById('correoFeedback'),
            regexCorreo,
            '¡Correo electrónico válido!',
            'Error: Ingrese un correo electrónico con un formato válido.'
        );

        const passwordValida = validarCampo(
            document.getElementById('password'),
            document.getElementById('passwordFeedback'),
            regexPassword,
            '¡Contraseña fuerte y válida!',
            'Error: Mínimo 8 caracteres, debe incluir una mayúscula y un número.'
        );

        if (carnetValido && correoValido && passwordValida) {
            alert('¡Todas las expresiones regulares coinciden! Formulario validado con éxito.');
        }
    });
});