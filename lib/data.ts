import { Testimonial } from "@/lib/types";
import { AiOutlineInteraction } from "react-icons/ai";
import { MdQuiz, MdOndemandVideo } from "react-icons/md";
import { GoCommentDiscussion } from "react-icons/go";
import { GrResources, GrCertificate } from "react-icons/gr";

export const testimonialsData: Testimonial[] = [
  {
    name: "Sophie Chen",
    image:
      "https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    title: "Founder & CEO of CodeDaily",
    quote:
      "“As a coding school owner, our students have greatly benefited from the platform, enhancing their learning experience and practical skills.”",
  },
  {
    name: "Miguel Rodriguez",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
    title: "Mobile Developer Lead",
    quote:
      "“As a developer team head, our staff's skills have significantly improved with the platform, leading to better project outcomes and client satisfaction.”",
  },
  {
    name: "Tiffany Adams",
    image:
      "https://images.unsplash.com/photo-1611432579699-484f7990b127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
    title: "Coding Instructor",
    quote:
      "“Our coding school's success has been greatly attributed to the platform, empowering our students and staff to excel in their careers.”",
  },
];

export const featureData = [
  {
    icon: AiOutlineInteraction,
    name: "Interactive Tutorials",
    paragraph:
      "Our interactive tutorials guide you through an hands-on exercises, allowing you to practice using Git and GitHub in a real-world context.",
  },
  {
    icon: MdOndemandVideo,
    name: "Video Lessons",
    paragraph:
      "Video lessons presented by experienced instructors, covering different concepts of Git and GitHub in an engaging manner.",
  },
  {
    icon: MdQuiz,
    name: "Quizzes and Assessments",
    paragraph:
      "Quizzes and assessments at the end of each module to test student's understanding and reinforce learning.",
  },
  {
    icon: GrResources,
    name: "Documentation and Resources",
    paragraph:
      "Comprehensive documentation and supplementary resources, such as cheat sheets, guides, and reference materials, for you to refer back to.",
  },
  {
    icon: GoCommentDiscussion,
    name: "Discussion Forums and Q&A",
    paragraph:
      "A place where you can ask questions, share tips, and interact with instructors and peers.",
  },
  {
    icon: GrCertificate,
    name: "Certificates of Completion",
    paragraph:
      "Get certificates of completion after finishing the training program, which can showcase on your resumes or LinkedIn profiles.",
  },
];
