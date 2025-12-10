import './FinishedMatches.css'
import Arrow from '../../../../assets/icons/vektor.svg'
import  Trophy1 from '../../../../assets/icons/trophy-icon.svg'
import ImgGame from '../../../../assets/images/Games.svg'
export function FinishedMatches() { 
    return (
        <>
            <MatchesList/>
        </>
    )
}


export function MatchesList() { 
    return (
        <div className="match-list">
            <div className='header-match'>
                <h4>Yakunlangan o‘yinlar</h4>
                <p>Barchasi
                    <img src={ Arrow} alt="icon" />
                </p>
            </div>
            <div className='table-box'>
                <table className='table'>
                    <thead>
                        <tr className='table-head'>
                            <th className='gamers'>O'YINCHILAR</th>
                            <th className='result'>NATIJA</th>
                            <th className='typeofGame'>O'YIN TURI</th>
                            <th className='chess-move'>YURISHLAR</th>
                            <th className='date'>SANA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div className='MatchMain'>
                            <div className='gamerName'>
                                <img src={ Trophy1} alt="icon" />
                                <p>Shohrukh Bakhtiyarov</p>
                            </div>
                        </div>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
