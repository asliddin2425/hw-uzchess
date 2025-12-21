import { PageTitle } from '../../profile/components/PageTitle/PageTitle';
import { Profile } from '../../profile/components/ProfileCard/ProfileCard';
import { Filter} from '../../profile/components/Filter/Filter'
export function ProfilePage() {
    return (
        <>
            <PageTitle />
            <Profile />
            <Filter />
        </>
    )
}