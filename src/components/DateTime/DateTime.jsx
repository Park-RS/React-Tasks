import { useEffect, useState } from "react";

export default function DateTime(params) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(interval);
            console.log("test");
        };
    },[]);
    return (
        <>
            <h3>Время : {time.toLocaleTimeString()} </h3>
        </>
    );
}
