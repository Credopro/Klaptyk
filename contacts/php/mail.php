<?php
require './phpmailer/PHPMailer.php';
require './phpmailer/SMTP.php';
$name = $_POST['Name'];
$email = $_POST['Email'];
$phone =$_POST['Phone'];
$message =$_POST['Message'];

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->Port       = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth   = true;
$mail->Username = 'if.klaptyk';
$mail->Password = 'Klaptyk.if';

$mail->CharSet = 'UTF-8';
$mail->SetFrom('if.klaptyk@gmail.com');
$mail->FromName = "$name";
$mail->addAddress('if.klaptyk@gmail.com');
$mail->IsHTML(true);

$mail->Subject = 'Клаптик';
$mail->Body    = "<h3>Лист від: $name <br> $email <br> Телефон № $phone</h3> <br> <p>$message</p>";

if(!$mail->send()) {
    echo 'Не вдалося надіслати повідомлення.';
    echo 'Помилка: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
