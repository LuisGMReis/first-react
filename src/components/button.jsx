import React from "react";

export function Button ({title, onClick}){

    return(
        <>
        <button  onClick={onClick} className="bg-blue-500 text-white w-10 h-10 font-semibold rounded-lg">{title}</button>
        </>
    )

}
