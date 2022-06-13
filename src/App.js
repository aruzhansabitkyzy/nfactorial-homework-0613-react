// import React from 'react';
import './App.css';
import {format} from 'date-fns';
// import img1 from "https://source.unsplash.com/gYl-UtwNg_I/1500x1500";
// import img2 from "https://source.unsplash.com/rFKUFzjPYiQ/1500x1500";
// import img3 from "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d";
// import img4 from "https://source.unsplash.com/ITjiVXcwVng/1500x1500";
// import img5 from "https://source.unsplash.com/3MNzGlQM7qs/1500x1500";


function App() {
  return (
    <div className="main">
         <div className="header">
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Facebook_circle_pictogram.svg/1200px-Facebook_circle_pictogram.svg.png" className="logo-image"/>
                <input type="text" />
            </div>
            <div className="time">
                 {format(new Date(), 'dd.MM.yyyy HH:mm')}
            </div>
         </div>
         <div className="container">
            <div className='i1'>
                  <img src="https://source.unsplash.com/gYl-UtwNg_I/1500x1500" alt="alt"/>
                  <div className= "text">HEY</div>
            </div>
            <div className='i1'>
                  <img src="https://source.unsplash.com/rFKUFzjPYiQ/1500x1500" alt="alt"/>
                  <div className= "text">LET'S</div>
            </div>
            <div className='i1'>
                  <img src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d" alt="alt"/>
                  <div className= "text">GIVE</div>

            </div>
            <div className='i1'>
                  <img src="https://source.unsplash.com/ITjiVXcwVng/1500x1500" alt="alt"/>
                  <div className= "text">ALL</div>

            </div>
            <div className='i1'>
                  <img src="https://source.unsplash.com/3MNzGlQM7qs/1500x1500" alt="alt"/>
                  <div className= "text">YOU CAN</div>

            </div>
         </div>
    </div>
    
  );
}

export default App;
