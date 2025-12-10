import './newsList.css'

export function NewsList({ Data }) {
    return (
        <div className='main'>
            {Data.map(item => (
                <NewsMain key={item.id} {...item} />
            ))}
        </div>
    )
}

export function NewsMain({ newsImg, newsDate, aboutNews, desc }) {
    return (
        <main>
            <div className='box'>
                <img src={newsImg} alt="img" />
                <p>{newsDate}</p>
                <h6>{aboutNews}</h6>
                <h5>{desc}</h5>
            </div>
        </main>
    )
}
