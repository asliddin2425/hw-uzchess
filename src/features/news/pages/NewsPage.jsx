
import { NewsList } from "../../news/components/main/newsList";
import { NewsSearch } from "../../news/components/newsSearch/newsSearch";
import { AcideCard } from '../../news/components/acide/acideList';

export function NewsPage() {
    return (
        <>
            <NewsSearch />
            <AcideCard />
            <NewsList />
        </>
    )
}