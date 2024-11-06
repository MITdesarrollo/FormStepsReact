import { FormComponentProps, FormStep } from "../../interfaces/formStep.ts";
import {firstStepInfo} from "../../constants/firstStepInfo.ts";
import {ButtonNext} from "../atoms/ButtonNext.tsx";

export const FirstStepComponent = ({ handleStepData, handleSetStep, currentStep }: FormComponentProps) => {
    return (
        <section>
            <p>Estoy en el step: {currentStep}</p>
            <p>{firstStepInfo.text}</p>
            <p>{firstStepInfo.question}</p>
            <input
                onChange={(e) => handleStepData(FormStep.STEP_ONE, e.target.value)}
                type={firstStepInfo.type}
            />
            <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_TWO)} text={"Siguiente"}/>
        </section>
    );
};
