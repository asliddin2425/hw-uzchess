import { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { MainData } from "./MainData/MainData";
import { CardList } from "./CardList";
import styles from './Card.module.css'
import EmptyImg from "../../../../assets/images/empty.svg";

export function Card() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const filteredData = MainData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchBar handleSearchChange={handleSearchChange} />

      {filteredData.length === 0 ? (
        <div className={styles.emptyBox}>
          <img src={EmptyImg} alt="not found" className="empty-img" />
        </div>
      ) : (
        filteredData.map(item => (
          <CardList key={item.id} {...item} />
        ))
      )}
    </>
  );
}
