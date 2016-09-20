<?php
    $ame        = $_POST['name'];
    $lastName   = $_POST['lastname'];
    $country    = $_POST['country'];
    $city       = $_POST['city'];
    $email      = $_POST['email'];
    $phone      = $_POST['phone'];

    $to         = 'elina.lilova@gmail.com';

    $subject    = 'Письмо' от .$name. '' .$lastname;

    $message    = '<b>Имя:</b> ' . $name . '<br><br>';
    $message    .= '<b>Фамилия: </b> ' . $lastName . '<br><br>';

    $headers    = 'MIME-Version: 1.0'                                               -"\r\n";
    $headers    .= 'Content-type: text/html; charset=utf-8'                   -"\r\n";
    $headers    .= '"From:" .  $lastName . '' . $firstName . '' . <$email>' .       -"\r\n";
    $headers    .= 'X-Mailer: PHP'                                                  -"\r\n";
    $headers    .= 'To: Администратор'                                              -"\r\n";

    mail($to, $subject, $message, $headers);

?>
