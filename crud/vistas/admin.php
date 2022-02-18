<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include '../includes/head.php'; ?>
    <title>Crud - Admin</title>
</head>
<body>
    <?php include '../includes/nav_bar.php';?>
   
    <button class="uk-button uk-button-default uk-margin-large-right mt-2" type="button" uk-toggle="target: #modal-close-default">Crear Nuevo Producto</button>
    <button class="btn btn-primary mt-2" onclick="getTargetasAdmin()" id="btn_admin">VER LISTA DE PRODUCTOS</button> 
    <?php 
    include '../includes/modal_create.php';
    include '../includes/modal_edit.php';
     ?>
<div class="container text-center">
  <div class="info_data_orders">
      <div id="tarjetas"></div>
  </div>
</div>
  
    
</body>
</html>