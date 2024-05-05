<?php

namespace App\Controller;

use App\Entity\Comentarios;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class ComentariosController extends AbstractController
{
    #[Route('/comentarios', name: 'app_comentarios', methods: ["POST"])]
    public function addComments(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $request->request->replace($data);

        $comment = new Comentarios();

        if ($request->isMethod('POST')) {
            $comment->setGmail($request->get('gmail'));
            $comment->setIdMedia($request->get('idMedia'));
            $comment->setComentario($request->get('comentario'));

            $em->persist($comment);
            $em->flush();

            return new JsonResponse(['message' => 'Comentario insertado con éxito'], Response::HTTP_OK);
        } else {
            return new JsonResponse(['message' => 'Fallo al insertar'], Response::HTTP_OK);
        }
    }
}
