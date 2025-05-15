import { useCounter } from "../hooks/useCounter"


const INITIAL_STATE = 0

export const Counter = () => {

    const {
        counter, 
        handleDecrement, 
        handleIncrement, 
        handleReset
    } = useCounter(INITIAL_STATE);
    
    return (
        <section>
            <h2>Contador: {counter} </h2>
            <hr />
            <button 
            className="btn btn-primary me-2"
            onClick={() => handleIncrement(2)}>
                +2
            </button>

            <button 
            className="btn btn-outline-primary me-2"
            onClick={() => handleDecrement(2)}>
                -2
            </button>

            <button
            className="btn btn-outline-secondary me-2"
            onClick={handleReset}
            >
                Reiniciar
            </button>

        </section>
    )
}
