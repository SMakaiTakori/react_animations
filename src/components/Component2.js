import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class Component2 extends Component {
  render() {
    return (
        <Spring
        from={{ opacity: 0 }}
        to= {{ opacity: 1  }}
        config={{ delay:1000, duration: 1000 }}
       > 
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p> Cillum ullamco consectetur fugiat incididunt mollit qui eu adipisicing. Officia ea in veniam velit minim reprehenderit pariatur officia esse. Aliquip irure fugiat anim consectetur ex et sit est id ea qui dolore. Voluptate dolore esse veniam officia. Est quis esse aliqua eu laborum veniam ex elit ullamco elit. Mollit dolor anim non laboris cillum ut Lorem enim. Eiusmod consequat fugiat labore fugiat.   </p>
                <button style={btn} onClick={this.props.toggle}>Toggle Component 3</button>
            </div>        
          </div>
        )}
      </Spring>

    )
  }
}

const c2Style = {
    background: 'purple',
    color: 'white',
    padding: '1.5rem'
}

const btn = {
    background:'yellow',
    color:'black',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin: '15px 0'
};


export default Component2
