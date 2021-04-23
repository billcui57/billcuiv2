


export interface File {
  name: string;
  url: string;
}




export class Directory {

  name: string;
  parent?: Directory;
  subdirectories?: Directory[];
  files?: File[];

  constructor(name: string, parent?: Directory, subdirectories?: Directory[], files?: File[]) {
    this.name = name;
    this.parent = parent;
    this.subdirectories = subdirectories;
    this.files = files;
  }

}






export function getRootDir() {
  let rootDir = new Directory(
    ""
  )


  let projDir = new Directory(
    "projects",
    rootDir,
    
  )

  let hackathons = new Directory(
    "hackathons",
    rootDir,
  )

  let internships = new Directory(
    "internships",
    rootDir,
  )

  rootDir.subdirectories = [
    projDir,
    hackathons,
    internships
  ]

  return rootDir


}

