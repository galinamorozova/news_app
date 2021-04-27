import React from 'react'
import News from './News'
import { useSelector } from 'react-redux'

import './newsList.scss'

function NewsList() {
    let articles = useSelector(state=>state);

    return (
        <div className='news'>
            {articles.map((article)=>   {
                return <News key={article.id} articles={articles}/>;
            })}
        </div>
    )
}

export default NewsList
