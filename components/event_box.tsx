import clsx from "clsx"

interface WorkProject {
  name: string
  frameworks: string
}
export interface WorkExp {
  date: string
  title: string
  projects: WorkProject[]
  start: boolean 
}

export const EventBox: React.FC<WorkExp> = ({
  date,
  title,
  projects,
  start
}) => (
  <>
    {/* Time Point */}
    <div className={clsx("-left-[6px] w-4 h-4 bg-white rounded-full border-4 border-black absolute", start ? "top-10" : "top-0")}></div>
    
      
    {/* Event Content */}
    <div className="ml-6 mt-2 bg-gray-100 p-4 rounded-lg shadow-md text-black">
      <span className="text-sm">{date}</span>
      <h3 className="text-lg font-bold">{title}</h3>        
      {projects?.map((e, i) =>(
        <>
        <p key={i+e.name}>{e.name}</p>
        <p key={i+e.frameworks}>{e.frameworks}</p>
        </>
      ))}
    </div>
  </>
)