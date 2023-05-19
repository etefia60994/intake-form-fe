import React, { useState } from "react";
import ContactInfoDataService from "../services/ContactInfoService"

const ContactInfo = props => {
    const emptyContactForm = 
   {
        First: '',
        Last: '',
        Address: '',
        Zip: null,
        State: ''

    };
    const[ContactForm, setContactInfo] = useState(emptyContactForm);

// eslint-disable-next-line
   const getContactInfo = id =>{
       ContactInfoDataService.get(id).then(response => {
        setContactInfo(response.data);
        console.log(response.data)
   }).catch (e => {console.log(e)})}

//    useEffect(() => { 
//     getContactInfo(props.match.params.id);
//     }, [props.match.params.id]);

// eslint-disable-next-line
const handleInputChange = event => {
    const { name, value } = event.target;
    setContactInfo({ ...ContactForm, [name]: value });
};

    return (
        <div>
            <form>
                <label className="col-sm-2 col-form-label">
                    First Name:</label>
                <input className="form-control" type="text" name="FirstName" value={setContactInfo.First} />
                <br></br>
                <label>
                    Last Name:
                    <input className="form-control"  type="text" name="LastName" value={setContactInfo.Last} />
                </label>
                <br></br>
                <label>
                    Address:
                    <input className="form-control"  type="text" name="Address" value={setContactInfo.Address} />
                </label>
                <br></br>
                <label>
                    ZIP:
                    <input className="form-control"  type="text" name="ZIP" value={setContactInfo.ZIP} />
                </label>
                <br></br>
                <label>
                    State:
                    <input className="form-control"  type="text" name="State" value={setContactInfo.State} />
                </label>
                <br></br>
                <label>
                    Phone Number:
                    <input className="form-control"  type="text" name="phoneNumber" value={setContactInfo.ZIP} />
                </label>
                <br></br>
                <label>
                    Alternate Phone Number:
                    <input className="form-control"  type="text" name="altPhoneNumber" value={setContactInfo.ZIP} />
                </label>
                <br></br>
                <label>
                    E-mail:
                    <input className="form-control"  type="text" name="email" value={setContactInfo.ZIP} />
                </label>
            </form>
            <a href="/clientInfo/">
            <button className="btn btn-primary">Next</button>
            </a>
        </div>
    )
}
export default ContactInfo