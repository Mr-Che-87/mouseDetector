import React from 'react';
import './App.css';

///////РЕАКТ-ТРЕНАЖЁР:


/////////////УРОВЕНЬ 1////////


//ТРЕНАЖЁР:

//1 УРОВЕНЬ:


//А) НАХУЯ НУЖНЫ ПРОПСЫ?????
  /*  
const users = [
  {name:'Алиса',    old:25}, 
  {name:'Базилио',  old:30}, 
  {name:'Буратино', old:5}
];

function Bild() {  
   
      return (
        <div>
          {users.map((item, index) => (
            <h1 key={index}>Привет, {item.name} {item.old}</h1>
          ))}
        </div>
      );
    }

  
    function App() {     
      return (
        <div>
          <Bild />
         </div>
      );
    }

    
    export default App  
*/   


//Б) Ввод адреса почты + Alert:
/*
function App() {

const customMail = useRef(null)  

const handleButton = () => {
  const emailValue = customMail.current.value; // Получаем значение из поля input
    alert(`Сообщение отправлено на адрес ${emailValue}`); // Выводим alert с полученным значением
    customMail.current.value = ''; // Очищаем поле input
}
    return (
      <>
        <label htmlFor='email'>Введите email:</label>
        <input type='email' id='email' ref={customMail}></input>
        <button onClick={handleButton}>Отправить</button>
      </>
    )
  }

  export default App  
*/

//вариант с очисткой поля:
/*
function App() {
  const customMail = useRef(null);

  const handleButton = () => {
    const email = customMail.current.value;

//тайм-аут нужен т.к. алерт блокирует код. Т.е. алерт успел запомнить кастомное значение емейла, но его выполнение поставили на паузу на 10мс, очистили инпут и только потом вывели алерт. Поэтому лучше использовать кастомное модальное окно - там такого нет.    
    setTimeout(() => {
        alert(`Сообщение отправлено на адрес ${email}`);
    }, 10);

    customMail.current.value = '';

};
  return (
    <>
    <form>
      <label htmlFor='email'>Введите email:</label>
      <input type='email' id='email' ref={customMail} />
      <button onClick={handleButton}>Отправить</button>
      </form>
    </>
  );
}

export default App;
*/






/*
//1.6: Реализуйте компонент StaredRating — рейтинг из пяти звёздочек. На вход подаётся число-рейтинг (от 1 до 5), в зависимости от которого часть звёздочек остаётся пустыми, а часть — закрашивается.

//Выставление звёздочек фильмам (с помощью псевдо-элемента css-after и пропса rate)
//ИДЕАЛЬНЫЙ ПРИМЕР ПРОПСА (ПЕРЕСКОКИ ЗНАЧЕНИЙ ТУДЫ-СЮДЫ ОПРАВДАНЫ)):

function StaredRating({rate}) {  //деструктуризированный пропс rate передаётся в дочерний StaredRating из родительского App
  return ( <div className="rating">
     <span className={`star ${rate >= 1 ? 'checked' : ''}`}></span>
     <span className={`star ${rate >= 2 ? 'checked' : ''}`}></span>
     <span className={`star ${rate >= 3 ? 'checked' : ''}`}></span>
     <span className={`star ${rate >= 4 ? 'checked' : ''}`}></span>
     <span className={`star ${rate >= 5 ? 'checked' : ''}`}></span>
   </div> )
 }

//в родительском App конкретизируется значение пропса rate для каждой строчки:
function App() { 
     return (
     <>
     <h3 class="title">Зеленая миля</h3>
     <StaredRating rate={4} />  
     <h3 class="title">Стражи Галактики</h3>
     <StaredRating rate={3} />
   </>
     )
 }
export default App;
*/



//2.7. Реализуйте вывод на страницу координат курсора мышки в реальном времени. Для этого необходимо в компонент MouseDetector добавить логику по отслеживанию мышки:

