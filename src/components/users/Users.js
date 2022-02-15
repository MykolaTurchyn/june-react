export default function Users({users}) {
    return (
        <div>
            {users.map(user =>
                <div key={user.id}>
                    {user.id}-{user.name}
                </div>)}
        </div>
    );
}