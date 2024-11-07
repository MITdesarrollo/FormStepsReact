import styles from "./buttonNext.module.css";
import Arrow from '../../../../../assets/arrow.png';
interface ButtonProps {
    handleSetStep: () => void;
    text: string;
    isNextStepDisable: () => boolean;
}

export const ButtonNext = ({ handleSetStep , text,isNextStepDisable }: ButtonProps) => {
    return (
        <button disabled={isNextStepDisable()} className={`${isNextStepDisable() && styles.disable} ${styles.button} `} onClick={handleSetStep}>{text} <img className={styles.arrow} src={Arrow} alt="flecha hacia la derecha"/></button>
    );
};
