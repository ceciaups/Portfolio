<?php

  $name = $_POST['form-name'];
  $email = $_POST['form-email'];
  $message = $_POST['form-message'];
  $to = "cecilia980127@gmail.com";
  $subject = "[Portfolio] New Form submission";
  $headers = "From: ".$email."\r\n";
  $body = "You have received a new message from ".$name."\n".
  "Email: ".$email."\n".
  "Here is the message:\n ".$message;

  // Validate
  // if (empty($name) || empty($email)) {
  //   print "Name and email are mandatory!";
  //   exit;
  // }

  // $email_from = "cecilia980127@gmail.com";

  // Send email
  mail($to, $subject, $body, $headers);

  header('Location:thankyou.html');

?>