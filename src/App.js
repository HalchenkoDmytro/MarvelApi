import './App.css';
import './styles/main.scss';
import React  from 'react';
import Header from './component/Header';
import MyTabs from './component/MyTabs';




function App() {

  return (
    <>
      <Header />
      <MyTabs />
      <a href="http://marvel.com">Data provided by Marvel. © 2022 MARVEL</a>
    </>
    
  );
}

export default App;