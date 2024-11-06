import styles from "./buttonNext.module.css";
import Arrow from '../../../../../assets/arrow.png';
interface ButtonProps {
    handleSetStep: () => void;
    text: string;
}

export const ButtonNext: React.FC<ButtonProps> = ({ handleSetStep , text }) => {
    return (
        <button className={styles.button} onClick={handleSetStep}>{text} <img className={styles.arrow} src={Arrow} alt="flecha hacia la derecha"/></button>
    );
};
