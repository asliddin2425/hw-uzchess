
import { Filter } from "../../courses/components/Filter/Filter";
import { PageTitle } from "../../library/components/PageTitle/PageTitle";
import { Card } from "../../library/components/main/Card";
import {Acide } from '../../library/components/Acide/Acide'

export function LibraryPage() { 
    return (
        <>
            <PageTitle />
            <Filter />
            <Acide/>
            <Card />
            
            
        </>
        
    )
}