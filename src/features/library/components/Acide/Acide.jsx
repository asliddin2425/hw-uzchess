import styles from './Acide.module.css'
import DonationIcon from '../../../../assets/icons/donationIcon.svg'
import Banner from '../../../../assets/images/banner.svg'

export function Acide() { 
    return (
        <>
            <div className={ styles.acide}>
                <AcideBanner />
                <AcideDonation/>
            </div>

        </>
    )
}

export function AcideDonation() { 
    return (
        <>
            <div className={ styles.acideDonation}>
                <img src={DonationIcon} alt="icon" />
                    <p>Loyiha rivojiga xissa</p>
                    <h6>Shaxmat rivojiga hissa qo‘shing</h6>
                    <button>soon</button>
            </div>
        </>
    )
}

export function AcideBanner() {
    return (
        <>
            <div className={styles.banner}>
                <img src={ Banner} alt="img" />
            </div>
        </>
    )
}