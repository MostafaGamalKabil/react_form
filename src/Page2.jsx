import React from 'react';
import {useContext} from 'react';
import Datacontext from './context/Datacontext';
const Page2 = () => {
  const { name } = useContext(Datacontext);
  return (
    <div>
      <h1>Welcome {name} to Page2</h1>
    </div>
  );
}

export default Page2;
