<?php 
    if(!isset($_POST['submit'])){
            echo "error; you need to submit the form!";
    }
    
    $name=$_POST['name'];
    $visitor_email=$_POST['email'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];
    
    $email_form= 'rawan.jibawi4@gmail.com';
    $email_subject= "New Form submission";
    $name_var="You have recieved a new message from the user $name. Email address: $visitor_email. $subject. Here is the message: $message";
   
    $email_body= $name_var;
    $to="rawan.jibawi4@gmail.com";
    $headers= "From: $email_form\r\n";

    mail($to, $email_subject, $email_body, $headers);

?>