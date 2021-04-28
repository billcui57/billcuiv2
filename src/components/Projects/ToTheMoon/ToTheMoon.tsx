import ConsoleLine from "../../ConsoleLine/ConsoleLine";

function ToTheMoon() {





  return (
    <div className="font-console text-center px-4 py-4">

      <ConsoleLine className="mb-2">
        <div className="flex justify-center items-center">
          
          <h1 className="text-4xl text-red-400 p-2 ">🚀 To the Moon 🚀</h1>

        </div>
      </ConsoleLine>

      <ConsoleLine className="flex justify-center items-center space-x-4 mb-2">
        <p className="p-1 text-yellow-400">React</p>
        <p className="p-1 text-yellow-400">Node.JS</p>
        <p className="p-1 text-yellow-400">Express.JS</p>
        <p className="p-1 text-yellow-400">DropBase</p>
        <p className="p-1 text-yellow-400">Docker</p>
        <p className="p-1 text-yellow-400">AWS</p>
        <p className="p-1 text-yellow-400">RedditAPI</p>
      </ConsoleLine>
      <ConsoleLine className="mb-4 "><p>A stock market sentiment analysis tool, powered by DropBase and r/wallstreetbets</p></ConsoleLine>

      

   





    </div>
  );
}

export default ToTheMoon;
