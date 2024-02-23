import { ContextWindowProps } from "../types/props";

export function ContextWindow({ shown, children, onClose }: ContextWindowProps) {
	return (
		<div className={`fixed top-0 bottom-0 left-0 right-0 bg-tinted-200 ${shown ? '' : 'hidden'} flex cursor-pointer`} onClick={() => onClose && onClose()}>
			<div className="bg-background-400 m-auto rounded-xl p-12 cursor-default" onClick={(e) => { e.preventDefault(); e.stopPropagation() }}>
				{children}
			</div>
			<span className="hidden md:inline-block absolute mx-auto w-full text-center bottom-12 text-xl text-gray-500 drop-shadow-lg">Click to close</span>
			<span className="md:hidden absolute mx-auto w-full text-center bottom-12 text-xl text-gray-500 drop-shadow-lg">Touch to close</span>
		</div>
	)
}
