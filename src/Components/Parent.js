
import React from 'react'
import {useState, useEffect} from 'react'
import {Child} from "./Child";
import {Login} from "./Login";


const Parent = (props)=>{
    const [labelState , setLabelState] = useState(null)
    const [titleState , setTitleState] = useState('Start')

    useEffect(()=>{
        console.log('componentDidMount of parent is called')
    },[])

    useEffect(()=>{
        if (labelState){
            console.log('labelState of parent is changed')
        }

        return ()=>{
            console.log('componentWillUnMount of parent is called')
        }

    },[labelState])

    const startHandler = ()=>{

        setLabelState('START')
    }

    const stopHandler = ()=>{

        setLabelState('STOP')
    }

    const toggleHandler  = ()=>{

       if (labelState == null){
           setLabelState('START')
       }
       else if(labelState == 'START')
       {
           setLabelState('STOP')
           setTitleState('Stop')
       }
       else if (labelState == 'STOP'){

           setLabelState('START')
           setTitleState('Start')
       }
    }
    return(
        <div>
            <Login/>
            <Child
                label={labelState}
                title={titleState}
                startHandler={startHandler}
                stopHandler={stopHandler}
                toggleHandler={toggleHandler}
            />
        </div>
    )
}


export {Parent}