<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include '../includes/head.php'; ?>
    <title>Products</title>
</head>
<body>
    <?php include '../includes/nav_bar.php';?>
    <button class="btn btn-primary mt-2" id="btn_client" onclick="getTargetasClient()">VER LISTA DE PRODUCTOS</button> 
    <?php 
    include '../includes/modal_create.php';
    include '../includes/modal_edit.php';
     ?>
<div class="container">
    <div id="tarjetas_client"></div>
</div>    

  
    
</body>
</html>