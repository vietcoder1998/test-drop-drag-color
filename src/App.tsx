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
  const [dropPosition, setDropPosition] = useState<[number, number]>([0, 0])

  const onDragStart = useCallback(
    (position: [number, number]) => {
      if (position !== dragPosition) {
        setDragPosition(position)
      }
    },
    [setDragPosition],
  )

  const onDragEnter = useCallback(
    (position: [number, number]) => {
      if (position !== dragPosition) {
        setDropPosition(position)
      }
    },
    [setDragPosition],
  
  )

  const onDragEnd = useCallback(
   (e: any) => {
      console.log('drag over',dropPosition, dragPosition)
      const nData = [...data]
      const color1 = nData[dragPosition[1]][dragPosition[0]]
      const color2 = nData[dropPosition[1]][dropPosition[0]]
      
      // swap color
      nData[dragPosition[1]][dragPosition[0]] = color2
      nData[dropPosition[1]][dropPosition[0]] = color1

      setData(nData)
    },
    [setData, data, dragPosition, dropPosition],
  )

  return (
    <div className="App">
      {data?.map(
        (item: string[], y: number) => {
          return <div key={y} style={{display: 'flex'}}>
            {
              item.map((color: string, x: number ) => (<Draggable key={`${x}${y}`} 
                onDragEnter={onDragEnter} 
                onDragStart={onDragStart} 
                onDragEnd ={onDragEnd}
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
