import { useEffect, useState } from "react"

const about = fetch("/about/about.json").then(v => v.text()).then(v => {
			return JSON.parse(v).value
		})

export function About() {

	const [text, setText] = useState<{ text: string, image: string }[]>([])

	setText(about)

	/*useEffect(() => {
		fetch("/about/about.json").then(v => v.text()).then(v => {
			setText(JSON.parse(v).value)
		})
	}, [])*/

	return (<div className="p-4 md:p-12 bg-background-400 text-white text-justify text-xl flex flex-col gap-4 min-h-screen">
		{text.map((v, k) => 
			<div className={`bg-background-500 flex gap-4 rounded-3xl flex-col-reverse ${k % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'} h-min items-center`}>
				<div className="p-4">{v.text}</div>
				<img src={`/about/images/${v.image}`} className={`w-full md:w-64 aspect-square rounded-t-3xl ${k % 2 == 0 ? 'md:rounded-r-3xl' : 'md:rounded-l-3xl'}`} />
			</div>
		)}
	</div>)
}
