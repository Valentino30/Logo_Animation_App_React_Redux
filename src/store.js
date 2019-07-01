import { createStore } from "redux";
import animationReducer from "./reducers/animationReducer";

export const configureStore = (state = {rotation: true}) => {
    return createStore(animationReducer, state)
}