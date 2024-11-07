import { ReactNode } from "react";
import styles from "./stepContainer.module.css"
interface Props{
    children:ReactNode;
}
export const StepContainer = ({ children }: Props) =>{
    return(
        <section className={styles.containerStep}>
            {children}
        </section>
    )
}
