import React from 'react';
import { useFormStore } from '../../application/controllers/formStore';
import Question from '../organisms/Question';
import questionsData from '../../domain/models/questionsData';

const MultiStepForm: React.FC = () => {
    const { currentQuestion, nextQuestion, previousQuestion, setAnswer, submitForm } = useFormStore();

    const isLastQuestion = currentQuestion >= questionsData.length;

    const handleAnswerSelect = (answer: string) => {
        setAnswer(currentQuestion, answer);
    };

    const handleFinish = () => {
        submitForm();
        alert("Gracias por completar el formulario. Revisa la consola para ver los datos guardados.");
    };

    return (
        <div>
            <h1>Formulario Multi-Paso</h1>

            {isLastQuestion ? (
                <div>
                    <h2>¡Muchas Gracias por Completar el Formulario!</h2>
                    <p>Nos vemos pronto!</p>
                    <button onClick={handleFinish}>Finalizar</button>
                </div>
            ) : (
                <Question
                    questionText={questionsData[currentQuestion].text}
                    options={questionsData[currentQuestion].options}
                    onAnswerSelect={handleAnswerSelect}
                />
            )}

            {!isLastQuestion && (
                <div>
                    <button onClick={previousQuestion} disabled={currentQuestion === 0}>Anterior</button>
                    <button onClick={nextQuestion} disabled={currentQuestion === questionsData.length - 1}>Siguiente</button>
                </div>
            )}
        </div>
    );
};

export default MultiStepForm;
