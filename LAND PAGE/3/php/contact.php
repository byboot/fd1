<?php
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
        $email = strip_tags(trim($_POST["email"]));
        $message = trim($_POST["message"]);

 
        // Set the email subject.
        $subject = "Заявка с сателитов BMG.BY: ". $name;

        // Build the email content.
        if($name !=""){ $email_content = "Имя: $name\n"; }
        if($email !=""){ $email_content .= "Телефон: $email\n"; }
         $email_content .=  "Сообщение: $message\n"; 

        // Build the email headers.
        $email_headers .= "Content-Type: text/plain; charset=utf-8\r\n"."From: $name <$email>";

        mail("info@bmg.by", $subject, $email_content, $email_headers);
        mail("zimnev@tut.by", $subject, $email_content, $email_headers);
    } 
?>