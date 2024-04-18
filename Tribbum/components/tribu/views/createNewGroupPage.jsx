import { Span } from 'next/dist/trace';
import React from 'react';


const CreateNewGroupPage = () => {
  const containerStyle = {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'50vh',
    backgroundColor: '#FFFFFF',
  };

  const textStyle = {
    paddingLeft: '0rem',
    fontSize: '2rem',
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'center',
  };

  return(
    <div style = {containerStyle}>
      <span style = {textStyle}>
        <h1>Create New group</h1>
      </span>
    </div>
  );
}
export default CreateNewGroupPage;