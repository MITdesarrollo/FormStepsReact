interface ButtonProps {
    handleSetStep: () => void;
    img: string;
}

export const ButtonPrev: React.FC<ButtonProps> = ({ handleSetStep , img}) => {
    return (
        <button onClick={handleSetStep}>{img}</button>
    );
};