//ОТСЛЕЖИВАНИЕ КООРДИНАТ МЫШИ:
/*
import { useState } from 'react';

function App() {
 
 const [mouse, setMouse] = useState({x:0, y:0})  //начальное значение переменной mouse МОЖЕТ БЫТЬ ЧЕМ УГОДНО - массивом и ОБЪЕКТОМ в том числе. Это надо задавать внутри useState
 
   
 const handleMouseMove = (e) => {  //обработчик движения мыши
   setMouse({x: e.pageX, y: e.pageY})  //pageX и pageY - свосйства содержащие координаты
 }
 
  return (
     <div
       className='cords'
       onMouseMove={handleMouseMove}  //onMouseMove - событие, фиксирующее движение мыши (привязываем всё конкретно к курсору)
     > 

     
       {`x: ${mouse.x}px, y: ${mouse.y}px`  }  
     </div>
   )
 } //- тут уже идёт ссылка на поля именно объекта mouse

export default App;
*










/////////////УРОВЕНЬ 2////////
//2.1. Дополнить компонент Notification так, чтобы в зависимости от типа (info, warning и error) уведомление имело разный фон, заголовок и выводило соответствующую иконку (из ✔️⚠️⛔️ ). Тип может и отсутствовать, тогда заголовка и иконки быть не должно, а цвет должен отличаться от info, warning и error:
/*
import PropTypes from 'prop-types';


class Notification extends React.Component {
  render() {
    const { type, message } = this.props
    return <div className={`notification ${type}`}>
      <span className="icon">
        {
          type === 'warning'
          ? '⚠️'
          : type === 'info'
            ? '✔️'
            : type === 'error'
              ? '⛔️'
              : ''
        }
      </span>
      <h2 className={`title ${type}`}>
        {
          type === 'warning'
          ? 'Warning'
          : type === 'info'
            ? 'For your information'
            : type === 'error'
              ? 'Error'
              : ''
        }
      </h2>
      <p className={`message ${type}`}>{message}</p>
    </div>
  }
}

class App extends React.Component {
  render() {
    return <>
        <Notification type='info' message='Status updated' />
        <Notification type='warning' message='Be sure to precompile your scripts' />
        <Notification type='error' message='Something went wrong' />
        <Notification type='' message='New feature were added' />
      </>
  }
}

Notification.propTypes = {
  type: PropTypes.oneOf(['info', 'warning', 'error']),  // метод oneOf указывает, что свойство должно быть одним из определенных значений в массиве. 
  message: PropTypes.string
}

export default App
*/




//2.2. Реализуйте фильтруемый список: в поле ввода пользователь набирает начало фразы или слова, и среди списка элементов отображаются только те, что начинаются с содержимого. Если таких элементов нет, то отображается соответствующая надпись:
/*
import PropTypes from 'prop-types';
import { useState } from 'react';


function App() {
  const [items, setItems] = useState(['apple', 'pineapple', 'orange', 'apricot', 'lime', 'lemon', 'plum']);

  const [filter, setFilter] = useState('');
  
  const onChange = (e) => {
    setFilter(e.target.value);
  };


  //метод startsWith(), который возвращает true, если строка начинается с указанной подстроки (значение из состояния filter), и false в противном случае:
  const arrayToShow = items.filter((item) => item.startsWith(filter));  


  return (
    <div className="filtered-list">
      <input
        className="filtered-list__input"
        onChange={(e) => onChange(e)}
      ></input>
      {arrayToShow.length > 0 ? (
        <ul className="filtered-list__list">
          {arrayToShow.map((item, ind) => (
            <li key={ind} className="filtered-list__item">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="filtered-list__note">There is no such items</div>
      )}
    </div>
  );
};


App.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)  //.arrayOf указывает, что свойство должно быть массивом.
};

export default App;
*/






//2.3. Реализуйте блок с данными для авторизации. Если человек уже был зарегистрирован, то отображать только поле для заполнения логина. Иначе показывать также поля для ввода телефона и электронной почты:
/*
import { useState } from 'react';

function App() {  

const [isSignedUp, setisSignedUp] = useState(false)  //false необязательно(т.к. галочка итак изначально не заполнена), но лучше указать

function handleChecked(e) {
  setisSignedUp(e.target.checked);
}


    return (
      <div>
        <h2>Пожалуйста, заполните анкетные данные для авторизации</h2>
        <div className="sign-up-block">
          <input type="checkbox"
                 id="isSignedUp"
                 className="sign-up-block__checkbox"
                 onChange={handleChecked}
          ></input>
          <label htmlFor="isSignedUp" className="sign-up-block__label">
            Уже зарегистрирован
          </label>
        </div>
        <label htmlFor="login" className="form-label">Login</label>
        <input id="login" className="form-input"></input>

        {    !isSignedUp ?        //!handleChecked(e) тут нельзя использовать, поскольку функция handleChecked(e) не возвращает никакого значения (она просто обновляет состояние)
        <>
        <label htmlFor="phone" className="form-label">Телефон</label>
        <input id="phone" className="form-input"></input>
        <label htmlFor="email" className="form-label">Email</label>
        <input id="email" className="form-input"></input>
        </>
        : undefined

        }
        
      </div>
    )
  }



export default App;
*/

  



