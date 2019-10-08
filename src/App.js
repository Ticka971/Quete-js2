import React from 'react';
import './App.css';
import Contact from './components/Contact'



function App() {
  return (
    <div className="App">
      <Contact
        name= "Itachi uchiwa "
        avatar="http://avatarbox.net/avatars/img33/naruto_uchiha_itachi_avatar_picture_47237.jpg"
        online />
      <Contact
       name= "Naruto uzumaki"
       avatar="http://avatarbox.net/avatars/img1/naruto_shippuuden_avatar_picture_67423.jpg"
       offline />
       <Contact
       name= "Sakura haruno"
       avatar="https://avatarmaker.net/avatars_upload/s130042207.png"
       online />

    </div>
  );
}

export default App;
