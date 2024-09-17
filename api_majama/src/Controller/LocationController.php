<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Service\LocationService;

class LocationController extends AbstractController
{
    private $locationService;

    public function __construct(LocationService $locationService) {
        $this->locationService = $locationService;
    }

    #[Route('/api/location', name: 'app_location', methods:['GET'])]
    public function getPlace(Request $request): JsonResponse
    {
        $query = $request->query->get('query', ''); 

        if (empty($query)) {
            return new JsonResponse(['error' => 'Query parameter is missing'], Response::HTTP_BAD_REQUEST);
        }

        $result = $this->locationService->MapsTextQuery($query);

        return new JsonResponse($result);
    }
}
