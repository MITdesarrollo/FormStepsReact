import { FormComponentProps, FormSteps } from "../../interfaces/formSteps.ts";
import questionsData from "../../constants/questions.ts";
import { Button } from "../atoms/Button.tsx";

export const FirstStepComponent = ({ handleStepData, handleSetStep, currentStep }: FormComponentProps) => {
    return (
        <section>
            <p>Estoy en el step: {currentStep}</p>
            <p>
                Muchas gracias por tu interés en conocer customerScoops, que a través de Formularios Conversacionales
                Inteligentes te ayudamos a aumentar el revenue y rentabilidad de tu negocio.
            </p>
            <p>{questionsData[0].text}</p>
            <input
                onChange={(e) => handleStepData(FormSteps.STEP_ONE, e.target.value)}
                type="text"
            />
            <Button handleSetStep={() => handleSetStep(FormSteps.STEP_TWO)} />
        </section>
    );
};
