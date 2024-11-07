import styles from "../../template/home.module.css";
import { FormStep } from "../../../interfaces/formStep.ts";

interface Props{
    formStep: FormStep
}
export const ProgressionBar = ({ formStep }: Props) => {

    const stepNumber = parseInt(formStep, 10);
    const progressWidth = `${(100 / 6) * stepNumber}%`;

    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} style={{ width: progressWidth }}/>
        </div>
    )
}
