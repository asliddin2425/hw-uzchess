import './PageTitle.css'
import Books  from '../../../../assets/icons/books.svg'
export function PageTitle() { 
    return (
        <>
            <div className="page-title">
                <img src={Books} alt="books" />
                <h1>Kutubxona</h1>
            </div>
        </>
    )
}