import React from 'react';
import Headlines from './components/Headlines';
import MainArticles from './components/MainArticles';

export default function Home(){
    return (
        <div>
            <h1>News App</h1>
            <Headlines />
            <MainArticles />
        </div>
    )
}