export default function Post({post: {userId, id, title, body}}) {
    return (
        <div>
            <ul>
                <li>
                    User №: {userId}
                </li>
                <li>
                    Post id: {id}
                </li>
                <li>
                    Title: {title}
                </li>
                <li>
                    Body: {body}
                </li>
            </ul>
        </div>
    );
}