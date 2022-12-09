import { combineReducers } from "redux";
import UserReducer from "./users/Usersreducer";
const RootReducer = combineReducers({
     UsersState : UserReducer,
})
export default RootReducer;