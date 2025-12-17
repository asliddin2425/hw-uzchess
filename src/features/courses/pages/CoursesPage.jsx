
import { Card } from "../../courses/components/Card/Card";

import { PageTitle } from "../../courses/components/PageTitle/PageTitle";

import { Filter } from "../../courses/components/Filter/Filter";
import { Acide } from '../../courses/components/Acide/Acide';
import styles  from './CoursesPage.module.css'
export function CoursesPage() { 
    return (
        <div className={styles.coursesPage}>
            <PageTitle />    
            <Filter />
            <Acide/>
            <Card />
            
        </div>


        
    )
}