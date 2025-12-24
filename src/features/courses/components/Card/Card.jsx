import Star from '../../../../assets/icons/Star 1.svg'
import { useState } from 'react'
import { SearchBar } from "../SearchBar/SearchBar";
import Icons2 from '../../../../assets/icons/kepka.svg'
import Icons3 from '../../../../assets/icons/tools.svg'
import { Data } from "./Data/data";
import likeImg from '../../../../assets/icons/like.svg';
import EmptyImg from "../../../../assets/images/empty.svg";
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export function Card() {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };
    const filteredData = Data.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
    
    return(
        <>
            <SearchBar handleSearchChange={handleSearchChange} />
                {filteredData.length === 0 ? (
                <div className={styles.emptyBox}>
                    <img src={EmptyImg} alt="not found" className={styles.emptyImg} />
                </div>) : (<CardItem Data={filteredData} />)}

        </>
    )
}
export function CardItem({Data}){
    return (
        <div className={styles.container}>
            {Data.map(item => (
            <div className={styles.box}>
            <div className={styles.boxImg}>
                <img src={item.img} alt="img" />
                <div className={styles.rating}>
                    <img src={Star} alt="star" />
                    <p>{item.ratingNum}</p>
                </div>
                <div className={styles.lang}>
                    <p>{item.lang}</p>
                </div>
            </div>

            <div className={styles.boxTitle}>
                <Link to={'/courses/single'}>{item.title}</Link>
                <p>{item.user}</p>
            </div>

            <div className={styles.boxPrice}>
                    <p>{item.oldPrice}</p>
                    <h5>{item.newPrice}</h5> 
            </div>

            <div className={styles.boxIcons}>
                <div className={styles.icon1}><img src={item.icon1} alt="icon" /><p>{item.text1}</p></div>
                <div className={styles.divider}></div>
                <div className={styles.icon2}><img src={Icons2} alt="icon" /><p>{item.text2}</p></div>
                <div className={styles.divider}></div>
                <div className={styles.icon3}><img src={Icons3} alt="icon" /><p>{item.text3}</p></div>
            </div>
            <button className={styles.like}>
                <img src={likeImg} alt="like" />
            </button>
        </div>
            ))}
            
        </div>

    )
}