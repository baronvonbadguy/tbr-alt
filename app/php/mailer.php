<?php
if(isset($_POST['submit'])) {
	if ($_POST['destination'] == '') {
		//put your default email here
		$to = 'user@domain.com';
	}
	if ($_POST['destination'] == 'feedback') {
		//put your general feedback email here
		$to = 'user@domain.com';
	}
	if ($_POST['destination'] == 'learn-earn') {
		//put your learn & earn email here
		$to = 'user@domain.com';
	}
	if ($_POST['destination'] == 'volunteer') {
		//put your volunteering email here
		$to = 'user@domain.com';
	}
	if ($_POST['destination'] == 'donate') {
		//put your bike donations email here
		$to = 'user@domain.com';
	}
	 
	 if ( strstr($_POST['eman'], '@') == false ) {
	 	// data the visitor provided
		$name_field = filter_var($_POST['eman'], FILTER_SANITIZE_STRING);
		$email_field = filter_var($_POST['liame'], FILTER_VALIDATE_EMAIL);
		$subject_field = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
		$message_field = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
		 
		//constructing the message
		$body = " From: $name_field\n\n E-Mail: $email_field\n\n Message: $message_field\n\n";
		if ($_POST['name'] == '' && $_POST['email'] == '') {
			// ...and away we go!
			mail($to, $subject_field, $body);
		}
	 }
	// redirect to confirmation
	header('Location: ../confirmation.html');
} else {
// handle the error somehow
}
?>