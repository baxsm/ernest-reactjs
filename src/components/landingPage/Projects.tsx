import { projects } from "../../constants/data";

type Data = {
  id: string;
  name: string;
  type: string;
  hero: string;
  year: string;
};

const ProjectCard = ({ data }: { data: Data }) => {
  return (
    <div className="relative overflow-hidden h-[52vw] w-[100%] rounded-md">
      <img
        src={data.hero}
        alt=""
        className="h-full w-full object-cover block relative z-10 scale-[1.05] hover:scale-[1] duration-500 cursor-pointer"
      />
      <p className="absolute top-8 left-8 text-sm text-white z-20">
        {data.year}
      </p>
      <div className="absolute bottom-8 left-8 z-20 flex flex-col gap-6">
        <p className="text-white text-sm font-semibold">{data.type}</p>
        <h5 className="text-white text-4xl font-semibold">{data.name}</h5>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div className="flex flex-col justify-center place-items-center px-16 bg-white py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[8rem]">
        <ProjectCard data={projects[0]} />
        <ProjectCard data={projects[1]} />
      </div>
    </div>
  );
}

export default Projects;
