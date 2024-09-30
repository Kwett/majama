<?php

namespace App\Service;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class ContactService {

    public function __construct(private MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function SendMessage(array $data) {

        $name = $data['name'];
        $email = $data['email'];
        $message = $data['message'];

        $emailMessage = (new Email())
            ->from($email) // L'expéditeur est l'adresse e-mail fournie dans le formulaire
            ->to('contact@collectif-majama.fr') // Remplace par l'adresse de réception des messages
            ->subject("Nouveau message de contact : $name")
            ->text("Nom: $name\nEmail: $email\n\nMessage:\n$message");

        // Envoi de l'e-mail
        $this->mailer->send($emailMessage);

        $emailConfirmation = (new Email())
            ->from('no-reply@collectif-majama.fr')
            ->to($email)
            ->subject('Votre contact avec le collectif majama !')
            ->text("Bonjour, nous confirmons la reception de votre message et y repondront dans les plus bref delais");
        
        $this->mailer->send($emailConfirmation);
    }
}