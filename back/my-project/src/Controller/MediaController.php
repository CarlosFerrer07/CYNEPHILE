<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Media;
use App\Repository\MediaRepository;
use Doctrine\ORM\EntityManagerInterface;

class MediaController extends AbstractController
{
    #[Route('api/getAllMedia', name: 'app_media', methods: ['get'])]
    public function media(ManagerRegistry $doctrine, EntityManagerInterface $em): JsonResponse
    {
        $allMedia = $doctrine
            ->getRepository(Media::class)
            ->findAll();

        $data = [];

        foreach ($allMedia as $media) {
            $data[] = [
                'id' => $media->getId(),
                'title' => $media->getTitle(),
                'gender' => $media->getGender(),
                'year' => $media->getYear(),
                'duration' => $media->getDuration(),
                'country' => $media->getCountry(),
                'score' => $media->getScore(),
                'synopsis' => $media->getSynopsis(),
                'cast' => $media->getCast(),
                'type' => $media->getType(),
                'poster' => $media->getPoster(),
                'director' => $media->getDirector()
            ];
        }

        return $this->json($data);
    }

    #[Route('/api/getAllMovies', name: 'app_movies', methods: ['get'])]
    public function getAllMovies(ManagerRegistry $doctrine): JsonResponse
    {
        $allMovies = $doctrine
            ->getRepository(Media::class)
            ->findBy(['type' => 'Pelicula']);

        $dataMovies = [];

        foreach ($allMovies as $media) {
            $dataMovies[] = [
                'id' => $media->getId(),
                'title' => $media->getTitle(),
                'gender' => $media->getGender(),
                'year' => $media->getYear(),
                'duration' => $media->getDuration(),
                'country' => $media->getCountry(),
                'score' => $media->getScore(),
                'synopsis' => $media->getSynopsis(),
                'cast' => $media->getCast(),
                'type' => $media->getType(),
                'poster' => $media->getPoster(),
                'director' => $media->getDirector()
            ];
        }

        return $this->json($dataMovies);
    }

    #[Route('/api/getAllSeries', name: 'app_series', methods: ['get'])]
    public function getAllSeries(ManagerRegistry $doctrine): JsonResponse
    {
        $allSeries = $doctrine
            ->getRepository(Media::class)
            ->findBy(['type' => 'Serie']);;

        $dataSeries = [];

        foreach ($allSeries as $media) {
            $dataSeries[] = [
                'id' => $media->getId(),
                'title' => $media->getTitle(),
                'gender' => $media->getGender(),
                'year' => $media->getYear(),
                'duration' => $media->getDuration(),
                'country' => $media->getCountry(),
                'score' => $media->getScore(),
                'synopsis' => $media->getSynopsis(),
                'cast' => $media->getCast(),
                'type' => $media->getType(),
                'poster' => $media->getPoster(),
                'director' => $media->getDirector()
            ];
        }

        return $this->json($dataSeries);
    }

    #[Route('/api/getMediaById', name: 'app_media_by_id', methods: ['get'])]
    public function getMediaById(Request $request, ManagerRegistry $doctrine)
    {
        $id = $request->query->get('id');
        $media = $doctrine
            ->getRepository(Media::class)
            ->find($id);


        if (!$media) {

            return $this->json(['error' => 'Media not found'], 404);
        }


        $dataMedia = [
            'id' => $media->getId(),
            'title' => $media->getTitle(),
            'gender' => $media->getGender(),
            'year' => $media->getYear(),
            'duration' => $media->getDuration(),
            'country' => $media->getCountry(),
            'score' => $media->getScore(),
            'synopsis' => $media->getSynopsis(),
            'cast' => $media->getCast(),
            'type' => $media->getType(),
            'poster' => $media->getPoster(),
            'director' => $media->getDirector()
        ];


        return $this->json($dataMedia);
    }

    #[Route('/api/getMediaByName', name: 'app_media_by_name', methods: ['POST',])]
    public function getMediaByName(Request $request, EntityManagerInterface $em)
    {
        $data = json_decode($request->getContent(), true);


        if (!$data['name']) {
            return new Response('El parámetro "name" es requerido.', Response::HTTP_BAD_REQUEST);
        }

        $name = $data['name'];

        $query = $em->createQuery(
            'SELECT media.title, media.director,media.cast ,media.synopsis
            FROM App\Entity\Media media
            WHERE media.title LIKE :name'
        )->setParameter('name', '%' . $name . '%');

        $media = $query->getResult();

        return $this->json($media);
    }
}
