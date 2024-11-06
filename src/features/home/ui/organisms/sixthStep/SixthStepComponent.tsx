import {FormComponentProps, FormStep} from "../../../interfaces/formStep.ts";
import {sixthStepInfo} from "../../../constants/sixthStepInfo.ts";
import {ButtonNext} from "../../atoms/buttonNext/ButtonNext.tsx";
import styles from "./sixthStep.module.css";


export const SixthStepComponent = ({ handleSetStep  }: FormComponentProps )=> {
    return (
        <section className={styles.containerStep}>
            <h2 className={styles.text}><span className={styles.thanksText}>{sixthStepInfo.firstPartTitle}</span> {sixthStepInfo.secondPartTitle}</h2>
            <p className={styles.secondText}>{sixthStepInfo.subtitle}</p>
         <div className={styles.containerButtons}>
             <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_ONE)} text={"Finalizar"} />
          </div>
        </section>
    );
};
