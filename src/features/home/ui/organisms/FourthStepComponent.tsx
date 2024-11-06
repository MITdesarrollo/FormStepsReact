import {FormComponentProps, FormStep} from "../../interfaces/formStep.ts";
import {fourthStepInfo} from "../../constants/fourthStepInfo.ts";
import IconBack from "../../../../assets/button-back.png";
import {ButtonPrev} from "../atoms/ButtonPrev.tsx";
import {ButtonNext} from "../atoms/ButtonNext.tsx";
import {OptionButtonGroup} from "../atoms/OptionButtonGroup.tsx";





export const FourthStepComponent = ({ handleStepData, handleSetStep, currentStep , stepData}: FormComponentProps )=> {
    return (
        <section>
            <p>Estoy en el step: {currentStep}</p>
            <p>{fourthStepInfo.question}</p>
            <OptionButtonGroup options={fourthStepInfo.options} handleStepData={handleStepData} currentStep={currentStep} stepData={stepData}/>
            <ButtonPrev handleSetStep={() => handleSetStep(FormStep.STEP_THREE)} img={IconBack}/>
            <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_FIVE)} text={"siguiente"}/>
        </section>
    );
};
