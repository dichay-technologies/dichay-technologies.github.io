import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes, useLocation } from "react-router-dom"
import Projects from "./pages/Projects"
import Root from "./pages/Root"
import { setProjects } from "./store/projects"
import { NavBar } from "./components/NavBar"
import { setFooterInfo } from "./store/footer"
import { Footer } from "./components/Footer"
import { About } from "./pages/About"

function App() {

	const dispatch = useDispatch()

	useEffect(() => {
		fetch("/projects/projects.json").then(value => value.text()).then(value => {
			const projects = JSON.parse(value).value
			dispatch(setProjects(projects))
		})
		fetch("/footer.json").then(value => value.text()).then(value => {
			const footerInfo = JSON.parse(value)
			dispatch(setFooterInfo(footerInfo))
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const routes = [
		{
			path: '/',
			name: 'Home',
			icon: "bi-house-door",
			element: <Root />
		}, {
			path: '/projects',
			name: 'Projects',
			icon: "bi-projector",
			element: <Projects />
		}, {
			path: '/about',
			name: 'About',
			icon: "bi-info-circle",
			element: <About />
		}
	]

	const location = useLocation()

	return (
		<>
			<NavBar routes={routes} location={location} />
			<Routes>
				{routes.map(r => <Route path={r.path} key={r.path} element={r.element} />)}
			</Routes>
			<Footer />
		</>
	)
}

export default App
