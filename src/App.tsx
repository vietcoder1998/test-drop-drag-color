import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Draggable from './Draggable';

function App() {
  const [data, setData] = useState([
    ['red', 'blue', 'brown', 'green', 'red', 'blue', 'brown', 'green'],
    ['red', 'blue', 'brown', 'green', 'red', 'blue', 'brown', 'green'],
    ['red', 'blue', 'brown', 'green', 'red', 'blue', 'brown', 'green'],
    ['red', 'blue', 'brown', 'green', 'red', 'blue', 'brown', 'green'],
    ['red', 'blue', 'brown', 'green', 'red', 'blue', 'brown', 'green'],
    ['red', 'blue', 'brown', 'green', 'red', 'blue', 'brown', 'green'],
    ['red', 'blue', 'brown', 'green', 'red', 'blue', 'brown', 'green'],
    ['red', 'blue', 'brown', 'green', 'red', 'blue', 'brown', 'green'],
  ])

  const [dragPosition, setDragPosition] = useState<[number, number]>([0, 0])

  const onDragStart = useCallback(
    (position: [number, number]) => {
      if (position !== dragPosition) {
        setDragPosition(position)
      }
    },
    [setDragPosition, data],
  )

  const onDragEnter = useCallback(
    (position: [number, number]) => {
      console.log(position, dragPosition)
      const nData = [...data]
      const color1 = nData[dragPosition[1]][dragPosition[0]]
      const color2 = nData[position[1]][position[0]]
      
      // swap color
      nData[dragPosition[1]][dragPosition[0]] = color2
      nData[position[1]][position[0]] = color1

      setData(nData)
    },
    [setData, data],
  )

  const onDragEnd = useCallback(
    () => {
      console.log('change')
        
    },
    [setData, data],
  )

  return (
    <div className="App">
      {data?.map(
        (item: string[], y: number) => {
          return <div style={{display: 'flex'}}>
            {
              item.map((color: string, x: number ) => (<Draggable key={`${x}${y}`} 
                onDragEnd={onDragEnd} 
                onDragStart={onDragStart} 
                onDragEnter={onDragEnter} 
                color={color} 
                position={[x, y]}/>))
            }
          </div>
        })
        }
    </div>
  )
}

export default App;
