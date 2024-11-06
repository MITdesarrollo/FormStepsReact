import React from 'react';
import {FormStep} from "../../interfaces/formStep.ts";
import styles from "./option.module.css";


interface OptionButtonGroupProps {
    options: string[];
    handleStepData: (key: FormStep, data: string) => void;
    selectedOption?: string;
    currentStep:FormStep;
    stepData:Record<FormStep, string>;
}

export const OptionButtonGroup: React.FC<OptionButtonGroupProps> = ({ options, stepData, handleStepData, currentStep }) => {
    return (
        <div className="button-group-container">
            {options.map((option, index) =>
                {
                    console.log(option, "==", stepData[currentStep])

                   return (
                       <button
                           key={index}
                           onClick={() => handleStepData(currentStep, option)}
                           className={`option-button ${stepData[currentStep] === option ? styles.selected : ''}`}
                       >
                           {option}
                       </button>
                   )
                }
            )}
        </div>
    );
};
