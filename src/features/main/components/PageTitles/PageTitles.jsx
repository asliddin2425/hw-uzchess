import styled  from 'styled-components'
import CoursesIcon from '../../../../assets/icons/coursesIcon.svg'
import  LibraryIcon  from '../../../../assets/icons/books.svg'
const CoursesPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 326px;
    height: 108px;
    border-radius: 8px;
    margin-left: 382px;
    margin-top: 24px;
    background: #142633;
    border: 1.6px solid #1B3647;
    user-select: none;
    
    p{
        cursor: pointer;
        width: 76px;
        height: 20px;
        color: #F7F9FA;
        font-size: 20px;
        margin-left: 12px;
        font-family: sans-serif;
        font-weight: bold;
    }
`;


const LibraryPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 326px;
    height: 108px;
    border-radius: 8px;
    margin-top: -110px;
    margin-left: 732px;
    background: #142633;
    border: 1.6px solid #1B3647;
    user-select: none;

    p{
        width: 76px;
        height: 20px;
        color: #F7F9FA;
        font-size: 20px;
        margin-left: 12px;
        font-family: sans-serif;
        font-weight: bold;
        cursor: pointer;
    }
`; 



export function PageTitles() { 
    return (
        <>
            <CoursesPage>
                <img src={CoursesIcon } alt="icon" />
                <p>Kurslar</p>
            </CoursesPage>
            <LibraryPage>
                <img src={ LibraryIcon} alt="icon" />
                <p>Kutubxona</p>
            </LibraryPage>
        </>
    )
}