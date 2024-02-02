import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setProjects } from "./store/projects"
import Root from "./pages/Root"
import { Link, Route, Routes } from "react-router-dom"
import Projects from "./pages/Projects"

function App() {

	let dispatch = useDispatch()

	useEffect(() => {
		let projects: ProjectData[] = [
			{
				name: "Kolersky Photo Bot",
				url: "https://t.me/Kolersky_Photo_Bot",
				image: "wr.jpg",
				description: "Remove watermark or background from photo",
				showOnMain: true
			}, {
				name: "Kolersky Photo Bot",
				url: "https://t.me/Kolersky_Photo_Bot",
				image: "wr.jpg",
				description: "Remove watermark or background from photo",
				showOnMain: true
			}, {
				name: "Kolersky Photo Bot",
				url: "https://t.me/Kolersky_Photo_Bot",
				image: "wr.jpg",
				description: "Remove watermark or background from photo",
				showOnMain: true
			}, {
				name: "Kolersky Photo Bot",
				url: "https://t.me/Kolersky_Photo_Bot",
				image: "wr.jpg",
				description: "Remove watermark or background from photo"
			}, {
				name: "Kolersky Photo Bot",
				url: "https://t.me/Kolersky_Photo_Bot",
				image: "wr.jpg",
				description: "Remove watermark or background from photo"
			}, {
				name: "Kolersky Photo Bot",
				url: "https://t.me/Kolersky_Photo_Bot",
				image: "wr.jpg",
				description: "Remove watermark or background from photo"
			}, {
				name: "Kolersky Photo Bot",
				url: "https://t.me/Kolersky_Photo_Bot",
				image: "wr.jpg",
				description: "Remove watermark or background from photo"
			}, {
				name: "Kolersky Photo Bot",
				url: "https://t.me/Kolersky_Photo_Bot",
				image: "wr.jpg",
				description: "Remove watermark or background from photo"
			},
		]
		dispatch(setProjects(projects))
	}, [])

	let routes = [
		{
			path: '/',
			name: 'Home',
			element: <Root />
		},{
			path: '/projects',
			name: 'Projects',
			element: <Projects />
		}
	]

	return (
		<>
			<nav className="w-full p-4 bg-background-600 h-min flex flex-row justify-between text-white sticky top-0">
				<div className="">
					<div className="text-white font-bold text-xl">DiChay Technologies</div>
				</div>
				<div className="flex flex-row gap-2">{
					routes.map(r => (
						<Link key={r.path} to={r.path}>{r.name}</Link>
					))
				}</div>
			</nav>
			<Routes>
				{routes.map(r => <Route path={r.path} key={r.path} element={r.element}/>)}
			</Routes>
		</>
	)
}

export default App
