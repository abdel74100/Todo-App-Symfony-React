<?php

namespace App\Controller;

use App\Entity\Tasks;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


class HomeController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function index()
    {
        $repository = $this->getDoctrine()->getRepository(Tasks::class);
        $tasks = $repository->findAll();

        return $this->render('pages/index.html.twig', [
            'controller_name' => 'HomeController',
            'tasks' => $tasks
        ]);
    }
}
