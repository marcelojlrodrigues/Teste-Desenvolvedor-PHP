<?php

include('DataRequest.php');

$dataRequest = new DataRequest();

// Após recebido da requisição ajax, ele chama o método apropriado de acordo o item que foi clicado

switch($_POST['action']){
    case 'clientes':        
        $data = $dataRequest->dadosClientes();
        header('Content-Type: application/json');
        echo json_encode($data);
        break;

    case 'usuarios':
        $data = $dataRequest->dadosUsuarios();
        header('Content-Type: application/json');
        echo json_encode($data);
        break;

    case 'fornecedores':
        $data = $dataRequest->dadosFornecedores();
        header('Content-Type: application/json');
        echo json_encode($data);
        break;
}

