import { useSelector } from "react-redux"
import { selectProjects } from "../store/projects"
import { ProjectsList } from "../components/ProjectsList"

function Projects() {
	
	let projects = useSelector(selectProjects)
	
	return (
		<ProjectsList projects={projects} onClick={() => {}}/>
	)
}

export default Projects
