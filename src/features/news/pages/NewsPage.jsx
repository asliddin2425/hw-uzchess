
import { NewsList } from "../../news/components/main/newsList";
import { NewsSearch } from "../../news/components/newsSearch/newsSearch";
import { AcideCard } from '../../news/components/acide/acideList';

// import { NewsData} from '../components/main/'
export function NewsPage() {
    return (
        <>
            <NewsSearch />
            <AcideCard />
            <NewsList />
        </>
    )
}