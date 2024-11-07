import { FormComponentProps, FormStep } from "../../../interfaces/formStep.ts";
import { thirdStepInfo } from "../../../constants/thirdStepInfo.ts";
import { ButtonPrev } from "../../atoms/buttonPrev/ButtonPrev.tsx";
import { ButtonNext } from "../../atoms/buttonNext/ButtonNext.tsx";
import { OptionsButtonsLetters } from "../../atoms/optionsButtonsLetters/OptionsButtonsLetters.tsx";
import styles from "./tirdthStep.module.css";
import { StepContainer } from "../stepContainer/StepContainer.tsx";



export const ThirdStepComponent = ({ handleSetStep, currentStep ,handleStepData,stepData , isNextStepDisable }: FormComponentProps )=> {
    return (
        <StepContainer>
            <p>{thirdStepInfo.question}</p>
            <OptionsButtonsLetters options={thirdStepInfo.options} handleStepData={handleStepData}
                                   currentStep={currentStep} stepData={stepData}/>
            <div className={styles.containerButtons}>
                <ButtonPrev handleSetStep={() => handleSetStep(FormStep.STEP_TWO)}/>
                <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_FOUR)} text={"Siguiente"}
                            isNextStepDisable={isNextStepDisable}/>
            </div>
        </StepContainer>
    );
};
