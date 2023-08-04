/*
chat gpt reponse
document
.getElementById("miFormulario")
.addEventListener("submit", function (event) {
// Evitamos que el formulario se envíe de manera predeterminada.
event.preventDefault();


// Aquí podrías realizar validaciones adicionales antes del envío.
// Por ejemplo, verificar si los campos están completos correctamente.


// Luego, podrías enviar el formulario de manera programática si todo es válido.
// this.submit(); // Descomenta esta línea si deseas enviar el formulario.


// O realizar cualquier otra acción después del envío del formulario.


console.log("Formulario enviado");
});
*/
//Abajo, armado form con ayuda de web


const formulario = document.getElementById("miFormulario");
//Aca se marca una referencia al formulario por su ID, para "traerlo/seleccionarlo" y se lo define en una constante


addEventListener("submit", enviarFormulario);
// Se agrega un "escuchador de eventos" al evento submit este formulario para manejar el formulario de envío.


function enviarFormulario(evento) {


// Aca se define una funcion, que va a hacer que se ejecutar cuando se envie la info del formulario


Obtener los valores ingresados ​​por el usuario en cada campo const nombre = formulario.firstname.value; const apellido = formulario.apellido.valor; const email = formulario.email.valor; const mensaje = formulario['text-box'].value;

// 6. Crear un objeto para almacenar los datos del formulario const datosFormulario = { nombre: nombre, apellido: apellido, email: email, mensaje: mensaje }; // 7. Aquí puedes agregar alguna validación de los campos si lo deseas // Por ejemplo, verificar que los campos no estén vacíos o que el email sea válido // 8. Enviar los datos al servidor (Aquí usamos un mensaje de consola como ejemplo) console.log('Datos del formulario:', datosFormulario); //
// 9. Puedes enviar los datos al servidor usando AJAX o Fetch API // Aquí es donde normalmente enviarías los datos a tu backend para procesarlos y guardarlos } ``` Explicación: 1. Primero, obtenemos una referencia al formulario usando `document.getElementById('miFormulario ')`. 2. L.