import {FormComponentProps, FormSteps} from "../../interfaces/formSteps.ts";
import questionsData from "../../constants/questions.ts";
import {Button} from "../atoms/Button.tsx";




export const ThirdStepComponent = ({ handleStepData, handleSetStep, currentStep }: FormComponentProps )=> {
    return (
        <section>
            <p>Estoy en el step: {currentStep}</p>
            <p>{questionsData[2].text}</p>
            <input onChange={(e) => handleStepData(FormSteps.STEP_THREE, e.target.value)} type="text"/>
            <Button handleSetStep={() => handleSetStep(FormSteps.STEP_TWO)} />
            <Button handleSetStep={() => handleSetStep(FormSteps.STEP_FOUR)} />
        </section>
    );
};
