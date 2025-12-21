import styles from './PageTitle.module.css'
export function PageTitle() { 
    return (
        <div className={styles.pageTitle}>
            <img src="./src/assets/icons/person.svg" alt="icon" />
            <p>Jasurbek Polatov</p>
        </div>
    )
}