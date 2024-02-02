import { configureStore } from "@reduxjs/toolkit"
import projects from "./projects"

const store = configureStore({
	reducer: {
		projects
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
