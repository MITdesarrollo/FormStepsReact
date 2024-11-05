import {FormComponentProps, FormSteps} from "../../interfaces/formSteps.ts";
import questionsData from "../../constants/questions.ts";
import {Button} from "../atoms/Button.tsx";




export const FourthStepComponent = ({ handleStepData, handleSetStep, currentStep }: FormComponentProps )=> {
    return (
        <section>
            <p>Estoy en el step: {currentStep}</p>
            <p>{questionsData[4].text}</p>
            <input onChange={(e) => handleStepData(FormSteps.STEP_FOUR, e.target.value)} type="text"/>
            <Button handleSetStep={() => handleSetStep(FormSteps.STEP_THREE)} />
            <Button handleSetStep={() => handleSetStep(FormSteps.STEP_FIVE)} />
        </section>
    );
};
