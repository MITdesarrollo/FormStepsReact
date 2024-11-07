import { FormComponentProps, FormStep } from "../../../interfaces/formStep.ts";
import { fourthStepInfo } from "../../../constants/fourthStepInfo.ts";
import { ButtonPrev } from "../../atoms/buttonPrev/ButtonPrev.tsx";
import { ButtonNext } from "../../atoms/buttonNext/ButtonNext.tsx";
import { OptionsButtonsGrid } from "../../atoms/optionsButtonsGrid/OptionsButtonsGrid.tsx";
import styles from "./fourth.module.css";
import { StepContainer } from "../stepContainer/StepContainer.tsx";

export const FourthStepComponent = ({ handleStepData, handleSetStep, currentStep , stepData , isNextStepDisable }: FormComponentProps )=> {
    return (
        <StepContainer>
            <div className={styles.containerText}>
                <p>{fourthStepInfo.question}</p>
                <p className={styles.subtitle}>{fourthStepInfo.subtitle}</p>
            </div>
            <OptionsButtonsGrid options={fourthStepInfo.options} handleStepData={handleStepData}
                                currentStep={currentStep} stepData={stepData}/>
            <div className={styles.containerButtons}>
                <ButtonPrev handleSetStep={() => handleSetStep(FormStep.STEP_THREE)}/>
                <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_FIVE)} text={"siguiente"}
                            isNextStepDisable={isNextStepDisable}/>
            </div>
        </StepContainer>
    );
};
