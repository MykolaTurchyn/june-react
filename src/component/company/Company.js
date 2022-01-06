export default function Company({company: {name, catchPhrase, bs}}) {
    return (
        <div>
            {
                <ul>
                    <li><b><i>Company Name:</i></b> {name}</li>
                    <li><b><i>Catch Phrase:</i></b> {catchPhrase}</li>
                    <li><b><i>BS:</i></b> {bs}</li>
                </ul>
            }
        </div>
    );
}