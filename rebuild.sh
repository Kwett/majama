#!/bin/bash

# Arrête les conteneurs en cours d'exécution
echo "Arrêt des conteneurs..."
docker-compose down

# Démarre les conteneurs en mode détaché (en arrière-plan)
echo "Rebuild des conteneurs..."
docker-compose up -d --build

echo "L'application a été rebuild avec succès."

