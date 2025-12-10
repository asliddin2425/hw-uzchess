import { Navbar } from "../../main/components/Navbar/Navbar";
import { PageTitles } from "../../main/components/PageTitles/PageTitles";
import { FinishedMatches } from "../../main/components/Matches/FinishedMatches";
import { Ads} from '../../main/components/Ads/Ads'
import { Acide } from "../../main/components/Acide/Acide";

export function MainPage() { 
    return (
        <>
            <PageTitles />
            <Navbar />
            <FinishedMatches />
            <Ads />
            <Acide/>
        </>

    )
}