//2.4. Даны несколько навыков и уровень их прокаченности в процентах. Отобразите бар, в котором закрашена область, пропорциональная числу процентов по каждому из навыков:
/*
import PropTypes from 'prop-types';

function Progress ({title, amount}) {  //фигурные скобки - деструктуризация. { title, amount } в данном контексте представляет собой объект, содержащий два свойства: title и amount.
     return <div className='progressBar'>
      <div>
        <div className='progressBarTitle'>
          {title}
        </div>
        <div className='progressBarWrapper'>
          <div className='progressBarDone' style={{width: `${amount}%`}}>
          {amount}%
          </div>
        </div>
      </div>
    </div>
  }


function App () {
  
      return (
      <div>
        <h2 className="title">My skills</h2>
        <Progress title="React" amount={35}/>
        <Progress title="JavaScript" amount={68}/>
        <Progress title="CSS" amount={55}/>
      </div>
    )
  }


Progress.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}

export default App;
*/




//2.5. Даны числовой input и div с классом parity. Как только в инпуте меняется значение, должно выводиться в div, чётным или нечётным является введённое число:
/*
import { useState } from 'react';
  
function App () {
const [parity, setParity] = useState(null)   //null - чтобы изначально в  div ничего не было (когда пусто в инпуте)

//обработчики ввода значений в инпут:
const handleParity = (e) => {
  const inputValue = e.target.value; //функции setParity передаётся то, что вводится в инпут
  
  setParity(inputValue % 2 === 0 ? 'Число чётное' : 'Число нечётное'); //условие можно прописать здесь, а можно и в самом div: parity % 2 === 0  ? 'Число чётное'  : 'Число нечётное'
}

  
  
    return (
      <>
        <input type='number' onChange={handleParity}></input>
        <div className='parity'>
        {parity}
        </div>
      </>
    )
  }

  export default App;
*/



/////////////УРОВЕНЬ 3////////


//3.1. Реализуйте вывод на страницу координат курсора мышки в реальном времени при помощи React Hooks. Для этого необходимо в компонент MouseDetector добавить логику по отслеживанию мышки:

import { useState, useEffect } from 'react';

const MouseDetector = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }) //начальное значение position - объект {} со свойствами x: 0, y: 0

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY }) //Внутри функции происходит вызов setPosition, который обновляет состояние position с новыми значениями x и y, которые равны горизонтальной (clientX) и вертикальной (clientY) координатам указателя мыши, соответственно. Таким образом, каждый раз, когда вызывается эта функция, состояние position обновляется с текущими координатами мыши.
    
    window.addEventListener("mousemove", setFromEvent)  //на объект windows вешается событие-прослушка(.addEventListener), значение которого передаётся из функции setFromEvent. ЕСЛИ НЕ СДЕЛАТЬ СОБЫТИЕ-ПРОСЛУШКУ .addEventListener - ТО ФУНКЦИЯ setFromEvent ПРОСТО НЕ БУДЕТ ВЫЗЫВАТЬСЯ!
    return () => {
      window.removeEventListener("mousemove", setFromEvent)  //по итогам прослушки удаляется каждое предыдущее значение координат. В return именно emoveEventListener, а не addEventListener, т.к. useEffect вызывает addEventListener автоматически. Далее надо только почистить. ИТОГО: можно вообще без return, но с ним правильнее
    }
  }, [])


  //Можно и без доп-обёртки setFromEvent: 
  /*
  useEffect(() => {
    setPosition({ x: position.clientX, y: position.clientY }); 

    window.addEventListener("mousemove", setPosition)  
    
  }, [])
  */

  return position
}


const App = () => {
  const cords = MouseDetector()
  return (  // ${cords.x} , где $ - перевод в строковый формат, {} - JSX-деструктуризация функции со свойствами x или y
    <div className="cords"> 
      {`x: ${cords.x}px, y: ${cords.y}px`}  
    </div>
  )
}


export default App;