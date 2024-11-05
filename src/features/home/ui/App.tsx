import React from 'react';
import {FormProvider} from "../../../form/application/contexts/formContext.tsx";
import MultiStepForm from "./templates/MultiStepForm.tsx";


const App: React.FC = () => {
    return (
        <FormProvider>
            <MultiStepForm />
        </FormProvider>
    );
};

export default App;
