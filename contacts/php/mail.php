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
$mail->Username = '';
$mail->Password = '';

$mail->CharSet = 'UTF-8';
$mail->SetFrom('');
$mail->FromName = "$name"; // имя отправителя
$mail->addAddress('');
//$mail->SMTPDebug  = 3;
//$mail->Debugoutput = function($str, $level) {echo "debug level $level; message: $str";}; //$mail->Debugoutput = 'echo';
$mail->IsHTML(true);

$mail->Subject = 'Клаптик';
$mail->Body    = "<h3>Лист від: $name <br> $email <br> Телефон № $phone</h3> <br> <p>$message</p>";

if(!$mail->send()) {
    echo 'Не вдалося надіслати повідомлення.';
    echo 'Помилка: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
