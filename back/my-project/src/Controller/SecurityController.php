<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class SecurityController extends AbstractController
{
    #[Route('/registro', name: 'user_registro', methods: ["POST"])]
    public function index(Request $request, EntityManagerInterface $em, UserPasswordHasherInterface $passwordHasher): Response
    {
        // transformamos

        $data = json_decode($request->getContent(), true);

        $request->request->replace($data);

        $user = new User();

        if ($request->isMethod('POST')) {
            $user->setEmail($request->get('email'));
            $user->setPassword($passwordHasher->hashPassword($user, $request->get('password')));

            $em->persist($user);
            $em->flush();

            return new Response(
                'Usuario creado con exito',
                response::HTTP_OK
            );
        }
    }
}
