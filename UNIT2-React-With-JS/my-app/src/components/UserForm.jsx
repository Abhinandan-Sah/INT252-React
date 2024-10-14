import React, { useState } from 'react'

const UserForm = () => {
    const [name, setName] = useState("");
    const [formData, setFormData] = useState(null);
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [card, setCard] = useState("");
    const [expiry, setExpiry] = useState("");
    const [error, setError] = useState("");

    const validate = () => {
        if (name === "" && email === "" && street === "" && city === "" && card === "" && expiry === "") {
            return false;
        } else {
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setFormData({ name, email, street, city, card, expiry });
        }
        else{
            setError("Invalid credentials")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Personal Information</h1>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <h1>Address</h1>
                    <input
                        type="text"
                        placeholder="Street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <h1>Payment Information</h1>
                    <input
                        type="number"
                        placeholder="Card Number"
                        value={card}
                        onChange={(e) => setCard(e.target.value)}
                    />
                    <input
                        type="date"
                        placeholder="Expiry Date"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            <div>
            <h1>Showing form data</h1>
                
                {formData !== null && (error==""? (
                    
                    <div>
                        <h3>Name: {formData.name}</h3>
                        <h3>Email: {formData.email}</h3>
                        <h3>Street: {formData.street}</h3>
                        <h3>City: {formData.city}</h3>
                        <h3>Card: {formData.card}</h3>
                        <h3>Expiry: {formData.expiry}</h3>
                    </div>
                ):(<h3>error</h3>))}
            </div>
        </div>
    )
}

export default UserForm;


