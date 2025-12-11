import './MainCard.css'
import Vector from '../../../../assets/icons/vektor2.svg'
export function MainCard({data}) {
    return (
        <div className="main-card">
            <div className='card-head'>
                <p className='tr'>№</p>
                <p className='name'>ISM FAMILIYA</p>
                <p className='type-of-game'>KLASSIKA
                    <img src={ Vector} alt="icon" />
                </p>
                <p className='rapid-head'>RAPID
                    <img src={ Vector} alt="icon" />
                </p>
                <p className='blitz-head'>BLITZ
                    <img src={ Vector} alt="icon" />
                </p>
            </div>

            <div className='card-body'>
                <MainList data={ data} />
            </div>
        </div>
    )
}

export function MainList({data}) {
    console.log(data)
    return (
        <>
        {
                data.map(item => (
                <div className='body-section' key={item.id}>
                    <p className='serial-number'>{item.serialNumber }</p>
                    <div className='person-name'>
                        <img src={item.personImg} alt="img" />
                        <h5>{ item.personName}</h5>
                        <img src={item.flagIcon} alt="icon" />
                    </div>
                    <div className='score'>
                        <h6>{ item.classicPoints}</h6>
                        <p>{ item.pointsAdd}</p>
                    </div>
                    <h6 className='rapid-body'>{ item.rapidPoints}</h6>
                    <h6 className='blitz-body'>{ item.blitzPoints}</h6>
                </div>
            ))
        }
        </>

    )
 }