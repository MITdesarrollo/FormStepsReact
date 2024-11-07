import { FormComponentProps, FormStep } from "../../../interfaces/formStep.ts";
import { fifthStepInfo } from "../../../constants/fifthStepInfo.ts";
import { OptionsButtonsGrid } from "../../atoms/optionsButtonsGrid/OptionsButtonsGrid.tsx";
import { ButtonPrev } from "../../atoms/buttonPrev/ButtonPrev.tsx";
import { ButtonNext } from "../../atoms/buttonNext/ButtonNext.tsx";
import styles from "./fifthStep.module.css";
import { StepContainer } from "../stepContainer/StepContainer.tsx";




export const FifthStepComponent = ({ handleStepData, handleSetStep, currentStep, stepData, isNextStepDisable }: FormComponentProps )=> {
    return (
        <StepContainer>
            <div className={styles.containerText}>
                <h2>{fifthStepInfo.title}</h2>
                <p>{fifthStepInfo.question}</p>
            </div>
            <OptionsButtonsGrid options={fifthStepInfo.options} handleStepData={handleStepData} currentStep={currentStep} stepData={stepData}/>
            <div className={styles.containerButtons}>
                <ButtonPrev handleSetStep={() => handleSetStep(FormStep.STEP_FOUR)}/>
                <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_SIX)} text={"Siguiente"} isNextStepDisable={isNextStepDisable}/>
            </div>
        </StepContainer>
    );
};
