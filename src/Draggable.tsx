import React from 'react'

function Draggable(props: { children?: any, 
    position: [number, number],
    color: string,
    onDragEnter: Function,
    onDragEnd: Function,
    onDragStart: Function,
}) {
    const  {position, color, onDragEnd, onDragStart, onDragEnter} = props
    return <div onDragEnter={e => {onDragEnter(position)}} >
            <div
                draggable 
                style={{width: 60, height: 60, background: color, border: 'solid white 1px'}} 
                onDragStart={e => {onDragStart(position)}} 
                onDragEnd={e => {onDragEnd(position)}} 
            >
        </div>
    </div>
    
}

export default Draggable