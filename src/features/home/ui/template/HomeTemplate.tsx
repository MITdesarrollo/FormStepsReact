import React from 'react';
import {FormSteps} from "../../interfaces/formSteps.ts";
import {
    FifthStepComponent,
    FirstStepComponent,
    FourthStepComponent,
    SecondStepComponent, SixthStepComponent,
    ThirdStepComponent
} from "../organisms";

const mappedComponent = {
    [FormSteps.STEP_ONE]: FirstStepComponent,
    [FormSteps.STEP_TWO]: SecondStepComponent,
    [FormSteps.STEP_THREE]: ThirdStepComponent,
    [FormSteps.STEP_FOUR]: FourthStepComponent,
    [FormSteps.STEP_FIVE]: FifthStepComponent,
    [FormSteps.STEP_SIX]: SixthStepComponent,
};

export const HomeTemplate: React.FC = () => {
    const [formSteps, setFormSteps] = React.useState<FormSteps>(FormSteps.STEP_ONE);
    const [ stepData, setStepData ] = React.useState<Record<FormSteps, string>>({
        [FormSteps.STEP_ONE]: '',
        [FormSteps.STEP_TWO]: '',
        [FormSteps.STEP_THREE]: '',
        [FormSteps.STEP_FOUR]: '',
        [FormSteps.STEP_FIVE]: '',
        [FormSteps.STEP_SIX]: '',
    });

    const handleStepData = (key: FormSteps, data: string) => {
        setStepData((prevState) => ({...prevState, [key]: data }));
    };

    const handleSetFormStep = (step: FormSteps) => {
        setFormSteps(step);
    };

    const CurrentComponent = mappedComponent[formSteps];


    return (
        <CurrentComponent  handleStepData={handleStepData} handleSetStep={handleSetFormStep} currentStep={formSteps} stepData={stepData}/>
    );
};
