#!/bin/bash

# Arrête les conteneurs en cours d'exécution
echo "Arrêt des conteneurs..."
docker-compose down

# Démarre les conteneurs en mode détaché (en arrière-plan)
echo "Redémarrage des conteneurs..."
docker-compose up -d

echo "L'application a été redémarrée avec succès."
