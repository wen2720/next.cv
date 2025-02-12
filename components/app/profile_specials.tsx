import { FaBook } from "react-icons/fa6";
import { IconText } from "@/types/ProfileTypes";
import ColorBox from "@/components/color_box";

interface SpecialSkills {
	title?: IconText,
	skills?: string[]
}

const ProfileSpecials: React.FC<SpecialSkills> = ({
	title = {
		icon: FaBook,
		id: "Specialization"
	},
	skills = ["MLOps", "HPC", "Android App", "iOS App", "Micro-service", "Front-end", "Back-end", "CI/CD", "Data Security and Privacy", "Communication protocols", "Data Structure", "Functional Programming", "Context-free grammar", "OO programming"]	
}) => (
	<>
		<ColorBox icon={title.icon} id={title.id}></ColorBox>

		<div className="p-4 item-center">
			{skills.map((e,i) =>(
				<p key={i} className="mt-2 text-sm text-center">{e}</p> 
			))}
		</div>
	</> 
)

export default ProfileSpecials;
