import { ProjectsListProps } from "../types/props";
import { ProjectTile } from "./ProjectTile";

export function ProjectsList({ projects, onClick, short }: ProjectsListProps) {
	return <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-none">
		{projects.filter(p => p.showOnMain || !short).map(p => (
			ProjectTile({ ...p, onClick })
		))}
	</div>;
}
