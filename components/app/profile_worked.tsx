import ColorBox from "@/components/color_box";
import { IoBagRemoveSharp } from "react-icons/io5";
const events = [
	{ date: "2024-02-01", title: "Event 1", description: "This is the first event." },
	{ date: "2024-02-05", title: "Event 2", description: "This is the second event." },
	{ date: "2024-02-10", title: "Event 3", description: "This is the third event." }
];

const exceptLast = events.slice(0,-1)
const last = events[events.length-1]
interface PorfileWorked{
	title?: string
	events?: {
		date?: string,
		position?: string
		project?: string
		framework?: string[]
	}

}

const ProfileWorked: React.FC<PorfileWorked> = ({

}) =>(
	<>
		<ColorBox icon={IoBagRemoveSharp} id={"Working Experiences"} ></ColorBox>
		<div className="relative mt-4">
			{/* Vertical Line */}
			<div className="absolute left-[0.825em] top-0 w-0.5 h-full bg-[#888]"></div>
			{events.map((event, index) => (
				<div key={index} className="relative flex items-start gap-6 mb-8">
					{/* Dot Indicator */}
					<div className="w-4 h-4 bg-white rounded-full border-4 border-black relative left-[6px]"></div>

					{/* Event Content */}
					<div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-md">
						<span className="text-sm text-gray-500">{event.date}</span>
						<h3 className="text-lg font-bold">{event.title}</h3>
						<p className="text-gray-600">{event.description}</p>
					</div>
				</div>
			))}
		</div>
		
		<div key={last.description} className="relative flex items-start gap-6 mb-8">
			{/* Dot Indicator */}
			<div className="w-4 h-4 bg-white rounded-full border-4 border-black relative left-[6px]"></div>

			{/* Event Content */}
			<div className="mt- bg-gray-100 p-4 rounded-lg shadow-md">
				<span className="text-sm text-gray-500">{last.date}</span>
				<h3 className="text-lg font-bold">{last.title}</h3>
				<p className="text-gray-600">{last.description}</p>
			</div>
		</div>
  </>
)
    
   

export default ProfileWorked