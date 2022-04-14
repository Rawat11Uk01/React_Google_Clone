import React, { createContext, useContext, useReducer } from 'react';
import Reducer, { initialState } from './reducer';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(Reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = ()=> useContext(StateContext);