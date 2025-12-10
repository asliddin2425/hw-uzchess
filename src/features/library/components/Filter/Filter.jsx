
import { useState } from 'react'
import  styles from "./Filter.module.css";

export function Filter() { 
    return (
        <>
            <FilterItems></FilterItems>
        </>
    )
}


export function FilterItems() {
    const [drop1, setDrop1] = useState(false);
    const [selectedLang, setSelectedLang] = useState("O'zbek");

    function handleClick() {
        setDrop1(!drop1);
    }

    function chooseLang(lang) {
        setSelectedLang(lang);
        setDrop1(false);
    }

    return (
        <div className={styles.filter}>
            <header className={styles.header}>
                <h5>Filter</h5>
                <p>Tozalash</p>
            </header>

            <main className={styles.main}>
                <section className={styles.section1}>
                    <h6>Tilni tanlang:</h6>

                    <div className={styles.filterSelect} onClick={handleClick}>
                        <h5>{selectedLang}</h5>
                    </div>

                    {drop1 && (
                        <div className={styles.dropdown}>
                            <p onClick={() => chooseLang("O'zbek")}>{ }</p>
                            <p onClick={() => chooseLang("Russian")}>Russian</p>
                            <p onClick={() => chooseLang("English")}>English</p>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
