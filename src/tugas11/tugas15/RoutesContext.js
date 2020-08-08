import React, {createContext} from 'react'


export const RoutesContext = createContext();

export const RoutesProvider = props => {
    const warna = ['green','blue','yellow','salmon']

    return (
        <RoutesContext.Provider value={warna}>
            {props.children}
        </RoutesContext.Provider>
    )
}