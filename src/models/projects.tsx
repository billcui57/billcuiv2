import Bereavements from "../components/Projects/Bereavement/Bereavement";
import MathSocLib from "../components/Projects/MathSocLib/MathSocLib";
import { File } from "./directory";




let mathsoclib: File = {
  name: "MathSocLibrary",
  display: <MathSocLib></MathSocLib>
}

let bereavement: File = {
  name: "Bereavement",
  display: <Bereavements></Bereavements>
}

export {mathsoclib, bereavement};