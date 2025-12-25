import styles from './MainContacts.module.css'
import WorkTimeIcon from '../../../../assets/icons/workTimeIcon.svg'
import GmailIcon from '../../../../assets/icons/gmail.svg'
import TelIcon from '../../../../assets/icons/telIcon.svg'
import TrainIcon from '../../../../assets/icons/trainIcon.svg'
import ValidationIcon from '../../../../assets/icons/validation.svg'
import React, { useState } from 'react';
export function MainContacts() {
    const [showModal, setShowModal] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    }
    return (
        <>
            <div className={styles.container}>
                <p className={styles.title}> Bog'lanish</p>
                <div className={styles.contactsForm}>
                    <div className={styles.connectYou}>
                        <div className={styles.userName}>
                            <label htmlFor="">Siz bilan bog‘lanish</label>
                            <input type="text" placeholder='Ism familiyangizni kiriting' />
                        </div>
                        <div className={styles.userTelNumber}>
                            <label htmlFor="">Telefon raqamingiz</label>
                            <div className={styles.telNumber}>
                                <div className={styles.telCode}>+998</div>
                                <input type="tel"  placeholder='_ _  _ _ _  _ _  _ _' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.report}>
                        <p>Shikoyat</p>
                        <div className={styles.reportInput}>
                            <input type="text"   placeholder='Matnni yozing'/>
                        </div>
                    </div>
                    <div className={styles.termsOfUse}>
                        <input type="checkbox" />
                        <p>Foydalanish <a href=''>shartlari</a> va <a href=''>qoidalarini</a>  qabul qilaman</p> 
                        <button type='button' className={styles.sent} onClick={handleSubmit}>Yuborish</button>
                        {showModal && (
                            <div className={styles.modalOverlay}>
                                <div className={styles.modalContent}>  
                                    <img className={styles.successIcon} src={ValidationIcon} alt="icon" />
                                    <div className={styles.status}>
                                        <h1>Muvaffaqiyatli yuborildi</h1>
                                        <p>Shikoyatingiz muvoffaqiyatli yuborildi</p>
                                    </div>
                                    <button className={styles.btn}>Kursni ko'rish</button>
                                </div>
                                <button className={styles.closeBtn} onClick={() => setShowModal(false)}>×</button>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.contactsInfo}>
                    <div className={styles.infoCard}>
                        <img src={WorkTimeIcon} alt="icon" />
                        <div className={styles.workTime}>
                            <p>Ish vaqti</p>
                            <h5>Dushanba-Juma 9:00-18:00</h5>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <img src={GmailIcon} alt="icon" />
                        <div className={styles.workTime}>
                            <p>E-mail</p>
                            <h5>info@chessnation.uz</h5>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <img src={TelIcon} alt="icon" />
                        <div className={styles.workTime}>
                            <p>Telefon</p>
                            <h5>+998 (71) 203 55 11</h5>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <img src={TrainIcon} alt="icon" />
                        <div className={styles.workTime}>
                            <p>Yaqin metro</p>
                            <h5>Mingo‘rik</h5>
                        </div>
                    </div>
                </div>
            </div>
            <iframe className={styles.maps}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4639.
            790016934439!2d69.20555942685978!3d41.285036399841005!2m3!1f0!2f0!3f0!
            3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;
            lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1766638904829!5m2!1sru!2s">

            </iframe>
        </>
    )
}
