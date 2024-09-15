# Étape 1 : Utiliser une image PHP avec Apache
FROM php:8.2-apache

# Installer les extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
    libicu-dev \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-install intl pdo pdo_mysql opcache

# Activer mod_rewrite et mod_headers pour Symfony
RUN a2enmod rewrite
RUN a2enmod headers

# Modifier le port d'écoute d'Apache à 8000
RUN sed -i 's/Listen 80/Listen 8000/' /etc/apache2/ports.conf

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configurer le VirtualHost pour écouter sur le port 8000
COPY docker/apache/000-default.conf /etc/apache2/sites-available/000-default.conf
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Définir le répertoire de travail
WORKDIR /var/www/html

# Copier les fichiers de l'application Symfony
COPY . .

# Installer les dépendances Symfony avec Composer
RUN composer install --no-dev --optimize-autoloader --no-scripts

# Définir les permissions correctes pour Symfony
RUN mkdir -p /var/www/html/var
RUN chown -R www-data:www-data /var/www/html/var
RUN chmod -R 775 /var/www/html/var
RUN chmod 755 /var/www/html
RUN chmod 755 /var/www/html/public
RUN chmod 644 /var/www/html/public/index.php

# Exposer le port 8000 pour Apache
EXPOSE 8000

# Commande pour démarrer Apache
CMD ["apache2-foreground"]
