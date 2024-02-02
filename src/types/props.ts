type ProjectData = { name: string; url: string; image: string; description: string, showOnMain?: boolean }
type ProjectTileProps = ProjectData & { onClick: (a: string) => any }
type ProjectsListProps = { projects: ProjectData[], onClick: (a: string) => void, short?: boolean }
