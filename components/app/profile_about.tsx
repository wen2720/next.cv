interface PorfileAbout {
	title?: string
	content?: string
}
const ProfileAbout: React.FC<PorfileAbout> = ({
	title = "About",
	content = "I\'m looking for a full stack developer position. I've worked as an associated full stack developer for web and mobile applications. I graduated from DTU with MSc in Computer Science engineering."
}) => (
	<>
		<p className="font-bold">{title}</p>
		<p>{content}</p>
	</>
)
export default ProfileAbout;