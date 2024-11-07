import { FormComponentProps, FormStep } from "../../../interfaces/formStep.ts";
import { secondStepInfo } from "../../../constants/secondStepInfo.ts";
import { OptionsButtonsGrid } from "../../atoms/optionsButtonsGrid/OptionsButtonsGrid.tsx";
import { ButtonPrev } from "../../atoms/buttonPrev/ButtonPrev.tsx";
import { ButtonNext } from "../../atoms/buttonNext/ButtonNext.tsx";
import styles from "./secondStep.module.css";
import { StepContainer } from "../stepContainer/StepContainer.tsx";


export const SecondStepComponent = ({ handleStepData, handleSetStep, currentStep, stepData , isNextStepDisable }: FormComponentProps) => {

    return (
        <StepContainer>
            <div className={styles.containerText}>
                <p>
                    <b className={styles.textBold}>{`Genial ${stepData[FormStep.STEP_ONE]},`}</b> ahora nos gustaría
                    tener cierta info para diseñar una
                    gran propuesta de valor para ti:
                </p>
                <p>{secondStepInfo.question}</p>
            </div>
            <OptionsButtonsGrid
                options={secondStepInfo.options}
                handleStepData={handleStepData}
                currentStep={currentStep}
                stepData={stepData}
            />
            <div className={styles.containerButtons}>
                <ButtonPrev handleSetStep={() => handleSetStep(FormStep.STEP_ONE)}/>
                <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_THREE)} text={"Siguiente"}
                            isNextStepDisable={isNextStepDisable}/>
            </div>
        </StepContainer>
    );
};
