import {FormComponentProps, FormSteps} from "../../interfaces/formSteps.ts";
import questionsData from "../../constants/questions.ts";
import {Button} from "../atoms/Button.tsx";




export const SecondStepComponent = ({ handleStepData, handleSetStep, currentStep , stepData }: FormComponentProps )=> {

    return (
        <section>
            <p>Estoy en el step: {currentStep}</p>
            <p>{`Genial ${stepData[FormSteps.STEP_ONE]}, ahora nos gustaría tener cierta info para diseñar una gran propuesta de valor para ti:`}</p>
            <p>{questionsData[1].text}</p>
            <input onChange={(e) => handleStepData(FormSteps.STEP_TWO, e.target.value)} type="text"/>
            <Button handleSetStep={() => handleSetStep(FormSteps.STEP_ONE)} />
            <Button handleSetStep={() => handleSetStep(FormSteps.STEP_THREE)} />
        </section>
    );
};
