import styled  from 'styled-components'
import CoursesIcon from '../../../../assets/icons/coursesIcon.svg'
import LibraryIcon from '../../../../assets/icons/books.svg'
import { Link } from 'react-router-dom';

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
    
    a{
        cursor: pointer;
        width: 76px;
        height: 20px;
        color: #F7F9FA;
        font-size: 20px;
        margin-left: 12px;
        font-family: sans-serif;
        font-weight: bold;
        text-decoration: none;
        &:active{
            color: #1C92E0;
        }
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

    a{
        width: 76px;
        height: 20px;
        color: #F7F9FA;
        font-size: 20px;
        margin-left: 12px;
        font-family: sans-serif;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
        &:active{
        color: #1C92E0;
        }
    }
`; 



export function PageTitles() { 
    return (
        <>
            <CoursesPage>
                <img src={CoursesIcon } alt="icon" />
                <Link to={'courses'}>Kurslar</Link>
            </CoursesPage>
            <LibraryPage>
                <img src={ LibraryIcon} alt="icon" />
                <Link to={ 'library'}>Kutubxona</Link>
            </LibraryPage>
        </>
    )
}