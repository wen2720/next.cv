import { LiaLanguageSolid } from "react-icons/lia";
import { LanguageSkills } from "@/types/ProfileTypes";
import ColorBox from "@/components/color_box";
import React from "react";

const skills_exp: LanguageSkills = [
	{
		icon: LiaLanguageSolid,
		id: "Language"
	},
	[
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
]

const ProfileLanguage: React.FC = () => (
	<>
		<ColorBox icon={skills_exp[0].icon} id={skills_exp[0].id}></ColorBox>

		<div className="grid grid-cols-2 gap-4 p-4">
			{skills_exp[1].map((e,i) =>(
				<React.Fragment key={i}>
					<p>{e.language}</p>
					<p>{e.level}</p>
				</React.Fragment>
			))}
		</div>

	</> 
)

export default ProfileLanguage;
