import { useState } from "react";
import Button from "../Button/Button";
import "./Counter.scss";

export default function Counter(children, onClick) {
    const [count, SetCount] = useState(0);
    function increment(params) {
        SetCount(count + 1);
    }
    function decrement(params) {
        SetCount(count - 1);
    }
    return (
        <div className="counter">
            <div className="counter__inner">
                <div className="counter__title">
                    <h1>Счётчик: {count}</h1>
                </div>
                <div className="counter__buttons" style={{ marginTop: "12px" }}>
                    <Button onClick={increment}>Увеличить на 1</Button>
                    <Button onClick={decrement}>Уменьшить на 1</Button>
                </div>
            </div>
        </div>
    );
}
