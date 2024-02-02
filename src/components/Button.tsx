export function Button({ onClick, text }: { onClick: () => any; text: string; }) {
	return <div className="text-center text-white py-2 px-3 bg-background-400 hover:bg-background-500 rounded-xl" onClick={onClick}>
		{text}
	</div>;
}
