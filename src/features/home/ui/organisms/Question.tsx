import React from 'react';
import Button from '../atoms/Button.tsx';

interface QuestionProps {
    questionText: string;
    options: string[];
    onAnswerSelect: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ questionText, options, onAnswerSelect }) => {
    return (
        <div>
            <h2>{questionText}</h2>
            <div>
                {options.map((option, index) => (
                    <Button key={index} onClick={() => onAnswerSelect(option)}>
                        {option}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Question;
