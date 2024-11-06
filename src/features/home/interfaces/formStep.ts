export enum FormStep {
    STEP_ONE = 'STEP_1',
    STEP_TWO = 'STEP_2',
    STEP_THREE = 'STEP_3',
    STEP_FOUR = 'STEP_4',
    STEP_FIVE = 'STEP_5',
    STEP_SIX = 'STEP_6',
}

export interface FormComponentProps {
    handleStepData: (key: FormStep, data: string) => void;
    handleSetStep: (step: FormStep) => void;
    currentStep: FormStep;
    stepData: Record<FormStep, string>;
}
