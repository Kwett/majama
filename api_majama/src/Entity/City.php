<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\CityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CityRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read']],
    denormalizationContext: ['groups' => ['write']],
)]

class City
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read'])]
    private ?string $name = null;

    /**
     * @var Collection<int, Place>
     */
    #[ORM\OneToMany(targetEntity: Place::class, mappedBy: 'city')]
    private Collection $places;

    /**
     * @var Collection<int, Borough>
     */
    #[ORM\OneToMany(targetEntity: Borough::class, mappedBy: 'city')]
    #[Groups(['read'])]
    private Collection $boroughs;

    public function __construct()
    {
        $this->places = new ArrayCollection();
        $this->boroughs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Place>
     */
    public function getPlaces(): Collection
    {
        return $this->places;
    }

    public function addPlace(Place $place): static
    {
        if (!$this->places->contains($place)) {
            $this->places->add($place);
            $place->setCity($this);
        }

        return $this;
    }

    public function removePlace(Place $place): static
    {
        if ($this->places->removeElement($place)) {
            // set the owning side to null (unless already changed)
            if ($place->getCity() === $this) {
                $place->setCity(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Borough>
     */
    public function getBoroughs(): Collection
    {
        return $this->boroughs;
    }

    public function addBorough(Borough $borough): static
    {
        if (!$this->boroughs->contains($borough)) {
            $this->boroughs->add($borough);
            $borough->setCity($this);
        }

        return $this;
    }

    public function removeBorough(Borough $borough): static
    {
        if ($this->boroughs->removeElement($borough)) {
            // set the owning side to null (unless already changed)
            if ($borough->getCity() === $this) {
                $borough->setCity(null);
            }
        }

        return $this;
    }
}
