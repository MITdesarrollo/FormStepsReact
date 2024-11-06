import {FormComponentProps, FormStep} from "../../interfaces/formStep.ts";
import {thirdStepInfo} from "../../constants/thirdStepInfo.ts";
import IconBack from "../../../../assets/button-back.png";
import {ButtonPrev} from "../atoms/ButtonPrev.tsx";
import {ButtonNext} from "../atoms/ButtonNext.tsx";
import {OptionButtonGroup} from "../atoms/OptionButtonGroup.tsx";



export const ThirdStepComponent = ({ handleSetStep, currentStep ,handleStepData,stepData}: FormComponentProps )=> {
    return (
        <section>
            <p>Estoy en el step: {currentStep}</p>
            <p>{thirdStepInfo.question}</p>
            <OptionButtonGroup options={thirdStepInfo.options} handleStepData={handleStepData} currentStep={currentStep} stepData={stepData}/>
            <ButtonPrev handleSetStep={() => handleSetStep(FormStep.STEP_TWO)} img={IconBack}/>
            <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_FOUR)} text={"Siguiente"}/>
        </section>
    );
};
