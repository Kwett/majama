<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240915173014 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE borough (id INT AUTO_INCREMENT NOT NULL, city_id INT NOT NULL, number VARCHAR(255) NOT NULL, INDEX IDX_A35FD5768BAC62AF (city_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE city (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE event (id INT AUTO_INCREMENT NOT NULL, place_id INT NOT NULL, time_start DATETIME NOT NULL, time_end DATETIME NOT NULL, description LONGTEXT NOT NULL, visual VARCHAR(255) DEFAULT NULL, facebook VARCHAR(255) DEFAULT NULL, instagram VARCHAR(255) DEFAULT NULL, background VARCHAR(255) DEFAULT NULL, INDEX IDX_3BAE0AA7DA6A219 (place_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `member` (id INT AUTO_INCREMENT NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE member_project (member_id INT NOT NULL, project_id INT NOT NULL, INDEX IDX_9047677A7597D3FE (member_id), INDEX IDX_9047677A166D1F9C (project_id), PRIMARY KEY(member_id, project_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE photo (id INT AUTO_INCREMENT NOT NULL, event_id INT DEFAULT NULL, place_id INT DEFAULT NULL, filename VARCHAR(255) NOT NULL, INDEX IDX_14B7841871F7E88B (event_id), INDEX IDX_14B78418DA6A219 (place_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE photo_project (photo_id INT NOT NULL, project_id INT NOT NULL, INDEX IDX_1A53C7637E9E4C8C (photo_id), INDEX IDX_1A53C763166D1F9C (project_id), PRIMARY KEY(photo_id, project_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE photo_member (photo_id INT NOT NULL, member_id INT NOT NULL, INDEX IDX_255B8D507E9E4C8C (photo_id), INDEX IDX_255B8D507597D3FE (member_id), PRIMARY KEY(photo_id, member_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE place (id INT AUTO_INCREMENT NOT NULL, city_id INT NOT NULL, name VARCHAR(255) NOT NULL, address_number VARCHAR(255) NOT NULL, road VARCHAR(255) NOT NULL, borough VARCHAR(255) DEFAULT NULL, facebook VARCHAR(255) DEFAULT NULL, instagram VARCHAR(255) DEFAULT NULL, background VARCHAR(255) NOT NULL, INDEX IDX_741D53CD8BAC62AF (city_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, visual VARCHAR(255) NOT NULL, contact VARCHAR(255) NOT NULL, facebook VARCHAR(255) DEFAULT NULL, instagram VARCHAR(255) DEFAULT NULL, description LONGTEXT NOT NULL, youtube VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project_event (project_id INT NOT NULL, event_id INT NOT NULL, INDEX IDX_28FB0339166D1F9C (project_id), INDEX IDX_28FB033971F7E88B (event_id), PRIMARY KEY(project_id, event_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_event (type_id INT NOT NULL, event_id INT NOT NULL, INDEX IDX_35A28D50C54C8C93 (type_id), INDEX IDX_35A28D5071F7E88B (event_id), PRIMARY KEY(type_id, event_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', available_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', delivered_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE borough ADD CONSTRAINT FK_A35FD5768BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('ALTER TABLE event ADD CONSTRAINT FK_3BAE0AA7DA6A219 FOREIGN KEY (place_id) REFERENCES place (id)');
        $this->addSql('ALTER TABLE member_project ADD CONSTRAINT FK_9047677A7597D3FE FOREIGN KEY (member_id) REFERENCES `member` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE member_project ADD CONSTRAINT FK_9047677A166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE photo ADD CONSTRAINT FK_14B7841871F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
        $this->addSql('ALTER TABLE photo ADD CONSTRAINT FK_14B78418DA6A219 FOREIGN KEY (place_id) REFERENCES place (id)');
        $this->addSql('ALTER TABLE photo_project ADD CONSTRAINT FK_1A53C7637E9E4C8C FOREIGN KEY (photo_id) REFERENCES photo (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE photo_project ADD CONSTRAINT FK_1A53C763166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE photo_member ADD CONSTRAINT FK_255B8D507E9E4C8C FOREIGN KEY (photo_id) REFERENCES photo (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE photo_member ADD CONSTRAINT FK_255B8D507597D3FE FOREIGN KEY (member_id) REFERENCES `member` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE place ADD CONSTRAINT FK_741D53CD8BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('ALTER TABLE project_event ADD CONSTRAINT FK_28FB0339166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE project_event ADD CONSTRAINT FK_28FB033971F7E88B FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE type_event ADD CONSTRAINT FK_35A28D50C54C8C93 FOREIGN KEY (type_id) REFERENCES type (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE type_event ADD CONSTRAINT FK_35A28D5071F7E88B FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE borough DROP FOREIGN KEY FK_A35FD5768BAC62AF');
        $this->addSql('ALTER TABLE event DROP FOREIGN KEY FK_3BAE0AA7DA6A219');
        $this->addSql('ALTER TABLE member_project DROP FOREIGN KEY FK_9047677A7597D3FE');
        $this->addSql('ALTER TABLE member_project DROP FOREIGN KEY FK_9047677A166D1F9C');
        $this->addSql('ALTER TABLE photo DROP FOREIGN KEY FK_14B7841871F7E88B');
        $this->addSql('ALTER TABLE photo DROP FOREIGN KEY FK_14B78418DA6A219');
        $this->addSql('ALTER TABLE photo_project DROP FOREIGN KEY FK_1A53C7637E9E4C8C');
        $this->addSql('ALTER TABLE photo_project DROP FOREIGN KEY FK_1A53C763166D1F9C');
        $this->addSql('ALTER TABLE photo_member DROP FOREIGN KEY FK_255B8D507E9E4C8C');
        $this->addSql('ALTER TABLE photo_member DROP FOREIGN KEY FK_255B8D507597D3FE');
        $this->addSql('ALTER TABLE place DROP FOREIGN KEY FK_741D53CD8BAC62AF');
        $this->addSql('ALTER TABLE project_event DROP FOREIGN KEY FK_28FB0339166D1F9C');
        $this->addSql('ALTER TABLE project_event DROP FOREIGN KEY FK_28FB033971F7E88B');
        $this->addSql('ALTER TABLE type_event DROP FOREIGN KEY FK_35A28D50C54C8C93');
        $this->addSql('ALTER TABLE type_event DROP FOREIGN KEY FK_35A28D5071F7E88B');
        $this->addSql('DROP TABLE borough');
        $this->addSql('DROP TABLE city');
        $this->addSql('DROP TABLE event');
        $this->addSql('DROP TABLE `member`');
        $this->addSql('DROP TABLE member_project');
        $this->addSql('DROP TABLE photo');
        $this->addSql('DROP TABLE photo_project');
        $this->addSql('DROP TABLE photo_member');
        $this->addSql('DROP TABLE place');
        $this->addSql('DROP TABLE project');
        $this->addSql('DROP TABLE project_event');
        $this->addSql('DROP TABLE type');
        $this->addSql('DROP TABLE type_event');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
