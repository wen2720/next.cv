import { ColorBox, EventBox, type WorkExp } from "@/components";
import { FaSchool } from "react-icons/fa";

interface PorfileWorked{
	title?: string
	events?: WorkExp[]
}


const ProfileEducation: React.FC<PorfileWorked> = ({
	title = "Educations",
	events = [
		{ date: "October-2022 ~ July-2024 in Sinolab ApS", title: "Full-stack developer", 
			projects:
			[
				{
					name: "dangdi web app",
					frameworks: "Vue.js, Docker, Sails.js, MySql, AWS"
				},
				{
					name: "dangdi mobile app",
					frameworks: "Flutter, FlutterFlow, Docker, App store Connect, Google Play Console"
				},
				//"Flutter", "FlutterFlow", "Docker", "App store Connect", "Google Play Console"
				// "Flutter FlutterFlow"
			]
		},
		{ date: "October-2022 ~ October-2022 in Sinolab ApS", title: "Full-stack developer", 
			projects: 
			[
				{
					name: "dangdi web app",
					frameworks: "Vue.js, Docker, Sails.js, MySql, AWS"
				},
				{
					name: "dangdi mobile app",
					frameworks: "Flutter, FlutterFlow, Docker, App store Connect, Google Play Console"
				},
				//"Flutter", "FlutterFlow", "Docker", "App store Connect", "Google Play Console"
			]
			// "Flutter FlutterFlow"
		},
	]
}) =>{
	if (events === null) {
		return (
			<></>
		)
	} else {
		let show_events = events.length > 1
		let first_event = events[events.length-1]
		return (
			<>
				<ColorBox icon={FaSchool} id={title} />
	
				<div className="relative mt-4">
					{/* Vertical Line */}
					{
						show_events &&
						<div className="absolute top-0 -bottom-10 w-0.5 bg-[#888]"></div>
						
					}
					
					{
						show_events &&
						events.slice(0,-1).map((event, index) => (
							<div key={"working experiece" + index} className="relative flex items-start gap-6">
								<EventBox date={event.date} title={event.title} start={false} projects={event.projects} />
							</div>
						))
					}
				</div>	
					
				<div key={events[events.length-1].title + events[events.length-1].date} className="relative flex items-start gap-6 mb-8">
					<EventBox date={first_event.date} title={first_event.title} projects={first_event.projects} start={true} />
				</div>
			</>
		)
	}

}

export default ProfileEducation