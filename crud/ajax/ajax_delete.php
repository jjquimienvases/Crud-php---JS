<?php

 include '../conexion.php';

 $sku = $_POST['codigo'];

 $sql_delete = "DELETE FROM products WHERE sku = '$sku'";
 $execute = $con->query($sql_delete);

 if($execute){
     echo 1;
 }else{
     echo $sql_delete;
 }
