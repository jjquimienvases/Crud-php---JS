<?php
include '../conexion.php';
header('Content-Type: application/json');
$response = new stdClass;

$fun = $_POST['key'];
switch ($fun) {
    case 'Q1':
        $sql = "SELECT * FROM products";
        $r = $con->query($sql);
  
        $retornolosdatos = [];
        while ($o = $r->fetch_object()) {
            $retornolosdatos[] = $o;
        }
        $response->retornolosdatos = $retornolosdatos;
        break;
    case 'Q2':
        $sku = $_POST['code'];
        $sql = "SELECT * FROM products WHERE sku = '$sku'";
        $r = $con->query($sql);
  
        $retornolosdatos = [];
        while ($o = $r->fetch_object()) {
            $retornolosdatos[] = $o;
        }
        $response->retornolosdatos = $retornolosdatos;
        break;
}

echo json_encode($response);
