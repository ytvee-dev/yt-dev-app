import { createSlice } from "@reduxjs/toolkit";
import { defaultTheme } from "../../../domains/Theme";
import LocalStorage from "../../../services/localStorageService";
import { storageKeys } from "../../../utils/appConstants";

const localStore = new LocalStorage();

const initialState = {
    currentTheme: localStore.getValue(storageKeys.theme) || defaultTheme,
};

export const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {
        setCurrentTheme: (state, action) => {
            state.currentTheme = action.payload;
            localStore.setValue(storageKeys.theme, action.payload);
        },
    },
});

export const { setCurrentTheme } = applicationSlice.actions;
export default applicationSlice.reducer;
