import {FormComponentProps, FormStep} from "../../interfaces/formStep.ts";
import {secondStepInfo} from "../../constants/secondStepInfo.ts";
import IconBack from "../../../../assets/button-back.png"
import {OptionButtonGroup} from "../atoms/OptionButtonGroup.tsx";
import {ButtonPrev} from "../atoms/ButtonPrev.tsx";
import {ButtonNext} from "../atoms/ButtonNext.tsx";



export const SecondStepComponent = ({handleStepData, handleSetStep, currentStep, stepData}: FormComponentProps) => {

    return (
        <section>
            <p>Estoy en el step: {currentStep}</p>
            <p>{`Genial ${stepData[FormStep.STEP_ONE]}, ahora nos gustaría tener cierta info para diseñar una gran propuesta de valor para ti:`}</p>
            <p>{secondStepInfo.question}</p>
            <OptionButtonGroup options={secondStepInfo.options} handleStepData={handleStepData} currentStep={currentStep} stepData={stepData}/>
            <ButtonPrev handleSetStep={() => handleSetStep(FormStep.STEP_ONE)} img={IconBack}/>
            <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_THREE)} text={"Siguiente"}/>
        </section>
    );
};
