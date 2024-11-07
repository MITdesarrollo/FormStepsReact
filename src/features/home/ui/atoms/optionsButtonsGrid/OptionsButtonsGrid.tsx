
import { FormStep } from "../../../interfaces/formStep.ts";
import styles from "./optionsButtonsGid.module.css";

interface OptionButtonGroupProps {
    options: string[];
    handleStepData: (key: FormStep, data: string) => void;
    selectedOption?: string;
    currentStep: FormStep;
    stepData: Record<FormStep, string>;
}

export const OptionsButtonsGrid = ({
                                                                        options,
                                                                        stepData,
                                                                        handleStepData,
                                                                        currentStep
                                                                    }: OptionButtonGroupProps) => {
    return (
        <div className={styles.buttonGroupContainer}>
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleStepData(currentStep, option)}
                    className={`${styles.optionButton} ${stepData[currentStep] === option ? styles.selected : ''}`}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};
