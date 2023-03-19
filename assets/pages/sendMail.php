<?php 

    if(empty($_POST['emailUser'] || empty($_POST['topic'])) || empty($_POST['content']) || empty($_FILES['myfile'])){
        header('Location: ../../index.html?emptyFields');
    }

    //doing upload file
    $file = $_FILES['myfile'];

    //parting the type name
    $newFile = explode('.', $file['name']);

    //Checking type file
    if($newFile[sizeOf($newFile)-1] == 'exe'){
        die(header('Location: ../../index.html?incompatibleFile')); 
    }

    
    require './phpMailer.php';
    //Email config 
    $mail->setFrom('app.send.file@gmail.com', 'Send File');
    $mail->addAddress($_POST['emailUser']); 

    //Attachments
    $mail->addAttachment($file['tmp_name'], $file['name']);

    //Content
    $mail->isHTML(true);                           
    $mail->Subject = $_POST['topic'];
    $mail->Body    = $_POST['content'].
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