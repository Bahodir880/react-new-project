
import './App.css';
import rasm1 from "./rasm/ram1.png"
import rasm3 from "./rasm/rasm3.jpg"
import rasm4 from "./rasm/rasm4.jpg"
import rasm5 from "./rasm/rasm5.jpg"
import rasm6 from "./rasm/rasm6.jpg"
import rasm7 from "./rasm/rasm7.jpg"
import rasm8 from "./rasm/rasm8.jpg"
import rasm9 from "./rasm/rasm9.jpg"

import rasm11 from "./rasm/rasm11.jpg"
function App() {
  return (
    <div className="App">
      <header>
        <div className='container'>
          <h2>Wix</h2>
          <div className="img">
            <img src={rasm1} alt="" />
            <h1>|</h1>
            <img src={rasm1} alt="" />
          </div>
          <div className='text'>
            <p>Нажмите «Редактировать», чтобы создать свой сайт</p>
            <a href="##">Подробнее</a>
            <button className='btn'>Редактировать</button>
          </div>
        </div>
      </header>
      <div className='text1'>
        <div>
          <h1>Олег Марков</h1>
        </div>
        <div className='hh'>
          <p>Главная</p>
          <p>Обо мне</p>
          <p>Связаться</p>
        </div>
      </div>
      <div className='imgcss'>
        <div>
          <img src={rasm3} alt="" />
          <img src={rasm6} alt="" />
          <img src={rasm9} alt="" />
        </div>
        <div>
          <img src={rasm4} alt="" />
          <img src={rasm7} alt="" />
          <img src={rasm8} alt="" />
        </div>

        <div>
          <img src={rasm5} alt="" />
          <img src={rasm8} alt="" />
          <img src={rasm11} alt="" />
        </div>
      </div>





      <section>
        <div></div>
      </section>
    </div>
  );
}

export default App;
