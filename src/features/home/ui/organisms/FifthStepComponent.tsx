import {FormComponentProps, FormStep} from "../../interfaces/formStep.ts";
import {fifthStepInfo} from "../../constants/fifthStepInfo.ts";
import IconBack from "../../../../assets/button-back.png";
import {OptionButtonGroup} from "../atoms/OptionButtonGroup.tsx";
import {ButtonPrev} from "../atoms/ButtonPrev.tsx";
import {ButtonNext} from "../atoms/ButtonNext.tsx";




export const FifthStepComponent = ({ handleStepData, handleSetStep, currentStep, stepData }: FormComponentProps )=> {
    return (
        <section>
            <p>Estoy en el step: {currentStep}</p>
            <p>{fifthStepInfo.question}</p>
            <OptionButtonGroup options={fifthStepInfo.options} handleStepData={handleStepData} currentStep={currentStep} stepData={stepData}/>
            <ButtonPrev handleSetStep={() => handleSetStep(FormStep.STEP_FOUR)} img={IconBack}/>
            <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_SIX)} text={"Siguiente"}/>
        </section>
    );
};
