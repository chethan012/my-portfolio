import backend from "../assets/images/backend1.png";
import general from "../assets/images/general.png";
import frontend from "../assets/images/react.png";

export type SkillType = {
  label: string;
  src: string;
  alt: string;
  skills: string[];
};

export const skillsData: SkillType[] = [
  {
    label: "Backend",
    src: backend,
    alt: "Backend skills gear icon",
    skills: ["Python", "Django", "RESTful APIs", "MySQL", "MongoDB"],
  },
  {
    label: "Frontend",
    src: frontend,
    alt: "Frontend skills atom icon",
    skills: ["JavaScript", "React", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    label: "General Skills",
    src: general,
    alt: "General skills icon",
    skills: ["Object-Oriented Programming", "Git", "GitHub"],
  },
];
