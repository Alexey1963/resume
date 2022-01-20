import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Image from '../It myself.jpg';


export default class AboutMe extends React.Component {
    state={
        user: {
            name: 'Alexey Shumikhin',
            born: '1963, 2 April',
            marital: 'Divorced'
        }
    }

    render() {
        const {user}=this.state
      return (
        <div className='personal-data'>
            <img src={Image} />
            <div className='text'>
                <p>Name: {user.name}</p>
                <p>Borned: {user.born}</p>
                <p>Marital: {user.marital}</p>
            </div>
        </div>
      )
    }
}
  