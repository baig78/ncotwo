<?php
    $email=$_POST["email"];
    $subject = $_POST["name"];
    $message = $_POST["phone"] .$_POST["message"]. "Sent this email" . "\r\n" . $_POST["course"] . "Sent from this email address:" . $_POST["email"];

    echo $message;
        // mail("baig.mirza78@gmail.com", $subject, $message);



?>

