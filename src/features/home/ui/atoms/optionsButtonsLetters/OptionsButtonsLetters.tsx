import { FormStep } from "../../../interfaces/formStep.ts";
import React from "react";
import styles from "./optionsButtonsLetters.module.css";

interface OptionButtonProps {
    options: string[];
    handleStepData: (key: FormStep, data: string) => void;
    selectedOption?: string;
    currentStep: FormStep;
    stepData: Record<FormStep, string>;
}

export const OptionsButtonsLetters : React.FC<OptionButtonProps> = ({ options, stepData, handleStepData, currentStep }) => {
        return (
            <div className={styles.buttonGroupContainer}>
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleStepData(currentStep, option)}
                        className={`${styles.optionButton} ${stepData[currentStep] === option ? styles.selected : ''}`}
                    >
                        <span className={styles.letterButton}>{String.fromCharCode(65 + index)}</span>
                        <span className={styles.text}>{option}</span>
                    </button>
                ))}
            </div>
        );
    };

