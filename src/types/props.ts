/* eslint-disable @typescript-eslint/no-explicit-any */
export type ProjectData = { name: string; url: string; image: string; description: string, showOnMain?: boolean }
export type ProjectTileProps = ProjectData & { onClick: (a: string) => any }
export type ProjectsListProps = { projects: ProjectData[], onClick: (a: string) => void, short?: boolean }
export type ContextWindowProps = {
	shown?: boolean;
	children?: JSX.Element | string;
	onClose?: () => void
}
export type FooterData = { company: string[], contacts: string[] }
