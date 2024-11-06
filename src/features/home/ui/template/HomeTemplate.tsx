import React from 'react';
import { FormStep } from "../../interfaces/formStep.ts";
import PersonBanner from "../../../../assets/persona-banner.svg";
import Logo from "../../../../assets/Group 171.png";
import Line from "../../../../assets/line.png";
import styles from "./home.module.css";

import {
    FifthStepComponent,
    FirstStepComponent,
    FourthStepComponent,
    SecondStepComponent, SixthStepComponent,
    ThirdStepComponent
} from "../organisms";

const mappedComponent = {
    [FormStep.STEP_ONE]: FirstStepComponent,
    [FormStep.STEP_TWO]: SecondStepComponent,
    [FormStep.STEP_THREE]: ThirdStepComponent,
    [FormStep.STEP_FOUR]: FourthStepComponent,
    [FormStep.STEP_FIVE]: FifthStepComponent,
    [FormStep.STEP_SIX]: SixthStepComponent,
};


export const HomeTemplate: React.FC = () => {
    const [formSteps, setFormSteps] = React.useState<FormStep>(FormStep.STEP_ONE);
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
        setFormSteps(step);
    };

    const CurrentComponent = mappedComponent[formSteps];

    const stepNumber = parseInt(formSteps, 10);
    const progressWidth = `${(100 / 6) * stepNumber}%`;

    return (
        <main className={styles.containerForm}>
            <div className={styles.progressBarContainer}>
                <div className={styles.progressBar} style={{ width: progressWidth }} />
            </div>
            <section className={styles.containerBanner}>
                <div className={styles.figureBanner}>
                    <img className={styles.logoBanner} src={Logo} alt="Logo customer scoop" />
                    <div className={styles.containerPersonSteps}>
                        <p className={styles.stepsNumber}>
                            <span className={styles.currentStep}>{formSteps}</span>
                            <img loading={"lazy"} src={Line} alt="Line" className={styles.line} />
                            <span className={styles.totalStep}>06</span>
                        </p>
                        <img className={styles.imageBanner} src={PersonBanner} alt="Hombre sonriendo mientras mira su teléfono" />
                    </div>
                </div>
            </section>
            <section className={styles.form}>
                <img className={styles.logoBannerDesk} src={Logo} alt="Logo customer scoop" />
                <CurrentComponent
                    handleStepData={handleStepData}
                    handleSetStep={handleSetFormStep}
                    currentStep={formSteps}
                    stepData={stepData}
                />
            </section>
        </main>
    );
};

