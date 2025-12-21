import { Filter } from '../games/components/Filter/Filter';
import { GamesPageTitle} from '../games/components/PageTitle/PageTitle';
import styles from './GamesPage.module.css';
export function GamesPage() {
    return (
        <>
            <GamesPageTitle />
            <Filter/>
        </>
    )
}