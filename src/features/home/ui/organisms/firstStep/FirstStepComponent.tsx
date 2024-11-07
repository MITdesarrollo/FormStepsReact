import { FormComponentProps, FormStep } from "../../../interfaces/formStep.ts";
import { firstStepInfo } from "../../../constants/firstStepInfo.ts";
import { ButtonNext } from "../../atoms/buttonNext/ButtonNext.tsx";
import styles from "./firstStep.module.css";
import { StepContainer } from "../stepContainer/StepContainer.tsx";

export const FirstStepComponent = ({ handleStepData, handleSetStep , isNextStepDisable }: FormComponentProps) => {
    return (
        <StepContainer>
            <div className={styles.containerText}>
                <p>{firstStepInfo.text} <b
                    className={styles.textBold}>{firstStepInfo.highlightedText}</b> {firstStepInfo.afterText}</p>
                <p>{firstStepInfo.question}</p>
            </div>
            <input
                className={styles.inputText}
                placeholder={"Nombre"}
                onChange={(e) => handleStepData(FormStep.STEP_ONE, e.target.value)}
                type={firstStepInfo.type}
            />
            <div className={styles.containerButton}>
                <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_TWO)} text={"Comenzar"}
                            isNextStepDisable={isNextStepDisable}/>
            </div>
        </StepContainer>


    );
};
