
import { Card } from "../../courses/components/Card/Card";
import { Filter } from "../../courses/components/Filter/Filter";
import { PageTitle } from "../../courses/components/PageTitle/PageTitle";
import { Acide } from "../../courses/components/Acide/Acide";

export function CoursesPage() { 
    return (
        <>
            <PageTitle />
            <Card />
            <Filter/>
            {/* <Acide/> */}
        </>
        
    )
}