<?php 
    session_start();
    
    require './phpMailer.php';

    //doing upload file
    $_FILES = $_FILES['myfile'];

    foreach($_FILES['name'] as $indice => $nome) {
        $tipo = $_FILES['type'][$indice];
        $tamanho = $_FILES['size'][$indice];
        $caminho_temporario = $_FILES['tmp_name'][$indice];

        //Attachments of email
        $mail->addAttachment($caminho_temporario, $nome);
    }

    //Email config 
    $mail->setFrom('app.send.file@gmail.com', 'Send File');
    $mail->addAddress($_POST['emailUser']); 
    $mail->addReplyTo($_POST['responseEmail']);


    //Content
    $mail->isHTML(true);                           
    $mail->Subject = $_POST['topic'];
    $mail->Body    = '<br />'.$_POST['content'] .
    '<br /><br />
    <footer>
        <i>Está é uma web aplicação destinada a envio de emails de forma 
        simples, não nos responsabilisamos por qualquer tipo de ofensa ou questões deste tipo.</i>
        <br /><br />
        <i>A resposta desse email será enviada para '.$_POST['responseEmail'].'</i>
    </footer>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $status = $mail->send();

    if($status == 1){
        header('Location:../../index.html?sendFileSuccess');
        session_destroy();
    }else{
        header('Location:../../index.html?sendFileError');
    }
?>