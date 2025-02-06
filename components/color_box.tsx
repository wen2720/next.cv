import { IconText } from "@/data/Contacts";
import IconLabel from "./icon_label";

const ColorBox: React.FC<IconText> = (
	{
		icon:icon,
		id:id
	}
) => (
	<div>
		<div className="bg-zinc-800 mt-4 p-4 rounded-md shadow-lg relative overflow-hidden">
			{/* Fading top edge */}
			<div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-white via-transparent to-transparent"></div>

			{/* Fading bottom edge */}
			<div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-white via-transparent to-transparent"></div>

			{/* bar */}
			<IconLabel 
					theme_font={{bold: "font-semibold"}} 
					icon_label={{
						icon: icon,
						id: id
					}}
				/>
		</div>
	</div>
)

export default ColorBox;