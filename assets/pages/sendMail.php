<?php
    $file = $_POST["myfile"]; 
    print_r($_POST);

    $uploaddir = '/var/www/uploads/';
    $uploadfile = $uploaddir . basename($_FILES['myfile']['name']);

    echo '<pre>';
    if (move_uploaded_file($_FILES['myfile']['tmp_name'], $uploadfile)) {
        echo "Arquivo válido e enviado com sucesso.\n";
    } else {
        echo "Possível ataque de upload de arquivo!\n";
    }

    echo 'Aqui está mais informações de debug:';
    print_r($_FILES);

    print "</pre>";
?>