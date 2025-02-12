import clsx from "clsx"
import { start } from "repl"

export interface WorkExp {
  date: string
  title: string
  frameworks: string
  start: Boolean 
}

export const EventBox: React.FC<WorkExp> = ({
  date,
  title,
  frameworks,
  start
}) => (
  <>
  <div className={clsx("left-[6px] w-4 h-4 bg-white rounded-full border-4 border-black relative", start === true ? "top-10" : "top-0")}></div>
  <div key={title + date} className="relative flex items-start gap-6 mb-8">
    {/* Event Content */}
    <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-md">
      <span className="text-sm text-gray-500">{date}</span>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{frameworks}</p>
    </div>

  </div>
  </>
)