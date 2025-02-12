import { ColorBox, EventBox, type WorkExp } from "@/components";
import { FaSchool } from "react-icons/fa";

interface PorfileWorked{
	title?: string
	events?: WorkExp[]
}

const ProfileEducation: React.FC<PorfileWorked> = ({
	title = "Education",
	events = [
		{ date: "2024-02-01", title: "Event 1", frameworks: "This is the first event." },
		{ date: "2024-02-05", title: "Event 2", frameworks: "This is the second event." },
		{ date: "2024-02-10", title: "Event 3", frameworks: "This is the third event." }
	]

}) =>{
	let es = events.slice(0,-1)
	let e = events[events.length-1]
	return (
	<>
		<ColorBox icon={FaSchool} id={title} />

		<div className="relative mt-4">
			{/* Vertical Line */}
			<div className="absolute top-0 left-[0.825em] -bottom-10 w-0.5 bg-[#888]"></div>
			{
			es.map((event, index) => (
				<div key={index} className="relative flex items-start gap-6">
					{/* Dot Indicator */}
					{/* <div className="left-[6px] w-4 h-4 bg-white rounded-full border-4 border-black relative "></div> */}

					{/* Event Content */}
					<EventBox date={event.date} title={event.title} frameworks={event.frameworks} start={false} />
				</div>
			))}
		</div>
		
		<div key={e.title + e.date} className="relative flex items-start gap-6 mb-8">
			<EventBox date={e.date} title={e.title} frameworks={e.frameworks} start={true} />
		</div>
  </>
	)
}

export default ProfileEducation