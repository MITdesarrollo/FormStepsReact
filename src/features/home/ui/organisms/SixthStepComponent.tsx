import {FormComponentProps, FormSteps} from "../../interfaces/formSteps.ts";
import {Button} from "../atoms/Button.tsx";




export const SixthStepComponent = ({ handleStepData, handleSetStep, currentStep }: FormComponentProps )=> {
    return (
        <section>
            <h1>Ingrese su nombre</h1>
            <h2>Estoy en el step: {currentStep}</h2>
            <input onChange={(e) => handleStepData(FormSteps.STEP_SIX, e.target.value)} type="text"/>
            <Button handleSetStep={() => handleSetStep(FormSteps.STEP_FIVE)} />
            <button>finalizar</button>
        </section>
    );
};
