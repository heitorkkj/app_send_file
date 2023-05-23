<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require '../../vendor/PHPMailer-master/Exception.php';
    require '../../vendor/PHPMailer-master/PHPMailer.php';
    require '../../vendor/PHPMailer-master/SMTP.php';

    $mail = new PHPMailer(true);

    //Server settings
    $mail -> CharSet = "UTF-8";
    $mail->SMTPDebug = false;                     
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.gmail.com';                    
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'app.send.file@gmail.com';                     
    $mail->Password   = 'bixgkptclqsuykxt';                               
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;           
    $mail->Port       = 465;    
?>