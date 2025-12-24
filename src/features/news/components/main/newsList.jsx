import './newsList.css';
import { NewsData } from '../../../../Api/Api';
import { Link } from 'react-router-dom';


export function NewsList() { 
    return (
        <div id='main'>
            {NewsData.map(item => (
                <NewsMain 
                    key={item.id} 
                    newsImg={item.newsImg}
                    newsDate={item.newsDate}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    );
}

export function NewsMain({ newsImg, newsDate, title, desc }) {
    return (
        <main>
            <div className='box'>
                <img src={newsImg} alt="Yangilik rasmi" />
                <p>{newsDate}</p>
                <Link to={'/news/deteils'}>{title}</Link>
                <h5>{desc}</h5>
            </div>
        </main>
    );
}