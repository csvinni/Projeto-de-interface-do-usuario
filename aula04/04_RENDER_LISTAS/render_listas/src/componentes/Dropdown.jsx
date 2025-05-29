import { dadoslista4 } from "./dados";

export default function DropDown() {
    return (
        <ul>
            {dadoslista4.map((link) => (
                <li key={link.id}>
                    <a href={link.link}>{link.titulo}</a>
                </li>
            ))}
        </ul>
    );
}