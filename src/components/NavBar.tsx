import { Link } from "react-router-dom";
import { Location } from "react-router-dom";

//TODO: MAKE MENU FOR PHONES

export function NavBar({ routes, location }: { routes: { path: string; name: string; element: JSX.Element; icon?:string }[]; location: Location; }) {
	return <nav className="z-50 w-full py-4 px-12 bg-background-600 h-min flex flex-row justify-between text-white sticky top-0">
		<div className="">
			<div className="text-white font-bold text-xl">DiChay Technologies</div>
		</div>
		<div className="hidden md:flex flex-row gap-4">{routes.map(r => (
			<Link className={`font-bold text-white px-2 text-center underline-offset-2 decoration-from-font ${location.pathname == r.path ? 'underline' : 'no-underline'}`} key={r.path} to={r.path}>{r.name}</Link>
		))}</div>
		<div className="flex md:hidden flex-row gap-4 text-xl font-bold">{routes.map(r => (
			<Link className={`font-bold text-white px-2 text-center underline-offset-2 decoration-from-font ${location.pathname == r.path ? 'underline' : 'no-underline'}`} key={r.path} to={r.path}><i className={r.icon}></i></Link>
		))}</div>
	</nav>;
}
