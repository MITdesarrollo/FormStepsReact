export enum FormStep {
    STEP_ONE = '01',
    STEP_TWO = '02',
    STEP_THREE = '03',
    STEP_FOUR = '04',
    STEP_FIVE = '05',
    STEP_SIX = '06',
}

export interface FormComponentProps {
    handleStepData: (key: FormStep, data: string) => void;
    handleSetStep: (step: FormStep) => void;
    currentStep: FormStep;
    stepData: Record<FormStep, string>;
    isNextStepDisable : () => boolean;
}
