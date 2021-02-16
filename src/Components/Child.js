
import React from 'react'
import {useState, useEffect} from 'react'


const Child = (props)=>{

    let Asghar = 5
    useEffect(()=>{

    },[Asghar])

    return(
        <div>
            <h2>{props.label}</h2>

            <button onClick={props.startHandler}
            >
                START
            </button>

            <button onClick={props.stopHandler}
            >
                STOP
            </button>

            <button onClick={props.toggleHandler}
            >
                {props.title}
            </button>
        </div>
    )
}


export {Child}