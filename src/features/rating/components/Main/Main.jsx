import { RatingData } from '../../../../Api/Api'
import { MainCard } from './MainCard'
export function Main() { 
    return (
        <>
            {/* {MainData.map(it => (<MainCard key={it.id}  {...it} />))} */}
            <MainCard data={ RatingData} />
        </>
    )
}