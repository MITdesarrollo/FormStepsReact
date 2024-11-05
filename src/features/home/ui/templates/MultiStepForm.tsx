import React, { useState } from 'react';

import Question from '../organisms/Question.tsx';
import questionsData from '../../../../form/domain/models/questionsData.ts';
import styled from 'styled-components';
import {useFormContext} from "../../../../form/application/contexts/formContext.tsx";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
`;


const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 1.5em;
    color: #4A4A4A;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    color: #7A7A7A;
    margin-bottom: 20px;
  }
`;


const StyledButton = styled.button`
  background-color: #4A90E2;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;

  &:disabled {
    background-color: #E0E0E0;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #357ABD;
  }
`;


const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;


const MultiStepForm: React.FC = () => {
    const { currentQuestion, nextQuestion, previousQuestion, setAnswer, setUserName, userName, submitForm, answers } = useFormContext();
    const [nameInput, setNameInput] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);


    const isLastQuestion = currentQuestion >= questionsData.length;


    const handleAnswerSelect = (answer: string) => {
        setSelectedAnswer(answer);
        setAnswer(currentQuestion, answer);
    };


    const handleFinish = () => {
        submitForm();
        alert("Gracias por completar el formulario. Revisa la consola para ver los datos guardados.");
    };


    const handleNameSubmit = () => {
        setUserName(nameInput);
        setSelectedAnswer(null);
        nextQuestion();
    };


    const handleNext = () => {
        setSelectedAnswer(null);
        nextQuestion();
    };

    return (
        <FormContainer>
            <Title>Formulario Multi-Paso</Title>

            {isLastQuestion ? (

                <ThankYouContainer>
                    <h2>¡Muchas Gracias por querer ser parte de la familia Scoopers!</h2>
                    <p>Nos vemos pronto!</p>
                    <StyledButton onClick={handleFinish}>Finalizar</StyledButton>
                </ThankYouContainer>
            ) : currentQuestion === 0 ? (

                <div>
                    <h2>Queremos conocerte, ¿cuál es tu nombre?</h2>
                    <input
                        type="text"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        placeholder="Nombre"
                    />
                    <StyledButton onClick={handleNameSubmit} disabled={!nameInput.trim()}>Comenzar</StyledButton>
                </div>
            ) : (

                <Question
                    questionText={currentQuestion === 1 ? `Genial ${userName}, ahora nos gustaría tener cierta info para diseñar una gran propuesta de valor para ti:` : questionsData[currentQuestion].text}
                    options={questionsData[currentQuestion].options}
                    onAnswerSelect={handleAnswerSelect}
                />
            )}

            {!isLastQuestion && currentQuestion > 0 && (
                <NavButtons>
                    <StyledButton onClick={previousQuestion} disabled={currentQuestion === 0}>Anterior</StyledButton>
                    <StyledButton onClick={handleNext} disabled={!selectedAnswer}>Siguiente</StyledButton>
                </NavButtons>
            )}
        </FormContainer>
    );
};

export default MultiStepForm;
