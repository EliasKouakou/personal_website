<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;
    require 'PHPMailer-master/src/PHPMailer.php';
    require 'PHPMailer-master/src/Exception.php';
    require 'PHPMailer-master/src/SMTP.php';
   
   
    $name = htmlspecialchars($_POST['name']);
    $from = htmlspecialchars($_POST['mail']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    $body = wordwrap($message, 70, "r\n");
    $to = "elmichaellangelo@gmail.com";
    $psswd = "MDPgmail123*";
    echo $psswd;

    function sendMail($to, $from, $from_name, $subject, $body, $psswd) {
        $mail = new PHPMailer(true);  // Cree un nouvel objet PHPMailer
        $mail->isSMTP(); // active SMTP
        $mail->Mailer = "smtp"; // active SMTP
        $mail->SMTPDebug = 1;  // debogage: 1 = Erreurs et messages, 2 = messages seulement
        $mail->SMTPAuth = true;  // Authentification SMTP active
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Gmail REQUIERT Le transfert securise
        $mail->Host = 'smtp.gmail.com';
        $mail->Port = 587;
        $mail->Username = $from;
        $mail->Password = $psswd;
        $mail->SetFrom($from, $from_name);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->AddAddress($to);
        if(!$mail->Send()) {
            return 'Mail error: '.$mail->ErrorInfo;
        } else {
            return true;
        }
    }
    // mail($to, $subject, $body, $header);
    $result = sendMail($to, $from, $name, $subject, $body, $psswd);
    if (true !== $result)
    {
        echo $result;
    }
    // echo $name, "send this", $message, 'to you';
?>