<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class ContactController extends AbstractController {

    public function construct() {}

    #[Route('/api/contact', name: 'app_contact', methods: ['POST'])]
    public function ContactRequest(Request $request) : JsonResponse 
    {
        $jsonData = json_decode($request->getContent(), true);
        if (empty($jsonData)) {
            return new JsonResponse(['error' => 'Form empty'], Response::HTTP_BAD_REQUEST);
        }

        $result = $this->contactService->SendMessage($jsonData);
    }
}