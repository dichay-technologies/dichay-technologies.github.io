import { useSelector } from "react-redux"
import { selectProjects } from "../store/projects"
import { ProjectsList } from "../components/ProjectsList"

function Projects() {

	const projects = useSelector(selectProjects)

	return (
		<div className="bg-background-400 px-12 flex flex-col gap-8 py-8 min-h-screen">
			<div className="w-full text-center text-white font-semibold text-4xl">Our Projects</div>
			<ProjectsList projects={projects} onClick={() => { }} />
		</div>
	)
}

export default Projects
