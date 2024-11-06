import { FormComponentProps, FormStep } from "../../../interfaces/formStep.ts";
import {firstStepInfo} from "../../../constants/firstStepInfo.ts";
import {ButtonNext} from "../../atoms/buttonNext/ButtonNext.tsx";
import styles from "./firstStep.module.css";

export const FirstStepComponent = ({ handleStepData, handleSetStep }: FormComponentProps) => {
    return (
        <section className={styles.containerStep}>
            <p>{firstStepInfo.text} <b>{firstStepInfo.highlightedText}</b> {firstStepInfo.afterText}</p>
            <p>{firstStepInfo.question}</p>
            <input
                className={styles.inputText}
                placeholder={"Nombre"}
                onChange={(e) => handleStepData(FormStep.STEP_ONE, e.target.value)}
                type={firstStepInfo.type}
            />
            <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_TWO)} text={"Comenzar"}/>
        </section>
    );
};
