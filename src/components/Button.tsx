// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Button({ onClick, text, className }: { onClick: () => any; text: string; className?:string }) {
	return <div className={`text-center text-white py-2 px-3 bg-background-400 hover:bg-background-500 rounded-xl ${className}`} onClick={onClick}>
		{text}
	</div>;
}
