<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = 'hello@ruebendavis.com';  // Replace with your actual email address
    $subject = 'New Contact Form Submission';
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    
    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you for your message. It has been sent.';
    } else {
        echo 'Sorry, there was an error sending your message. Please try again later.';
    }
} else {
    echo 'Invalid request method.';
}
?>
