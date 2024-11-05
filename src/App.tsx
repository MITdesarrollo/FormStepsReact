import React, {useEffect} from 'react';
import {Test} from "./features/home/ui/organisms/Test.tsx";


export enum FormSteps {
    STEP_ONE = 'STEP_1',
    STEP_TWO = 'STEP_2',
    STEP_THREE = 'STEP_3',
    STEP_FOUR = 'STEP_4',
    STEP_FIVE = 'STEP_5',
    STEP_SIX = 'STEP_6',
};

const mappedComponent = {
    [FormSteps.STEP_ONE]: Test,
    [FormSteps.STEP_TWO]: Test,
    [FormSteps.STEP_THREE]: Test,
    [FormSteps.STEP_FOUR]: Test,
    [FormSteps.STEP_FIVE]: Test,
    [FormSteps.STEP_SIX]: Test,
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
        <CurrentComponent handleStepData={handleStepData} handleSetStep={handleSetFormStep} currentStep={formSteps}/>
    );
};

export default App;
