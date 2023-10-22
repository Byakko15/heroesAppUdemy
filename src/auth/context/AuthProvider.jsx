import {useReducer} from "react";
import {AuthContext} from "./AuthContext";
import {AuthReducer} from "./authReducer";

import {types} from "../types/types";

const initialState = {
  logged: false,
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = (name = "") => {
    const action = {
      type: types.login,
      payload: {
        id: "a1",
        name: name,
      },
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{login, ...state}}>
      {children}
    </AuthContext.Provider>
  );
};
