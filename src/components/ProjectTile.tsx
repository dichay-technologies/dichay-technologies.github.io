import { ProjectTileProps } from "../types/props";
import { Button } from "./Button";

export function ProjectTile({name, url, image, description, onClick}: ProjectTileProps) {
	return <div className="flex flex-row bg-background-500 p-4 items-center min-h-32 md:min-h-40 cursor-pointer select-none gap-2 rounded-xl transition-transform duration-100 scale-100 hover:scale-105 hover:md:scale-100" onClick={() => window.innerWidth < 768 && onClick(url)}>
		<img src={`/projects/images/${image}`} className="w-28 md:w-36 rounded-xl" />
		<div className="flex flex-col items-stretch justify-between h-full">
			<div className="flex flex-col items-center">
				<span className="font-bold text-white text-xl text-center">{name}</span>
				<span className="text-white text-center text-sm md:text-base">{description}</span>
			</div>
			<div className="hidden md:flex flex-row justify-center">
				<Button onClick={() => {onClick(url)}} text="Open Project" />
			</div>
		</div>
	</div>
}
