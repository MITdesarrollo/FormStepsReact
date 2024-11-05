interface ButtonProps {
    handleSetStep: () => void;
}

export const Button: React.FC<ButtonProps> = ({ handleSetStep }) => {
    return (
        <button onClick={handleSetStep}>Siguiente</button>
    );
};
