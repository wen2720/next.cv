import { LiaLanguageSolid } from "react-icons/lia";
import { IconText, } from "@/types/ProfileTypes";
import ColorBox from "@/components/color_box";
import React from "react";


interface LanguageSkills {
	title?:  IconText,
	languages?: {
		language: string
		level: string
	}[]
}

const ProfileLanguage: React.FC<LanguageSkills> = ({
	title = {
		icon: LiaLanguageSolid,
		id: "Language"
	},
	languages = [
		{
			language: "Chinese",
			level: "Native"
		},
		{
			language: "Korean",
			level: "Native"
		},
		{
			language: "English",
			level: "Professional"
		},
		{
			language: "Danish",
			level: "Elementary"
		}
	
	]
}) => (
	<>
		<ColorBox icon={title.icon} id={title.id}></ColorBox>

		<div className="grid grid-cols-2 gap-4 p-4">
			{languages.map((e,i) =>(
				<React.Fragment key={i}>
					<p>{e.language}</p>
					<p>{e.level}</p>
				</React.Fragment>
			))}
		</div>

	</> 
)

export default ProfileLanguage;
