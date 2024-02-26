import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "."
import { FooterData } from "../types/props"

interface ProjectsSlice {
	value: FooterData
}

const initialState: ProjectsSlice = {
	value: { company: [], contacts: [], social: [] }
}

const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setFooterInfo(state, action: PayloadAction<FooterData>) {
			state.value = action.payload
		}
	}
})

export const { setFooterInfo } = projectsSlice.actions
export const selectFooterInfo = (state: RootState) => state.footer.value
export default projectsSlice.reducer
