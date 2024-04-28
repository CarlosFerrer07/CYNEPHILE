<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class SecurityController extends AbstractController
{
    #[Route('/registro', name: 'user_registro', methods: ["POST"])]
    public function setUser(Request $request, EntityManagerInterface $em, UserPasswordHasherInterface $passwordHasher): JsonResponse
    {
        // transformamos

        $data = json_decode($request->getContent(), true);

        $request->request->replace($data);

        $user = new User();

        if ($request->isMethod('POST')) {
            $user->setEmail($request->get('username'));
            $user->setPassword($passwordHasher->hashPassword($user, $request->get('password')));

            $em->persist($user);
            $em->flush();

            return new JsonResponse(['message' => 'Usuario creado con éxito'], Response::HTTP_OK);
        }
    }
}
