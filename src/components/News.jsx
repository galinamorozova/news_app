import React from 'react';

import { useSelector } from 'react-redux'


import './news.scss';
import titleImage from '../images/title_image.jpeg';


export default function News() {
    

   let articles = useSelector(state=>state);


    if (!articles || articles.length === 0) return <p>Нет данных.</p>
      
    return(
        <React.Fragment>
            { 
                articles.map ( a =>
                <div className='newsItem'>
                    <div className='container'>
                        <div key={a.id}>
                            <img src={titleImage} alt='иллюстрация новости'/>
                            <h2>{a.title}</h2>
                            <p>{a.body}</p>
                            <h3>Автор: Иванов Иван</h3>
                        </div>
                        <button>Read more</button>
                    </div>
                </div> 
            )
            }
            
        </React.Fragment>
        );
    }