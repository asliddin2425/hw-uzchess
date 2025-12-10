import Uzchess from '../../../../assets/icons/uzchess.svg'
import Arrow from '../../../../assets/icons/vektor.svg'
import Search from '../../../../assets/icons/search.svg'
import Savat from '../../../../assets/icons/savat.svg'
import Person from '../../../../assets/icons/person.svg'
import Notification from '../../../../assets/icons/notification.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    width: 1376px;
    height: 76px;
    margin-top: 20px;
    margin-left: 32px;
    border-radius: 16px;
    background-color: #1A1D1F;
`;

const ImgSelect = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 257px;
    height: 24px;
    margin-left: 24px;
`;

const List = styled.ol`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 481px;
    height: 20px;
    gap: 40px;
    margin-left: 166px;
    font-size: 14px;
    font-family: sans-serif;
    font-weight: 500;
    
    a{
        color: #B5B7B8;
        text-decoration: none;
        &:active{
            color: #1C92E0;
            cursor: pointer;
        }
    }
`;

const HeaderIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 336px;
    height: 32px;
    gap: 20px;
    padding: 0px;   
    margin-left: 50px;
`;

const UzchessIcon = styled.img`
    display: flex;
    width: 104px;
    height: 30px;
    margin-top: -10px;
`;
const Divider = styled.div`
    display: flex;
    width: 1px;
    height: 24px;
    background-color: #3D4549;
`;

const Language = styled.p`
    display: flex;
    align-items: center;
    width: 112px;
    height: 24px;
    margin-left: 20px;
    font-size: 15px;
    font-family: sans-serif;
    font-weight: 500;
    color: #FFFFFF;
    user-select: none;
    // background-color: #1A1D1F;
    border: none;
    cursor: pointer;
`;

const Arrov = styled.img`
    display: flex;
    align-items: center;
    margin-left: 10px
`;


const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 120px;
    height: 24px;
    gap: 24px;
    margin: 8px 0px;
    cursor: pointer;
`;

const PersonAbout = styled.div`
    display: flex;
    width: 175px;
    flex-direction: row;
    align-items: center;
    height: 32px;
    gap: 6px;
    img{
        width: 32px;
        height: 32px;
    }
`;

const PersonName = styled.p`
    width: 137px;
    height: 24px;
    user-select: none;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 500;
    color: white;
`;







export function Header() { 
    return (
        <StyledHeader>
            <ImgSelect>
                <UzchessIcon src={Uzchess} />
                <Divider></Divider>
                <Language>O'zbekcha
                    <Arrov src={ Arrow} alt='icon'/>
                </Language>  
            </ImgSelect>
            <List>
                <Link to="/">Asosiy</Link>
                <Link to="/news">Yangiliklar</Link>
                <Link to="/courses">Kurslar</Link>
                <Link to="library">Kutubxona</Link>
                <Link to="contact">Bog‘lanish</Link>
            </List>
            <HeaderIcons>
                <Icons>
                    <Link to={'searching'}>
                        <img src={Search} alt="search" />
                    </Link>
                    
                    <Link to={'cart'}>
                        <img src={Savat} alt="savat" />
                    </Link>
                    <img src={Notification} alt="icon" />
                </Icons>
                <Divider></Divider>
                <PersonAbout>
                    <PersonName>Jasurbek Pulatov</PersonName>
                    <img src={Person} alt="personImg" />
                </PersonAbout>
            </HeaderIcons>
        </StyledHeader>
    )
}
