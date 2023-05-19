import React, { useState} from "react";

const ClientForm = (props) =>{
    const [ClientInfo, setClientInfo]=useState({
        id: null,
        Date:'',
        Marital:'',
        Sex:'',
        Race:'',
        Age:'',
        CaseManager:'',
        Resources:[] 
    });

    // eslint-disable-next-line
    const handleInputChange = event => {
        const { name, value } = event.target;
        setClientInfo({ ...ClientInfo, [name]: value });
    };
    return(
        <div>
            <label>
                Marital Status:
                <select className="form-control"  name="MaritalStatus" value={setClientInfo.Marital}>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Separated">Separated</option>
                    <option value="Widowed">Widowed</option>
                </select>
            </label>
            <br></br>
            <label>
               Sex:
                <select className="form-control"  name="Sex" value={setClientInfo.Sex}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </label>
            <br></br>
            <label>
                Race:
                <select className="form-control" name="Race" value={setClientInfo.Race}>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Hispanic">Hispanic</option>
                    <option value="Asian">Asian</option>
                    <option value="American Indian">American Indian</option>
                    <option value="TwoOrMore">Two or More</option>
                    <option value="Other">Other</option>
                </select>
            </label>
            <br></br>
            <div className="row">
            <a href="/contactInfo/">
            <button className="btn btn-primary col-md-6" >Back</button>
            </a>
            <a href="/clientInfo/">
            <button className="btn btn-primary col-md-6" >Next</button>
            </a>
            </div>
            
        </div>
    )
}
export default ClientForm