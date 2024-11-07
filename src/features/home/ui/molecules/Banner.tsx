import styles from "../template/home.module.css";
import Logo from "../../../../assets/Group 171.png";
import Line from "../../../../assets/line.png";
import PersonBanner from "../../../../assets/persona-banner.svg";
import { FormStep } from "../../interfaces/formStep.ts";

interface Props{
    formStep: FormStep
}
export const Banner = ({ formStep }: Props) => {
    return (
        <section className={styles.containerBanner}>
            <div className={styles.figureBanner}>
                <img className={styles.logoBanner} src={Logo} alt="Logo customer scoop"/>
                <div className={styles.containerPersonSteps}>
                    <p className={styles.stepsNumber}>
                        <span className={styles.currentStep}>{formStep}</span>
                        <img loading={"lazy"} src={Line} alt="Line" className={styles.line}/>
                        <span className={styles.totalStep}>06</span>
                    </p>
                    <img className={styles.imageBanner} src={PersonBanner}
                         alt="Hombre sonriendo mientras mira su teléfono"/>
                </div>
            </div>
        </section>
    )

}
