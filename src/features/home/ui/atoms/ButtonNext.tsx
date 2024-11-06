interface ButtonProps {
    handleSetStep: () => void;
    text: string;
}

export const ButtonNext: React.FC<ButtonProps> = ({ handleSetStep , text}) => {
    return (
        <button onClick={handleSetStep}>{text}</button>
    );
};
