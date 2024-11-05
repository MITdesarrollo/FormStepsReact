import {FormComponentProps, FormSteps} from "../../interfaces/formSteps.ts";
import questionsData from "../../constants/questions.ts";
import {Button} from "../atoms/Button.tsx";




export const FifthStepComponent = ({ handleStepData, handleSetStep, currentStep }: FormComponentProps )=> {
    return (
        <section>
            <p>Estoy en el step: {currentStep}</p>
            <p>{questionsData[5].text}</p>
            <input onChange={(e) => handleStepData(FormSteps.STEP_FIVE, e.target.value)} type="text"/>
            <Button handleSetStep={() => handleSetStep(FormSteps.STEP_FOUR)} />
            <Button handleSetStep={() => handleSetStep(FormSteps.STEP_SIX)} />
        </section>
    );
};
