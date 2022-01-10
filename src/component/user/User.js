import Address from "../address/Address";
import Company from "../company/Company";

export default function User({user: {id, name, username, email, address, phone, website, company}}) {

    return (
        <div>
            <ul>
                <li><b> User №:</b> {id}</li>
                <li><b> Name:</b> {name}</li>
                <li><b> Username:</b> {username}</li>
                <li><b> Email:</b> {email}</li>
                <li><b>Address:</b>
                    <Address address={address}/>
                </li>
                <li><b>Phone:</b> {phone}</li>
                <li><b>Website:</b> {website}</li>
                <li><b>Company:</b>
                    <Company company={company}/></li>
            </ul>

        </div>
    );
}