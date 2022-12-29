<?php
  if (isset($_POST['email']) && !empty($_POST['email'])) {
    $subject = "[Portfolio] New contact message from $_POST['form-name']";
    $message = $_POST['form-message'];
    $headers = 'From: ' . $_POST['form-email'] . "\r\n" .
              'Reply-To: ' . $_POST['form-email'] . "\r\n" .
              'X-Mailer: PHP/' . phpversion();

    mail('cecilia980127@gmail.com', $subject, $message, $headers);

    die('Thank you for your email');
  }
?>