import React from 'react'

function Draggable(props: { children?: any, 
    position: [number, number],
    onDragStart: Function, 
    onDragEnd: Function, 
    color: string,
    onDragEnter: Function }) {
    const  {position, color,onDragEnd, onDragStart, onDragEnter} = props
    return <div
        style={{width: 60, height: 60, background: color, border: 'solid white 1px'}} 
        draggable 
        onDragStart={e => {onDragStart(position)}} 
        onDragOver={e => {onDragEnter(position)}}
        onDragEnd={e => {onDragEnd(position)}}
    >
    </div>
}

export default Draggable