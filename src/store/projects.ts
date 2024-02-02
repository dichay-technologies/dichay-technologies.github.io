import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "."

interface ProjectsSlice {
	value: ProjectData[]
}

const initialState: ProjectsSlice = {
	value: []
}

const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setProjects(state, action: PayloadAction<ProjectData[]>) {
			state.value = action.payload
		}
	}
})

export const {setProjects} = projectsSlice.actions
export const selectProjects = (state: RootState) => state.projects.value
export default projectsSlice.reducer
