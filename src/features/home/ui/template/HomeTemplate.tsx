import React from 'react';
import { FormStep } from "../../interfaces/formStep.ts";
import Logo from "../../../../assets/Group 171.png";
import styles from "./home.module.css";

import {
    FifthStepComponent,
    FirstStepComponent,
    FourthStepComponent,
    SecondStepComponent, SixthStepComponent,
    ThirdStepComponent
} from "../organisms";
import { Banner } from "../molecules/Banner.tsx";
import { ProgressionBar } from "../atoms/progressionBar/ProgressionBar.tsx";

const mappedComponent = {
    [FormStep.STEP_ONE]: FirstStepComponent,
    [FormStep.STEP_TWO]: SecondStepComponent,
    [FormStep.STEP_THREE]: ThirdStepComponent,
    [FormStep.STEP_FOUR]: FourthStepComponent,
    [FormStep.STEP_FIVE]: FifthStepComponent,
    [FormStep.STEP_SIX]: SixthStepComponent,
};


export const HomeTemplate: React.FC = () => {
    const [formStep, setFormStep] = React.useState<FormStep>(FormStep.STEP_ONE);
    const [stepData, setStepData] = React.useState<Record<FormStep, string>>({
        [FormStep.STEP_ONE]: '',
        [FormStep.STEP_TWO]: '',
        [FormStep.STEP_THREE]: '',
        [FormStep.STEP_FOUR]: '',
        [FormStep.STEP_FIVE]: '',
        [FormStep.STEP_SIX]: '',
    });

    const handleStepData = (key: FormStep, data: string) => {
        setStepData((prevState) => ({ ...prevState, [key]: data }));
    };

    const handleSetFormStep = (step: FormStep) => {
        setFormStep(step);
    };
    const isNextStepDisable = () => {
        return stepData[formStep] === "";
    }

    const CurrentStep = mappedComponent[formStep];

    return (
        <main className={styles.containerForm}>
            <ProgressionBar formStep={formStep}/>
            <Banner formStep={formStep}/>
            <section className={styles.form}>
                <img className={styles.logoBannerDesk} src={Logo} alt="Logo customer scoop"/>
                <CurrentStep
                    handleStepData={handleStepData}
                    handleSetStep={handleSetFormStep}
                    currentStep={formStep}
                    stepData={stepData}
                    isNextStepDisable={isNextStepDisable}
                />
            </section>
        </main>
    );
};

