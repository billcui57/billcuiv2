import { File } from "./directory";
import Project from "../components/Project/Project"

import MathSocLogo from '../assets/mathSocLogo.png';
import MathSocArch from '../assets/mathSocLibArch.png'




let mathsoclib: File = {
  name: "MathSocLibrary",
  display: <Project 
    title = "Mathsoc Textbook Library"
    description = "A fullstack textbook library and point of sale system designed and made for the University of Waterloo's Mathematics Society"
    usedTech = {["Angular", "Node.JS", "Express.JS", "MySQL", "Docker", "Linux"]}
    logo = {MathSocLogo}
    image = {MathSocArch}
    projectLink = "https://library.mathsoc.uwaterloo.ca/"
  ></Project>
}

let bereavement: File = {
  name: "BereavementDNN",
  display: <Project 
  title = "Bereavement DotNetNuke Module"
  description = "A fullstack employment bereavement DotNetNuke CMS module for the Toronto District School Board"
  usedTech = {["Angular", "ASP.NET", "DotNetNuke", "SQLServer"]}
></Project>
}

let toTheMoon: File = {
  name: "ToTheMoon",
  display: <Project 
  title = "🚀 To the Moon 🚀"
  description = "A stock market sentiment analysis tool, powered by DropBase and r/wallstreetbets"
  usedTech = {["React", "Flask", "DropBase", "Docker", "AWS", "RedditAPI"]}
></Project>
}

export {mathsoclib, bereavement, toTheMoon};