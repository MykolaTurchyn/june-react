import Address from "../address/Address";
import Company from "../company/Company";

export default function User({item}) {

    return (
        <div>
            {
                <ul>
                    <li><b>User:</b> {item.id}</li>
                    <li><b>Name:</b> {item.name}</li>
                    <li><b>Username:</b> {item.username}</li>
                    <li><b>Email:</b> {item.email}</li>
                    <li><b>Address:</b>
                        <Address address={item.address}/>
                    </li>
                    <li><b>Phone:</b> {item.phone}</li>
                    <li><b>Website:</b>
                        <a href={item.website}> {item.website}</a>
                    </li>
                    <li><b>Company:</b>
                        <Company company={item.company}/>
                    </li>

                </ul>

            }
            <hr/>
        </div>
    );
}