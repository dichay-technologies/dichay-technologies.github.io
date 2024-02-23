import { useSelector } from "react-redux";
import { selectFooterInfo } from "../store/footer";

export function Footer() {
	const info = useSelector(selectFooterInfo);

	return <footer className="px-12 w-full py-6 bg-background-700 h-min flex flex-col md:flex-row md:justify-evenly text-white gap-4 md:gap-0">
		<div className="flex flex-col items-center">
			<div className="font-bold text-xl">Company</div>
			{info.company.map(l => <div key={l}>{l}</div>)}
		</div>
		<div className="flex flex-col items-center">
			<div className="font-bold text-xl">Contacts</div>
			{info.contacts.map(l => <div key={l}>{l}</div>)}
		</div>
	</footer>;
}
