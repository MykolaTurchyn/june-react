import Geo from "../geo/Geo";

export default function Address({address:{city,suite,street,zipcode,geo}}) {
    return (
        <div>
            <ul>
                <li><b>City:</b> {city}</li>
                <li><b>Suite:</b> {suite}</li>
                <li><b>Street:</b> {street}</li>
                <li><b>Zipcode:</b> {zipcode}</li>
                <li><b>Geo:</b>
                    <Geo geo={geo}/>
                </li>
            </ul>
        </div>
    );
}