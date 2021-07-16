import { combineReducers } from "redux";
import { FiltreName } from "./FilterReducer";
import { MovieReducer } from "./MovieReducer";
import { FiltreRate } from "./RateReducer";

export const RootReducer = combineReducers({
    Movie : MovieReducer,
    Name:FiltreName,
    Rate:FiltreRate,
})