import DichayImage from "../assets/dichay.svg"
import { useSelector } from "react-redux"
import { selectProjects } from "../store/projects"
import { ProjectsList } from "../components/ProjectsList"
import OpenLink from "../util/openLink"
import { useEffect, useState } from "react"
import { ContextWindow } from "../components/ContextWindow"
import { Button } from "../components/Button"


function Root() {
	const projects = useSelector(selectProjects)
	const [contextShown, setContextShown] = useState(false)
	const [tagLine, setTagLine] = useState<string>("")
	const [prices, setPrices] = useState<{name: string,price: string}[]>([])
	const [contacts, setContacts] = useState<{name: string,value: string,icon: string,actionArgument?: string,type: "copy" | "open"}[]>([])
	useEffect(() => {
		fetch("/tagline.txt").then(v => v.text()).then(v => setTagLine(v))
		fetch("/prices.json").then(v => v.text()).then(v => setPrices(JSON.parse(v).value))
		fetch("/contacts.json").then(v => v.text()).then(v => setContacts(JSON.parse(v).value))
	})

	function switchContext(state: boolean) {
		setContextShown(state)
	}

	function openContact(value: string, action: "open" | "copy") {
		switch (action) {
			case "open":
				window.open(value, "_blank")
				break
			case "copy":
				navigator.clipboard.writeText(value)
				break
		}
	}

	return (
		<div className="min-h-screen">
			<div className="w-full h-min bg-[url('/dichay-tech-background.jpeg')] bg-center bg-scroll bg-cover px-8 p-16 md:p-16 flex flex-col md:flex-row items-center justify-evenly">
				<div className="flex flex-col">
					<span className="text-white font-bold text-5xl md:text-6xl text-center md:text-start">DiChay Technologies</span>
					<span className="text-gray-300 font-medium text-xl md:text-2xl text-center md:text-start mt-2 md:mt-0">{tagLine}</span>
				</div>
				<img src={DichayImage} className="h-96 w-96" />
			</div>
			<div className="w-full h-min bg-background-600 p-8 md:p-12">
				<div className="text-white font-bold text-4xl mb-6 md:mb-8 w-full text-center">Our projects</div>
				<ProjectsList projects={projects} onClick={OpenLink} short={true} />
			</div>
			<div className="w-full h-min bg-background-600 p-8 md:p-12">
				<div className="text-white font-bold text-4xl mb-8 w-full text-center">Price</div>
				<div className="grid grid-cols-1 md:grid-cols-5 gap-4"> {prices.map(p =>
					<div className="bg-background-500 p-4 rounded-xl flex flex-col items-center transition-transform duration-100 scale-100 hover:scale-105 cursor-pointer" onClick={(e) => { e.stopPropagation(); switchContext(true) }}>
						<span className="font-bold text-white text-2xl">{p.name}</span>
						<span className="font-normal text-gray-300 text-lg">{p.price}</span>
					</div>
				)}
				</div>
			</div>
			<div className="w-full h-min bg-background-600 p-12" />
			<ContextWindow shown={contextShown} onClose={() => { switchContext(false) }}>
				<div className="flex flex-col">
					<div className="text-white font-bold text-4xl mb-8 w-full text-center">Contact us!</div>
					<div className="flex flex-col gap-2">
						{contacts.map((v) => <div className="py-2 px-4 rounded-xl bg-background-500 flex justify-between gap-4 md:gap-2 items-center cursor-pointer md:cursor-default" onClick={() => window.innerWidth < 768 && openContact(v.actionArgument || v.value, v.type)}>
							<div className="flex flex-row items-center h-max gap-1 text-white">
								<span className="font-bold hidden md:inline">{v.name}:</span>
								<span className="font-bold md:hidden"><i className={`${v.icon} text-xl`}></i></span>
								<span>{v.value}</span>
							</div>
							<Button className="hidden md:block" onClick={() => { openContact(v.actionArgument || v.value, v.type) }} text={v.type.charAt(0).toUpperCase() + v.type.slice(1)} />
							<span className="md:hidden text-gray-400">Click to {v.type}</span>
						</div>)}
					</div>
				</div>
			</ContextWindow>
		</div>
	)
}

export default Root
