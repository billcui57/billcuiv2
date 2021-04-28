import ConsoleLine from "../../ConsoleLine/ConsoleLine";
import TDSBLogo from '../../../assets/tdsbLogo.png';

function Bereavements() {





  return (
    <div className="font-console text-center px-4 py-4">

      <ConsoleLine className="mb-2">
        <div className="flex justify-center items-center">
          <img src={TDSBLogo} className="w-16"></img>
          <h1 className="text-4xl text-green-400 p-2 ">Bereavement DotNetNuke Module</h1>
          <img src={TDSBLogo} className="w-16"></img>
        </div>
      </ConsoleLine>

      <ConsoleLine className = "flex justify-center items-center space-x-4 mb-2">
        <p className="p-1 text-yellow-400">Angular</p>
        <p className="p-1 text-yellow-400">ASP.NET</p>
        <p className="p-1 text-yellow-400">DotNetNuke</p>
        <p className="p-1 text-yellow-400">SQLSever</p>
      </ConsoleLine>
      <ConsoleLine className = "mb-4 "><p>A fullstack employment bereavement DotNetNuke CMS module for the Toronto District School Board </p></ConsoleLine>

      

    </div>
  );
}

export default Bereavements;
