import DichayImage from "../assets/dichay.svg"
import { useSelector } from "react-redux"
import { selectProjects } from "../store/projects"
import { ProjectsList } from "../components/ProjectsList"
import OpenLink from "../util/openLink"
import { Button } from "../components/Button"


function Root() {
	let projects = useSelector(selectProjects)
	let prices: {
		name: string,
		price: string,
	}[] = [{
		name: "Chat Bot",
		price: "$50+"
	}, {
		name: "Design Layout",
		price: "$200+"
	}, {
		name: "Front-End",
		price: "$200+"
	}, {
		name: "Back-End",
		price: "$500+"
	}]

	return (
		<>
			<div className="w-full h-min bg-[url('/dichay-tech-background.jpeg')] bg-center bg-scroll bg-cover p-16 flex flex-row items-center justify-evenly">
				<div className="flex flex-col">
					<span className="text-white font-bold text-6xl">DiChay Technologies</span>
					<span className="text-gray-300 font-medium text-2xl">Your website is our problem. Our code is yours.</span>
				</div>
				<img src={DichayImage} className="h-96 w-96" />
			</div>
			<div className="w-full h-min bg-background-500 p-12">
				<div className="text-white font-bold text-4xl mb-8 w-full text-center">Our projects</div>
				<ProjectsList projects={projects} onClick={OpenLink} short={true} />
			</div>
			<div className="w-full h-min bg-background-400 p-12">
				<div className="text-white font-bold text-4xl mb-8 w-full text-center">Price</div>
				<div className="grid grid-cols-4 gap-4"> {prices.map(p =>
					<div className="bg-background-500 p-4 rounded-xl flex flex-col items-center">
						<span className="font-bold text-white text-2xl">{p.name}</span>
						<span className="font-normal text-gray-300 text-lg">{p.price}</span>
					</div>
				)}
				</div>
				<div className="font-bold text-white text-2xl w-full text-center my-8">Something unusual? Contact us and we'll make a deal!</div>
				<div className="flex flex-row justify-center w-full">
					<Button text="Contact us" onClick={() => {}}/>
				</div>
			</div>
			{/* <div className="w-full h-min bg-background-500">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tellus urna. Mauris vehicula bibendum feugiat. Ut quis egestas massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at.
			</div>
			<div className="w-full h-min bg-background-500">
				<span>DiChay Technologies</span>
			</div> */}
		</>
	)
}

export default Root
