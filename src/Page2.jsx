import React from 'react';
import {useContext} from 'react';
import Datacontext from './context/Datacontext';
const Page2 = () => {
  const { name , theme} = useContext(Datacontext);
  return (
    <div className={`App ${theme}`}>
      <h1>Welcome {name} to Page2</h1>
    </div>
  );
}

export default Page2;
