if (localStorage.getItem("notas") == undefined) {
    $('#tbodyNotas').html(localStorage.getItem("notas"));
}else{
    localStorage.setItem("notas", '');
}

//Formulario 
$("#formRegistrarNota").on("submit", function (e) {
  e.preventDefault();
  var nombre = $("#txtNombre").val(),
    nota1 = $("#txtNota1").val(),
    nota2 = $("#txtNota2").val(),
    nota3 = $("#txtNota3").val(),
    final = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3).toFixed(1);
  $("#final").html("Final: " + final);
  var html = `
    <tr>          
        <td>${nombre}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${nota3}</td>
        <td>${final}</td>
        <td><button class="delete btn btn-secondary">Eliminar</button></td>
    </tr>
    `
  localStorage.setItem("notas", html+localStorage.getItem("notas"));
  $(this)[0].reset();  
  $('#tbodyNotas').append(html);
});


//Reemplazar coma por punto
$(".nota").keyup(function () {
  $(this).val($(this).val().replace(",", "."));
});

//Eliminar los elementos
$(document).on('click', '.delete', function(){    
    $(this).parent().parent().remove();
})

//Eliminar nota al cerrar 
$('#exampleModal').on('hidden.bs.modal', function(event){
    $('#final').html('')
})
