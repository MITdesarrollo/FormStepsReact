import styles from './buttonPrev.module.css';
import IconBack from "../../../../../assets/button-back.png"
interface ButtonProps {
    handleSetStep: () => void;
}

export const ButtonPrev = ({ handleSetStep }: ButtonProps) => {
    return (
        <button className={styles.buttonPrev} onClick={handleSetStep}><img src={IconBack} alt="Flecha hacia la izquierda"/></button>
    );
};
