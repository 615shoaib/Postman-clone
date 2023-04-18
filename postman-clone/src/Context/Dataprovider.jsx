import {React,createContext, useState,} from 'react'

export const Datacontext=createContext(null)


    const DataProvider=({children})=>{
        const [form,setForm]=useState({ url:" " , type:"POST"})
        return(
            <>
            <Datacontext.Provider value={{
                form,
                setForm,
    }}>
        {children}
            </Datacontext.Provider>
            </>
        )
    }

    export default DataProvider;