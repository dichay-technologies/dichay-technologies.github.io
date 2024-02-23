import { configureStore } from "@reduxjs/toolkit"
import projects from "./projects"
import footer from "./footer"

const store = configureStore({
	reducer: {
		projects, footer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
