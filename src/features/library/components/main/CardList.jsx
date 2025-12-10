import styles from "./Card.module.css";
import Union from '../../../../assets/icons/Union.svg'
import Tools from '../../../../assets/icons/tools.svg'
import Vector from '../../../../assets/icons/avatar.svg'
import Savat from '../../../../assets/icons/savat.svg'
import Like from '../../../../assets/icons/like.svg'
export function CardList({ img, title, oldPrice, newPrice, level, category, author }) {
  return (
    <main>
      <div className={ styles.cardList}>
        <img className={styles.img1} src={img} alt="img" />
        <div className={styles.cardAbout}>
        <h6>{title}</h6>
          <div className={styles.price}>
          {oldPrice && <p>{oldPrice}</p>}
          <h5>{newPrice}</h5>
        </div>

          <div className={styles.boxIcons}>
            <div className={styles.icon1}><img src={Union} alt="icon" /><p>{level}</p></div>
                <div className={styles.divider}></div>
            <div className={styles.icon2}><img src={Tools} alt="icon" /><p>{category}</p></div>
            <div className={styles.divider}></div>
            <div className={styles.icon3}><img src={Vector} alt="icon" /><p>{author}</p></div>
            </div>
    
      </div>
        <div className={styles.savat}>
        <img src={Savat} alt="savat" />
        <p>Savatchaga</p>
      </div>
        <div className={styles.like}>
        <img src={Like} alt="like" />
      </div>
    </div>
    </main>
  );
}
