// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else{
            registrarPersona();
            event.preventDefault()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
function registrarPersona(){
    alert('se ha enviado correctamente')
    let nombre = document.querySelector('#txtNombre').value;
    let apellido = document.querySelector('#txtApellido').value;
    let documento = document.querySelector('#txtDocumento').value;
    let correo = document.querySelector('#txtCorreo').value;
    let telefono = document.querySelector('#txtTelefono').value;

    let url = `http://localhost:3000/usuarios`;
    let datos = {
        nombre: nombre,
        apellido: apellido,
        documento: documento,
        correo: correo,
        telefono: telefono,
        rolId: "61993debe7e1d30324971740"
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .then(mensaje => {
        console.log(mensaje)
    })
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.iniciar-sesion')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else{
          iniciarPersona();
          event.preventDefault()
        }

        form.classList.add('was-validated')
      }, false)
    })
  })()
  
  async function consultarRol(id){
    let url = `http://localhost:3000//rols/${id}`;
    let pet = await fetch(url, { method: 'GET',});
    let result = await pet.json();
    return result.nombre
  }
  function iniciarPersona(){
    alert('se ha enviado correctamente')
    let correoInicio = document.querySelector('#txtCorreoInicio').value;
    let password = document.querySelector('#txtPassword').value;
    
    let url = `http://localhost:3000/identificarPersona`;
    let datos = {
      usuario: correoInicio,
      clave: password,
    };
    

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
          'Content-Type':'application/json'
      }
  }).then(res => res.json())
  .then(mensaje => {
    console.log(mensaje)
    consultarRol(mensaje.datos.rol).then(r => {
      console.log(r)
    })
  })

}
