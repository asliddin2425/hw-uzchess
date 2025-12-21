import './Filter.css'
import {useState} from 'react'
export function Filter() { 
    return (
        <>
            <FilterItems></FilterItems>
        </>
    )
}


export function FilterItems() {
    const [drop1, setDrop1] = useState(false);
    const [selectedLang, setSelectedLang] = useState("Barchasi");

    function handleClick() {
        setDrop1(!drop1);
    }

    function chooseLang(lang) {
        setSelectedLang(lang);
        setDrop1(false);
    }

    return (
        <div className='filter'>
            <header className='header-filter'>
                <h5>Filter</h5>
                <p>Tozalash</p>
            </header>

            <main className='main'>
                <section className='section1'>
                    <h6>Mamlakatni tanlang:</h6>

                    <div className='filter-select' onClick={handleClick}>
                        <h5>{selectedLang}</h5>
                    </div>

                    {drop1 && (
                        <div className="dropdown">
                            <p onClick={() => chooseLang("O'zbek")}>Uzbekistan</p>
                            <p onClick={() => chooseLang("Russian")}>Russian</p>
                            <p onClick={() => chooseLang("English")}>English</p>
                            <p onClick={() => chooseLang("English")}>India</p>
                            <p onClick={() => chooseLang("English")}>South Korea</p>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
