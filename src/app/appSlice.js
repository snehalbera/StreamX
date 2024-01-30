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
        closeSidebar: (state) => {
            state.isSidebarOpen = false;
        },
        toggleTheme: (state) => {
            state.isLightTheme = !state.isLightTheme;
        },
    },
});

export const { toggleSidebar, closeSidebar, toggleTheme } = appSlice.actions;
export default appSlice.reducer;
