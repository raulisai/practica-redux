import { combineReducers } from "redux";
import game_shop from "./gameShopReducer";
import Buscador from "./buscadorReducer";

const rootReducer = combineReducers({
  game_shop,
  Buscador,
});

export default rootReducer;
