import React from 'react';
import MainPage from './components/MainPage';
import Search from './components/Search';


const App: React.FC = (props) => {
  const test = [{id: 10}];
  return (
    <div className="App">
      <Search />
      <MainPage test={test}/>
    </div>
  );
};

export default App;
