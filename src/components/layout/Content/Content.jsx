import { info } from "../../../../data";

export default function Content({title, description}) {
    return (
        <>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );
}
