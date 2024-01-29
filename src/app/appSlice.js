import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSidebarOpen: false,
        isLightTheme: true,
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        toggleTheme: (state) => {
            state.isLightTheme = !state.isLightTheme;
        },
    },
});

export const { toggleSidebar, toggleTheme } = appSlice.actions;
export default appSlice.reducer;
