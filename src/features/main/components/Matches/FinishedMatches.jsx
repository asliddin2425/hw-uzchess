import './FinishedMatches.css'
import { Link } from 'react-router-dom'
import Arrow from '../../../../assets/icons/vektor.svg'
import { FinishedMatchesData } from '../../../../Api/Api'
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
                <Link to={'games'}>Barchasi
                    <img src={ Arrow} alt="icon" />
                </Link>
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
                            {FinishedMatchesData.map(item => (
                    <div className="players_record">
                        <div className="kubok">
                            <div className="level_kubok">
                                <div className="around">
                                    <div className="back">
                                        <img src={item.gold} alt="svg"/>
                                        <p>{item.playName}</p>
                                    </div>
                                    <p>{item.levlrayt}</p>
                                </div>
                                <p>{item.nums}</p>
                            </div>
                            <div className="level_kubok">
                                <div className="around">
                                    <div className="back">
                                        <img src={item.gold2} alt="svg"/>
                                        <p>{item.playName2}</p>
                                    </div>
                                    <p>{item.levlrayt2}</p>
                                </div>
                                <p>{item.nums2}</p>
                            </div>
                        </div>
                        <div className="play_month">
                            <div className="around2">
                                <img src={item.icons} alt="svg"/>
                                <p>{item.move}</p>
                            </div>
                            <p>{item.month}</p>
                        </div>
                    </div>
                    ))}
                        </div>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
