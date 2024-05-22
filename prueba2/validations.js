// Captura el evento de envío del formulario de registro
$('#registerForm').submit(function(event) {
    event.preventDefault();

    // Validación de campos
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var phoneNumber = $('#phoneNumber').val();
    var email = $('#email').val();
    var age = $('#age').val();
    var rut = $('#rut').val();

    if (firstName === '') {
        showAlert('Por favor, ingrese su nombre.');
        return;
    }
    if (lastName === '') {
        showAlert('Por favor, ingrese su apellido.');
        return;
    }
    if (phoneNumber === '') {
        showAlert('Por favor, ingrese su número de teléfono.');
        return;
    }
    if (email === '') {
        showAlert('Por favor, ingrese su correo electrónico.');
        return;
    }
    if (age === '') {
        showAlert('Por favor, ingrese su edad.');
        return;
    }

    // Envía el formulario si todos los campos están completos
    alert('¡Registro exitoso!');
    // Aquí puedes agregar código para enviar los datos del formulario a tu servidor
});

// Función para mostrar una alerta con estilo rojo
function showAlert(message) {
    $('#messageContainer').text(message).addClass('alert-message');
}