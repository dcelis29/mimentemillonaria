<?php 
if (isset($_POST["email"])){
	$email_to = "dcelis29@gmail.com";
	$email_subject = "Contacto desde el sitio web";

	$email_message = "Detalles del formulario de contacto:\n\n";
	$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
	$email_message .= "Apellido: " . $_POST['apellido'] . "\n";
	$email_message .= "E-mail: " . $_POST['email'] . "\n";
	$email_message .= "Teléfono: " . $_POST['telefono'] . "\n";
	$email_message .= "Comentarios: " . $_POST['mensaje'] . "\n\n";
	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	@mail($email_to, $email_subject, $email_message, $headers);?>
	<script language="javascript">
		alert('Mensaje enviado');
		window.location.href = 'contacto.html';
	</script>
	<?php
}

?>