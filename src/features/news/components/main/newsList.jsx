import './newsList.css';
import { NewsData } from '../../../../Api/Api';


export function NewsList() { 
    return (
        <div id='main'>
            {NewsData.map(item => (
                <NewsMain 
                    key={item.id} 
                    newsImg={item.newsImg}
                    newsDate={item.newsDate}
                    aboutNews={item.aboutNews}
                    desc={item.desc}
                />
            ))}
        </div>
    );
}

export function NewsMain({ newsImg, newsDate, aboutNews, desc }) {
    return (
        <main>
            <div className='box'>
                <img src={newsImg} alt="Yangilik rasmi" />
                <p>{newsDate}</p>
                <h6>{aboutNews}</h6>
                <h5>{desc}</h5>
            </div>
        </main>
    );
}