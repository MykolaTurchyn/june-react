export default function Company({company:{name,catchPhrase,bs}}) {
    return (
        <div>
            <ul>
                <li><b>Name:</b> {name}</li>
                <li><b>CatchPhrase:</b> {catchPhrase}</li>
                <li><b>Bs:</b> {bs}</li>
            </ul>
        </div>
    );
}