import { IconText, Contacts } from "../../data/Contacts";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from "react-icons/io";

import ColorBox from "../color_box";
import IconLabel from "../icon_label";

const contact_exp: Contacts = [
	{
		icon: IoMdInformationCircleOutline, // React component for LinkedIn icon
		id: "Contact"
	},
	[
		{
			icon: FaLinkedin, // React component for LinkedIn icon
			id: "linkedin.com/in/profile-wenhao-0727/"
		},
		{
			icon: FaGithub, // React component for GitHub icon
			id: "github.com/wen2720"
		},
		{
			icon: FaEnvelope, // React component for Email icon
			id: "wenhao2720@gmail.com"
		},
		{
			icon: FaPhone, // React component for Phone icon
			id: "53776999"
		}
	]
];

export const ProfileContact: React.FC = () => (
	<div>
		{/* Bar */}
		<ColorBox icon={contact_exp[0].icon} id={contact_exp[0].id}></ColorBox>

		<div className="p-4">
			{contact_exp[1].map((e,i) =>(
				// <IconLabel icon={ht.icon} id={ht.id} />
				<IconLabel 
					key={i}
					theme_font={{fontsize:"text-sm"}} 
					icon_label={{
						icon: e.icon,
						id: e.id
					}}
				/>
			))}
		</div>
	</div> 
)
