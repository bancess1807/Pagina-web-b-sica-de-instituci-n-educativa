document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('registro-form');
    const contrasenaInput = document.getElementById('contrasena');
    const confirmarContrasenaInput = document.getElementById('confirmar_contrasena');
    const contrasenaError = document.getElementById('contrasena-error');
    const confirmarError = document.getElementById('confirmar-error');
    const correoBaseInput = document.getElementById('correo_base');
    const correoInputHidden = document.getElementById('correo');

    registroForm.addEventListener('submit', function(event) {
        let isValid = true;

        // Validar contraseña
        const contrasena = contrasenaInput.value;
        const confirmarContrasena = confirmarContrasenaInput.value;
        const contrasenaRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (!contrasenaRegex.test(contrasena)) {
            contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres y contener números, letras y símbolos.';
            isValid = false;
        } else {
            contrasenaError.textContent = '';
        }

        if (contrasena !== confirmarContrasena) {
            confirmarError.textContent = 'Las contraseñas no coinciden.';
            isValid = false;
        } else {
            confirmarError.textContent = '';
        }

        // Crear el correo electrónico completo antes de enviar
        correoInputHidden.value = correoBaseInput.value + '@angel.com';

        if (!isValid) {
            event.preventDefault(); // Evitar el envío del formulario si hay errores
        }
        // Aquí se enviaría el formulario al servidor si isValid es true
        // console.log('Formulario válido para enviar:', {
        //     nombre: document.getElementById('nombre').value,
        //     apellidos: document.getElementById('apellidos').value,
        //     nivel: document.querySelector('input[name="nivel"]:checked').value,
        //     genero: document.querySelector('input[name="genero"]:checked').value,
        //     grado: document.getElementById('grado').value,
        //     correo: correoInputHidden.value,
        //     contrasena: contrasena
        // });
    });
});