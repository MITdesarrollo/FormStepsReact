import { create } from 'zustand';

interface FormState {
    currentQuestion: number;
    answers: { [key: number]: string };
    nextQuestion: () => void;
    previousQuestion: () => void;
    setAnswer: (questionId: number, answer: string) => void;
    submitForm: () => void;
}

export const useFormStore = create<FormState>((set) => ({
    currentQuestion: 0,
    answers: {},

    nextQuestion: () => set((state) => ({
        currentQuestion: state.currentQuestion + 1
    })),

    previousQuestion: () => set((state) => ({
        currentQuestion: Math.max(state.currentQuestion - 1, 0)
    })),

    setAnswer: (questionId, answer) => set((state) => ({
        answers: { ...state.answers, [questionId]: answer }
    })),

    submitForm: () => {
    },
}));
