import { RatingPageTitle } from "../../rating/components/PageTitle/PageTitle";
import { Main } from "../../rating/components/Main/Main";
import { Filter} from '../../rating/components/Filter/Filter'

export function RatingPAge() { 
    return (
        <>
            <RatingPageTitle />
            <Filter/>
            <Main/>
        </>
    )
}