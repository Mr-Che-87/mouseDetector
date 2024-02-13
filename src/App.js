import React from 'react';

//Реализуйте вывод на страницу координат курсора мышки в реальном времени при помощи React Hooks. Для этого необходимо в компонент MouseDetector добавить логику по отслеживанию мышки:

import { useState, useEffect } from 'react';

const MouseDetector = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }) 


  //ВАРИАНТ 1:
  /*
  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY }) 
    
    window.addEventListener("mousemove", setFromEvent) 
    return () => {
      window.removeEventListener("mousemove", setFromEvent)  
    }
  }, [])


    return position
}
*/


  //ВАРИАНТ 2: без доп-обёртки setFromEvent и без return: 
  
  useEffect(() => {
    setPosition({ x: position.clientX, y: position.clientY }); 

    window.addEventListener("mousemove", setPosition)  
    
  }, [])

  return position
}


const App = () => {
  const cords = MouseDetector()
  return (  
    <div className="cords"> 
      {`x: ${cords.x}px, y: ${cords.y}px`}  
    </div>
  )
}


export default App;
