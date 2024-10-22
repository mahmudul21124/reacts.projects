import React, { useState } from 'react'

export default function App3() {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        address: "",
        contact: "",
        gender: "",
        district: "",
    });

    const handleChange = (event) => {
        setProfile(profileinfo => {
            return {...profileinfo, [event.target.name]: event.target.value}
        })
    }
    console.log(profile);

    const handleSubmit = (event) => {
        event.preventDefault();
        let output = profile.name + '\n';
            output += profile.email + '\n';
            output += profile.address + '\n';
            output += profile.contact + '\n';
            output += profile.gender + '\n';
            output += profile.district + '\n';
        alert(output);
      }
    
  return (
    <>
        <h1>Student Entry Form</h1>
        <form onSubmit={handleSubmit}>

            <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder='Enter Name'/> <br />

            <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder='Enter Email'/><br />

            <textarea name="address" value={profile.address} onChange={handleChange} placeholder='Enter Address'></textarea><br />

            <input type="text" name="contact" value={profile.contact} onChange={handleChange} placeholder='Enter Contact Number'/><br />

            Male <input type="radio" name='gender' value="Male" onChange={handleChange} />
            Female <input type="radio" name='gender' value="Female" onChange={handleChange}/><br />

            <select name="district" onChange={handleChange}>
                <option value="">Select One</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Narayanganj">Narayanganj</option>
                <option value="Chittagonj">Chittagonj</option>
            </select><br />

            <button type='submit'>Submit</button>
        </form>
    </>
  )
}
