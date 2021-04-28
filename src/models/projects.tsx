import Bereavements from "../components/Projects/Bereavement/Bereavement";
import MathSocLib from "../components/Projects/MathSocLib/MathSocLib";
import ToTheMoon from "../components/Projects/ToTheMoon/ToTheMoon";
import { File } from "./directory";




let mathsoclib: File = {
  name: "MathSocLibrary",
  display: <MathSocLib></MathSocLib>
}

let bereavement: File = {
  name: "BereavementDNN",
  display: <Bereavements></Bereavements>
}

let toTheMoon: File = {
  name: "ToTheMoon",
  display: <ToTheMoon></ToTheMoon>
}

export {mathsoclib, bereavement, toTheMoon};