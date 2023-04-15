<?php 
    require './phpMailer.php';

    //doing upload file
    $arquivos = $_FILES['myfile'];


    foreach($arquivos['name'] as $indice => $nome) {
        $tipo = $arquivos['type'][$indice];
        $tamanho = $arquivos['size'][$indice];
        $caminho_temporario = $arquivos['tmp_name'][$indice];

        //Attachments of email
        $mail->addAttachment($caminho_temporario, $nome);
    }

    //Email config 
    $mail->setFrom('app.send.file@gmail.com', 'Send File');
    $mail->addAddress($_POST['emailUser']); 


    //Content
    $mail->isHTML(true);                           
    $mail->Subject = $_POST['topic'];
    $mail->Body    = $_POST['content'] .
    '<br /><br />
    <footer>
        <i>Está é uma web aplicação destinada a envio de emails de forma 
        simples, não nos responsabilisamos por qualquer tipo de ofensa ou questões deste tipo.</i>
    </footer>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $status = $mail->send();

    if($status == 1){
        header('Location:../../index.html?sendFileSuccess');
    }else{
        header('Location:../../index.html?sendFileError');
    }
?>