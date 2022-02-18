const options2 = {
  style: 'currency',
  currency: 'USD'
};
let numberFormat2 = new Intl.NumberFormat('en-US', options2);


let date = new Date();
let fecha = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();


function clear_table() {
  document.getElementById("tarjetas").innerHTML = "";
}

function CreateItems() {
  Swal.fire({
    title: '¿Estas Seguro?',
    text: 'Recuerda que al aceptar esta peticion se creara un producto nuevo!',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Crear Item',
    denyButtonText: `Verificar Datos`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

      let name = $("#name").val();
      let code = $("#code").val();
      let price = $("#price").val();
      let cat = $("#cat").val();

      $.ajax({
        type: "POST",
        url: "../ajax/ajax_create.php",
        data: {
          codigo: code,
          nombre: name,
          precio: price,
          categoria: cat,
        },
        success: function (r) {

          if (r == 1) { //SI ES DISTINTO A 0 Y ES UN NUMERO
            Swal.fire('Exito!', 'Haz Creado un nuevo producto!', 'success')
            getTargetasAdmin()

          } else { //ES 0(NO SE EJECUTO LA CONSULTA) O EXISTE UN ERROR EXPLICATIVO(STRING)
            Swal.fire('Fail!', 'No se creo correctamente!', 'error')

            console.log(datos);
          }
        }
      });

    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
}


function getInfo(data){
  $.ajax({
    url: "../ajax/ajax_get_info.php",
    type: "POST",
    dataType: "json",
    data: {
      key: "Q2",
      code:data,
    },
  })
  .done(function (d) {
  
    let count = "";
    d.retornolosdatos.forEach((item) => {
      let nombre = item.nombre;
      let sku = item.sku;
      let categoria = item.categoria;
      let precio = item.price;

      $("#code_").val(sku);
      $("#name_").val(nombre);
      $("#price_").val(precio);
      $("#cat_").val(categoria);

      
})
})

}

function getTargetasClient() {
  $.ajax({
      url: "../ajax/ajax_get_info.php",
      type: "POST",
      dataType: "json",
      data: {
        key: "Q1",
      },
    })
    .done(function (d) {
      /* clear_table(); */
      let count = "";
      d.retornolosdatos.forEach((item) => {
        let nombre = item.nombre;
        let sku = item.sku;
        let categoria = item.categoria;
        let precio = item.price;

        var capa = document.getElementById("cards");

        let result = numberFormat2.format(precio);

        var card_var = '<div class="uk-card uk-card-default uk-width-1-2@s border-success rounded mt-2 mr-1">' +
          '<div class="uk-card-header">' +
          '<div class="uk-grid-small uk-flex-middle" uk-grid>' +
          '<div class="uk-width-auto">' +
          '<img class="uk-border-circle" width="40" height="40" src="https://cotizar.jjquimienvases.com/items/imagenes/LOGO.jpg">' +
          ' </div>' +
          '<div class="uk-width-expand">' +
          '<h3 class="uk-card-title uk-margin-remove-bottom">' + sku + '</h3>' +
          '  <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">' + fecha + '</time></p>' +
          '</div>' +
          '</div>' +
          '<div class="uk-card-body">' +
          '<b>PRODUCTO : ' + nombre.toUpperCase() + '</b>' +
          '<p>CATEGORIA : ' + categoria.toUpperCase() + '</p>' +
          '<div class="uk-grid-small" uk-grid>' +
          ' <div class="uk-width-expand" uk-leader><b>PRECIO:</b></div>' +
          '<b> <div>' + result + '</div> </b>' +
          '</div>' +
          '</div>' +
          '</div>';

        $("#tarjetas_client").append(card_var);
     

      });


    }).fail(function (e) {});
}
function getTargetasAdmin() {
  $.ajax({
      url: "../ajax/ajax_get_info.php",
      type: "POST",
      dataType: "json",
      data: {
        key: "Q1",
      },
    })
    .done(function (d) {
      clear_table();
      let count = "";
      d.retornolosdatos.forEach((item) => {
        let nombre = item.nombre;
        let sku = item.sku;
        let categoria = item.categoria;
        let precio = item.price;

        var capa = document.getElementById("cards");

        let result = numberFormat2.format(precio);

        var card_var = '<div class="uk-card uk-card-default uk-width-1-2@s border-success rounded mt-2 mr-1">' +
          '<div class="uk-card-header">' +
          '<div class="uk-grid-small uk-flex-middle" uk-grid>' +
          '<div class="uk-width-auto">' +
          '<img class="uk-border-circle" width="40" height="40" src="https://cotizar.jjquimienvases.com/items/imagenes/LOGO.jpg">' +
          ' </div>' +
          '<div class="uk-width-expand">' +
          '<h3 class="uk-card-title uk-margin-remove-bottom">' + sku + '</h3>' +
          '  <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">' + fecha + '</time></p>' +
          '</div>' +
          '</div>' +
          '<div class="uk-card-body">' +
          '<b>PRODUCTO : ' + nombre.toUpperCase() + '</b>' +
          '<p>CATEGORIA : ' + categoria.toUpperCase() + '</p>' +
          '<div class="uk-grid-small" uk-grid>' +
          ' <div class="uk-width-expand" uk-leader><b>ṔRECIO:</b></div>' +
          '<b> <div>' + result + '</div> </b>' +
          '</div>' +
          '</div>' +
          '<div class="uk-card-footer">' +
          '<div class="uk-margin-small">' +
          '<div class="uk-button-group">' +
          '<button class="btn btn-success" uk-toggle="target: #my-id" onclick="getInfo(' +sku+ ')"> Editar</button> | ' +
          '<button class="btn btn-danger"  onclick="DeleteItem(' +sku+ ')"> Eliminar</button>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';

        $("#tarjetas").append(card_var);
     

      });


    }).fail(function (e) {});
}


 


function edit_item(){
  Swal.fire({
    title: '¿Estas Seguro?',
    text: 'Recuerda que al aceptar esta peticion se editara el producto!',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Editar Item',
    denyButtonText: `Verificar Datos`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

      let name = $("#name_").val();
      let code = $("#code_").val();
      let price = $("#price_").val();
      let cat = $("#cat_").val();

      $.ajax({
        type: "POST",
        url: "../ajax/ajax_edit.php",
        data: {
          codigo: code,
          nombre: name,
          precio: price,
          categoria: cat,
        },
        success: function (r) {

          if (r == 1) { //SI ES DISTINTO A 0 Y ES UN NUMERO
            Swal.fire('Exito!', 'Haz Editado el producto!', 'success')
            getTargetasAdmin()

          } else { //ES 0(NO SE EJECUTO LA CONSULTA) O EXISTE UN ERROR EXPLICATIVO(STRING)
            Swal.fire('Fail!', 'No se edito correctamente!', 'error')

            console.log(datos);
          }
        }
      });

    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  }) 
}


function DeleteItem(data){
  Swal.fire({
    title: '¿Estas Seguro?',
    text: 'Recuerda que al aceptar esta peticion se eliminara el producto!',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Eliminar Item',
    denyButtonText: `Verificar Datos`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      $.ajax({
        type: "POST",
        url: "../ajax/ajax_delete.php",
        data: {
          codigo: data,
        },
        success: function (r) {

          if (r == 1) { //SI ES DISTINTO A 0 Y ES UN NUMERO
            Swal.fire('Exito!', 'Haz Eliminado el producto!', 'success')
            getTargetasAdmin()

          } else { //ES 0(NO SE EJECUTO LA CONSULTA) O EXISTE UN ERROR EXPLICATIVO(STRING)
            Swal.fire('Fail!', 'No se Elimino correctamente!', 'error')

            console.log(datos);
          }
        }
      });

    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  }) 
}

$( document ).ready(function() {
    $("#btn_client").trigger("click");
    $("#btn_admin").trigger("click");
});