import {FormComponentProps, FormStep} from "../../../interfaces/formStep.ts";
import {fourthStepInfo} from "../../../constants/fourthStepInfo.ts";
import {ButtonPrev} from "../../atoms/buttonPrev/ButtonPrev.tsx";
import {ButtonNext} from "../../atoms/buttonNext/ButtonNext.tsx";
import {OptionsButtonsGrid} from "../../atoms/optionsButtonsGrid/OptionsButtonsGrid.tsx";
import styles from "./fourth.module.css";

export const FourthStepComponent = ({ handleStepData, handleSetStep, currentStep , stepData}: FormComponentProps )=> {
    return (
        <section className={styles.containerStep}>
            <p>{fourthStepInfo.question}</p>
            <OptionsButtonsGrid options={fourthStepInfo.options} handleStepData={handleStepData} currentStep={currentStep} stepData={stepData}/>
            <div className={styles.containerButtons}>
                <ButtonPrev handleSetStep={() => handleSetStep(FormStep.STEP_THREE)}/>
                <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_FIVE)} text={"siguiente"}/>
            </div>
        </section>
    );
};