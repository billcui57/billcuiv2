import ConsoleLine from "../../ConsoleLine/ConsoleLine";
import MathSocLogo from '../../../assets/mathSocLogo.png';

function Bereavements() {





  return (
    <div className="font-console text-center px-4">

      <ConsoleLine className="mb-2">
        <div className="flex justify-center items-center">
          <img src={MathSocLogo} className="w-16"></img>
          <h1 className="text-4xl text-red-400 p-2 ">Bereavement DotNetNuke Module</h1>
          <img src={MathSocLogo} className="w-16"></img>
        </div>
      </ConsoleLine>

      <ConsoleLine className = "flex justify-center items-center space-x-4 mb-2">
        <p className="p-1 text-yellow-400">Angular</p>
        <p className="p-1 text-yellow-400">Node.JS</p>
        <p className="p-1 text-yellow-400">Express.JS</p>
        <p className="p-1 text-yellow-400">MySQL</p>
        <p className="p-1 text-yellow-400">Docker</p>
        <p className="p-1 text-yellow-400">Linux</p>
      </ConsoleLine>
      <ConsoleLine className = "mb-2 "><p>A fullstack textbook library and point of sale system designed and made for the University of Waterloo's Mathematics Society</p></ConsoleLine>

      <ConsoleLine className = "flex justify-center items-center space-x-4 mb-2">
        <button className = "bg-gray-400 rounded-full p-2 mx-2 hover:bg-pink-600 hover:text-white cursor-pointer duration-300 text-black text-base"><a href = "https://library.mathsoc.uwaterloo.ca/">Check it out</a></button>
      </ConsoleLine>
      

    </div>
  );
}

export default Bereavements;
