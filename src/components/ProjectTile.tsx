import { Button } from "./Button";

export function ProjectTile({name, url, image, description, onClick}: ProjectTileProps) {
	return <div className="flex flex-row bg-background-600 p-4 items-center min-h-40 cursor-pointer select-none gap-2 rounded-xl">
		<img src={`/projects/images/${image}`} className="w-36 rounded-xl" />
		<div className="flex flex-col items-stretch justify-between h-full">
			<div className="flex flex-col items-center">
				<span className="font-bold text-white text-xl">{name}</span>
				<span className="text-white text-center text-base">{description}</span>
			</div>
			<div className="flex flex-row justify-center">
				<Button onClick={() => {onClick(url)}} text="Open Project" />
			</div>
		</div>
	</div>
}
