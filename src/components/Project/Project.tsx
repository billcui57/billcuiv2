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
    <div className="font-console text-center px-4 mt-2">

      <ConsoleLine className="">
        <div className="flex justify-center items-center">
          <img src={logo} className="w-10"></img>
          <h1 className="text-lg text-red-400 p-2 ">{title}</h1>
          <img src={logo} className="w-10"></img>
        </div>
      </ConsoleLine>

      <ConsoleLine className="flex flex-wrap justify-center items-center space-x-4 mb-2 ">
        {usedTech.map((tech) => <p className="p-1 text-yellow-400">{tech}</p>)}
      </ConsoleLine>
      <ConsoleLine className="mb-4 "><p>{description}</p></ConsoleLine>

      {projectLink ?
        <ConsoleLine className="flex justify-center items-center space-x-4 mb-6">
          <button className="cursor-pointer  text-base  underline hover:text-gray-400"><a href={projectLink}>Check it out</a></button>
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
