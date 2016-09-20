<?php
    $name        = $_POST['name'];
    $email      = $_POST['email'];
    $msg      = $_POST['msg'];

    $to         = 'elina.lilova@gmail.com';

    $subject    = 'Письмо' от .$name. '' .$email;

    $message    .= '<b>Текст: </b> ' . $msg . '<br><br>';

    $headers    = 'MIME-Version: 1.0'                                               -"\r\n";
    $headers    .= 'Content-type: text/html; charset=utf-8'                   -"\r\n";
    $headers    .= '"From:" .  $lastName . '' . $firstName . '' . <$email>' .       -"\r\n";
    $headers    .= 'X-Mailer: PHP'                                                  -"\r\n";
    $headers    .= 'To: Администратор'                                              -"\r\n";

    mail($to, $subject, $message, $headers);

?>
