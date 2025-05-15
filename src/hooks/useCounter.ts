import { useState } from "react";
import type { CounterHook } from "../interfaces/interfaces";

export const useCounter = (INITIAL_STATE:number):CounterHook => {
    const [counter, setCounter] = useState<number>(INITIAL_STATE);

    const handleIncrement = (value:number):void => {
        setCounter(c => c + value);
    }

    const handleDecrement = (value:number):void => {
        setCounter(c => c - value);
    }

    const handleReset = ():void => {
        setCounter(INITIAL_STATE);
    }

    return {
        counter,
        handleIncrement,
        handleDecrement,
        handleReset
    }

}