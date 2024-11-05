import { create } from 'zustand';

interface FormState {
    currentQuestion: number;
    answers: { [key: number]: string };
    nextQuestion: () => void;
    previousQuestion: () => void;
    setAnswer: (questionId: number, answer: string) => void;
    submitForm: () => void;  // Nueva función para el envío de datos
}

export const useFormStore = create<FormState>((set, get) => ({
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
        const answers = get().answers;
        console.log("Formulario completado. Respuestas:", answers);
        // Aquí podrías integrar una llamada a una API para enviar los datos
    },
}));
