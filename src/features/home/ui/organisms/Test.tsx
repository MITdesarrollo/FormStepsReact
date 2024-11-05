import {FormSteps} from "../../../../App.tsx";

interface Props {
    handleStepData: (key: FormSteps, data: string) => void;
    handleSetStep: (step: FormSteps) => void;
    currentStep: FormSteps;
}

export const Test = ({ handleStepData, handleSetStep, currentStep }: Props )=> {
    return (
        <section>
            <h1>Ingrese su nombre</h1>
            <h2>Estoy en el step: {currentStep}</h2>
            <input onChange={(e) => handleStepData(FormSteps.STEP_ONE, e.target.value)} type="text"/>
            <button onClick={() => handleSetStep(FormSteps.STEP_TWO)}></button>
            <button onClick={() => handleSetStep(FormSteps.STEP_ONE)}></button>
        </section>
    );
};
