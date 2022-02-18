<?php 
 include '../conexion.php';

 $codigo = $_POST['codigo'];
 $nombre = $_POST['nombre'];
 $precio = $_POST['precio'];
 $categoria = $_POST['categoria'];

 $sql_insert = "INSERT INTO products (sku,categoria,nombre,price) 
 VALUES ('$codigo','$categoria','$nombre','$precio')";

 $execute = $con->query($sql_insert);

 if($execute){
     echo 1;
 }else{
     echo $sql_insert;
 }