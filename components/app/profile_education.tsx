import { ColorBox, EventBox, type WorkExp } from "@/components";
import { FaSchool } from "react-icons/fa";

interface PorfileWorked{
	title?: string
	events?: WorkExp[]
}


const ProfileEducation: React.FC<PorfileWorked> = ({
	title = "Educations",
	events = [
		{ 
			date: "September 2024 ~ January 2025 at DTU", 
			title: "Single Course", 
			projects:
			[
				{
					courses: "Deep learning and MLOps",
					GPA: "10",
					models: "FFNN, CNN, GNN, MPNN and PaiNN",
					frameworks: "Python, Pytorch, Docker, HPC and Google Cloud"
				},
			]
		},
		{ 
			date: "September 2018 ~ December 2021 at DTU", 
			title: "Master of Science in Computer Science Engineering", 
			projects:
			[
				{
					GPA: "7.12",
					thesis: {
						id: "Formal modeling and analysis of an eHealth protocol",
						link: "https://github.com/wen0727/Job-Application/blob/main/Master-Thesis-Wen.pdf"
					},
					frameworks: "(\u03B1,\u03B2)-privacy, context-free grammar and first-order logic"
				},
			]
		},
		{ 
			date: "September 2013 ~ June 2016 at DTU", 
			title: "Bachelor Eletrical Engineering ", 
			projects:
			[
				{
					GPA: "7.82",
					project: {
						id: "Line following robot",
						link: "https://www.youtube.com/watch?v=s0B8l055Zj0"
					},
					frameworks: "embedded C, PCB and Linear Control Theory"
				},
			]
		},
	]
}) =>{
	if (events === null) {
		return (
			<></>
		)
	} else {
		const show_events = events.length > 1
		const first_event = events[events.length-1]
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
						events.slice(0,-1).map((event) => (
							<div key={event.date} className="relative flex items-start gap-6">
								<EventBox date={event.date} title={event.title} start={false} projects={event.projects} />
							</div>
						))
					}
				</div>	
					
				<div key={events[events.length-1].date} className="relative flex items-start gap-6 mb-8">
					<EventBox date={first_event.date} title={first_event.title} projects={first_event.projects} start={true} />
				</div>
			</>
		)
	}

}

export default ProfileEducation