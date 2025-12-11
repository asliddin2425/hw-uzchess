
import { Card } from "../../courses/components/Card/Card";

import { PageTitle } from "../../courses/components/PageTitle/PageTitle";

import { Filter } from "../../courses/components/Filter/Filter";
export function CoursesPage() { 
    return (
        <>
            <PageTitle />
            <Filter/>
            <Card />
        </>
        
    )
}