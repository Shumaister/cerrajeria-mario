import React from 'react'; 
import './App.css';

import SectionOne from './components/sectionOne/SectionOne';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <SectionOne></SectionOne>
      <div className='section'>Seccion 2</div>
      <div className='section'>Seccion 3</div>
    </div>
  );
}

export default App;
