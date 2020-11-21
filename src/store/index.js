import { createStore } from "redux";
import { inputReducer } from "../store/reducers";

const store = createStore(inputReducer);

export default store;
