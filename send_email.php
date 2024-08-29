<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Adresse email à laquelle le mail sera envoyé
    $to = "milhane13130@gmail.com"; // Remplacez par votre adresse email
    $subject = "Nouveau message de contact de $name";

    // Construction du message
    $email_message = "Nom: $name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message\n";

    // En-têtes de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Envoi de l'email
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.";
    }
}
?>
