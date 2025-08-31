import aurora from "../assets/projects/aurora/main.png";
import gentile from "../assets/projects/gentile/main1.jpg";
import lego from "../assets/projects/lego-homage/main1.png";
import linesc from "../assets/projects/linesc/main1.png";
import listshop from "../assets/projects/list-shop/main.png";
import pathfinding from "../assets/projects/pathfinding/main.png";
import portfolio from "../assets/projects/portfolio/main2.png";
import simpsons from "../assets/projects/simpsons-quotes/main1.png";
import tictactoe from "../assets/projects/tictactoe/main1.png";
import todo from "../assets/projects/todo-app/main.png";
import weather from "../assets/projects/weather-app/main1.png";
import w3l from "../assets/projects/what3letters/main1.png";

export type ProjectType = {
  id: number;
  title: string;
  about: string;
  description: string;
  thumbnail: string;
  tech: string[];
  github: string;
  link: string;
  filter: string[];
  type: string;
};

export const projects: ProjectType[] = [
  {
    id: 0,
    title: "TicTacToe Game",
    about: "Interactive TicTacToe game built with vanilla JavaScript",
    description:
      "A classic TicTacToe game featuring clean UI, game logic, and win detection. Built with HTML, CSS, and JavaScript, deployed on Vercel for seamless gameplay experience.",
    thumbnail: tictactoe,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chethan012/tic-tac-toe",
    link: "https://tic-tac-teo-fawn.vercel.app",
    filter: ["All", "Web Development", "JavaScript"],
    type: "Web Development",
  },
  {
    id: 1,
    title: "Bike Rental System",
    about: "Full-stack bike rental application with Django backend",
    description:
      "A comprehensive bike rental management system built with Python Django backend and HTML templates. Features user authentication, bike inventory management, rental booking system, and admin dashboard for managing rentals and customers.",
    thumbnail: "https://shop99india.com/wp-content/uploads/2024/09/Bike-rentals-in-Silvassa.png",
    tech: ["Python", "Django", "HTML", "CSS", "SQLite"],
    github: "https://github.com/chethan012/tic-tac-toe",
    link: "",
    filter: ["All", "Web Development", "Full Stack", "Python"],
    type: "Full Stack Development",
  },
];
