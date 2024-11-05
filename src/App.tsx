import React, {useEffect} from 'react';

import {FormSteps} from "./features/home/interfaces/formSteps.ts";
import {FirstStepComponent} from "./features/home/ui/organisms/FirstStepComponent.tsx";
import {SecondStepComponent} from "./features/home/ui/organisms/SecondStepComponent.tsx";
import {ThirdStepComponent} from "./features/home/ui/organisms/ThirdStepComponent.tsx";
import {FourthStepComponent} from "./features/home/ui/organisms/FourthStepComponent.tsx";
import {FifthStepComponent} from "./features/home/ui/organisms/FifthStepComponent.tsx";
import {SixthStepComponent} from "./features/home/ui/organisms/SixthStepComponent.tsx";


const mappedComponent = {
    [FormSteps.STEP_ONE]: FirstStepComponent,
    [FormSteps.STEP_TWO]: SecondStepComponent,
    [FormSteps.STEP_THREE]: ThirdStepComponent,
    [FormSteps.STEP_FOUR]: FourthStepComponent,
    [FormSteps.STEP_FIVE]: FifthStepComponent,
    [FormSteps.STEP_SIX]: SixthStepComponent,
};

const App: React.FC = () => {
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

    useEffect(() => {
        console.log(stepData);
    }, [stepData]);

    const CurrentComponent = mappedComponent[formSteps];


    return (
        <CurrentComponent  handleStepData={handleStepData} handleSetStep={handleSetFormStep} currentStep={formSteps} stepData={stepData}/>
    );
};

export default App;
