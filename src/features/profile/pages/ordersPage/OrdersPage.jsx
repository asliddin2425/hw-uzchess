import { PageTitle } from "../../components/PageTitle/PageTitle";
import { Filter } from "./components/Filter/Filter";
import { SaveCards } from "./components/SaveCards/SaveCards";

export function OrdersPage() { 
    return (
        <>
            <PageTitle/>
            <Filter />
            <SaveCards/>
            
        </>
    )
}