export default function Geo({geo:{ lat, lng}}) {
    return (
        <div>
            {
                <ul>
                    <li>Lat: {lat}</li>
                    <li>Lng: {lng}</li>
                </ul>
            }

        </div>
    );
}