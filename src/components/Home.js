import React from 'react';
import Headlines from './Headlines';
import MainArticles from './MainArticles';
import Navigation from './Navigation';

export default function Home(){
    return (
        <div>
            <Navigation />
            <h1 className='header'>News App</h1>
            <Headlines />
            <MainArticles />
        </div>
    )
}