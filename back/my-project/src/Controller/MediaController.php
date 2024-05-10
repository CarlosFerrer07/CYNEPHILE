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

class MediaController extends AbstractController
{
    #[Route('api/getAllMedia', name: 'app_media', methods: ['get'])]
    public function media(ManagerRegistry $doctrine): JsonResponse
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
            ->findBy(['type' => 'Pelicula']);;

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
}
