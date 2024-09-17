<?php

namespace App\Service;

use Symfony\Component\HttpClient\Exception\TransportException;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use App\Entity\City;

class LocationService {

    private $httpClient;
    private $googleApiKey;
    public function __construct(HttpClientInterface $httpClient, string $googleApiKey){
        $this->httpClient = $httpClient;
        $this->googleApiKey = $googleApiKey;
    }

    public function MapsTextQuery(string $query): array
    {
        $url = sprintf(
            'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%s&inputtype=textquery&fields=geometry&key=%s',
            urlencode($query),
            $this->googleApiKey
        );
        
        try {
            $response = $this->httpClient->request('GET', $url);

            $data = $response->toArray();
        } catch (TransportException $e) {
            throw new \RuntimeException('Error fetching data from Google Places API: ' . $e->getMessage());
        }

        return $data;
    }
}