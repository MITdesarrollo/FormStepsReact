import React, { createContext, useContext, useState, ReactNode } from 'react';


interface FormState {
    currentQuestion: number;
    answers: { [key: number]: string };
    userName: string;
    setUserName: (name: string) => void;
    setAnswer: (questionId: number, answer: string) => void;
    nextQuestion: () => void;
    previousQuestion: () => void;
    submitForm: () => void;
}


const FormContext = createContext<FormState | undefined>(undefined);


export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [userName, setUserNameState] = useState('');

    const setUserName = (name: string) => setUserNameState(name);

    const setAnswer = (questionId: number, answer: string) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer,
        }));
    };

    const nextQuestion = () => {
        setCurrentQuestion((prev) => prev + 1);
    };

    const previousQuestion = () => {
        setCurrentQuestion((prev) => Math.max(prev - 1, 0));
    };

    const submitForm = () => {
        console.log("Formulario completado. Respuestas:", answers, "Nombre del usuario:", userName);

    };

    return (
        <FormContext.Provider value={{ currentQuestion, answers, userName, setUserName, setAnswer, nextQuestion, previousQuestion, submitForm }}>
    {children}
    </FormContext.Provider>
);
};


export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext debe usarse dentro de FormProvider");
    }
    return context;
};
