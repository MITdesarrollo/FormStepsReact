import {FormComponentProps, FormStep} from "../../../interfaces/formStep.ts";
import {fifthStepInfo} from "../../../constants/fifthStepInfo.ts";
import {OptionsButtonsGrid} from "../../atoms/optionsButtonsGrid/OptionsButtonsGrid.tsx";
import {ButtonPrev} from "../../atoms/buttonPrev/ButtonPrev.tsx";
import {ButtonNext} from "../../atoms/buttonNext/ButtonNext.tsx";
import styles from "./fifthStep.module.css";




export const FifthStepComponent = ({ handleStepData, handleSetStep, currentStep, stepData }: FormComponentProps )=> {
    return (
        <section className={styles.containerStep}>
            <p>{fifthStepInfo.question}</p>
            <OptionsButtonsGrid options={fifthStepInfo.options} handleStepData={handleStepData} currentStep={currentStep} stepData={stepData}/>
            <div className={styles.containerButtons}>
                <ButtonPrev handleSetStep={() => handleSetStep(FormStep.STEP_FOUR)}/>
                <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_SIX)} text={"Siguiente"}/>
            </div>
        </section>
    );
};
