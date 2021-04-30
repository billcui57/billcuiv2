import ConsoleLine from "../ConsoleLine/ConsoleLine"


interface Project {

  usedTech: any[],
  description: any,
  title: any,
  image?: any,
  logo?: any,
  gitHubRepo?: any,
  projectLink?: any,

}



function Project({ logo, usedTech, gitHubRepo, projectLink, description, title, image }: Project) {





  return (
    <div className="font-console text-center px-4 mt-4">

      <ConsoleLine className="mb-2">
        <div className="flex justify-center items-center">
          <img src={logo} className="w-16"></img>
          <h1 className="text-4xl text-red-400 p-2 ">{title}</h1>
          <img src={logo} className="w-16"></img>
        </div>
      </ConsoleLine>

      <ConsoleLine className="flex flex-wrap justify-center items-center space-x-4 mb-2 ">
        {usedTech.map((tech) => <p className="p-1 text-yellow-400">{tech}</p>)}
      </ConsoleLine>
      <ConsoleLine className="mb-4 "><p>{description}</p></ConsoleLine>

      {projectLink ?
        <ConsoleLine className="flex justify-center items-center space-x-4 mb-4">
          <button className="bg-gray-400 rounded-full p-2 mx-2 hover:bg-pink-600 hover:text-white cursor-pointer duration-300 text-black text-base"><a href={projectLink}>Check it out</a></button>
        </ConsoleLine>
        : undefined}

      {image ?
        <ConsoleLine>
          <div className="flex justify-center items-center"><img src={image}></img></div>
        </ConsoleLine>
        : undefined}






    </div>
  );
}

export default Project;
