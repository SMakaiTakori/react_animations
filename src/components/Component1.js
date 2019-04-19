import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function Component1() {
  return (
    <div>
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to= {{ opacity: 1, marginTop: 0 }}
     > 
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
            <p> Cillum ullamco consectetur fugiat incididunt mollit qui eu adipisicing. Officia ea in veniam velit minim reprehenderit pariatur officia esse. Aliquip irure fugiat anim consectetur ex et sit est id ea qui dolore. Voluptate dolore esse veniam officia. Est quis esse aliqua eu laborum veniam ex elit ullamco elit. Mollit dolor anim non laboris cillum ut Lorem enim. Eiusmod consequat fugiat labore fugiat.   </p>
            <Spring
              from= {{ number: 0 }}
              to= {{ number:10  }}
              config={{ duration: 10000 }}
            >
              {props => (
                <div style = {props}>
                  <h1 style= {counter}>
                    {props.number.toFixed()}
                  </h1>
                </div>


              )}



            </Spring>
          </div>        
        </div>
      )}
    </Spring>
    </div>

  )
}

    

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

const counter = {
    background:'#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin:'1rem auto'
};