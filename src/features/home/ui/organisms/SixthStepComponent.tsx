import {FormComponentProps, FormStep} from "../../interfaces/formStep.ts";
import {sixthStepInfo} from "../../constants/sixthStepInfo.ts";
import {ButtonPrev} from "../atoms/ButtonPrev.tsx";
import {ButtonNext} from "../atoms/ButtonNext.tsx";
import IconBack from "../../../../assets/button-back.png";





export const SixthStepComponent = ({ handleSetStep, currentStep  }: FormComponentProps )=> {
    return (
        <section>
            <p>Estoy en el step: {currentStep}</p>
            <h2><span>{sixthStepInfo.firstPartTitle}</span> {sixthStepInfo.secondPartTitle}</h2>
            <p>{sixthStepInfo.subtitle}</p>

            <ButtonPrev handleSetStep={() => handleSetStep(FormStep.STEP_FIVE)} img={IconBack}/>
            <ButtonNext handleSetStep={() => handleSetStep(FormStep.STEP_ONE)} text={"Finalizar"} />
        </section>
    );
};
