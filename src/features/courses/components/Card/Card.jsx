import Star from '../../../../assets/icons/Star 1.svg'
import { useState } from 'react'
import { SearchBar } from "../SearchBar/SearchBar";
import Icon2 from '../../../../assets/icons/kepka.svg'
import Icon3 from '../../../../assets/icons/tools.svg'
import { Data } from "./Data/data";
import likeImg from '../../../../assets/icons/like.svg';
import EmptyImg from "../../../../assets/images/empty.svg";
import styles from './Card.module.css'
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
                </div>) : (filteredData.map(item => (
          <CardList key={item.id} {...item} />
        ))
      )}

        </>
    )
}
export function CardList({img, ratingNum ,Lang, title, user, oldPrice, newPrice, icon1, text1, text2, text3 }){
    return(
        <div className={styles.box}>
            <div className={styles.boxImg}>
                <img src={img} alt="img" />
                <div className={styles.rating}>
                    <img src={Star} alt="star" />
                    <p>{ratingNum}</p>
                </div>
                <div className={styles.lang}>
                    <p>{Lang}</p>
                </div>
            </div>

            <div className={styles.boxTitle}>
                <h4>{title}</h4>
                <p>{user}</p>
            </div>

            <div className={styles.boxPrice}>
                    <p>{oldPrice}</p>
                    <h5>{newPrice}</h5> 
            </div>

            <div className={styles.boxIcons}>
                <div className={styles.icon1}><img src={icon1} alt="icon" /><p>{text1}</p></div>
                <div className={styles.divider}></div>
                <div className={styles.icon2}><img src={Icon2} alt="icon" /><p>{text2}</p></div>
                <div className={styles.divider}></div>
                <div className={styles.icon3}><img src={Icon3} alt="icon" /><p>{text3}</p></div>
            </div>
            <button className={styles.like}>
                <img src={likeImg} alt="like" />
            </button>
        </div>
    )
}