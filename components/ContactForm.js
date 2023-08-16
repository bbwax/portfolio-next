import { useState } from 'react';
import Card from './Card';


export default function ContactPage() {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });

        if (response.ok) {
            // clear the form
            setFormState({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                message: '',
            });
            alert('Message sent successfully');
        } else {
            const { message } = await response.json();
            alert(`An error occurred: ${message}`);
        }
    };

    return (
        <div >
            <div className="flex flex-col w-full items-center justify-center h-screen pt-6">
                <div className="w-full md:w-1/2 p-4">
                    <div className='md:flex md:flex-col md:items-center md:justify-center m-4'>
                        <p className='text-center text-even-darker-green text-xl md:text-2xl'>
                            If you have any questions, comments, or concerns,<br />
                            Fill out the form and I will reach out to you!
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-12 ">
                    <form
                        className=" p-6 bg-light-cream rounded-lg shadow-lg"
                        onSubmit={handleSubmit}
                    >
                        <div className='flex flex-col sm:flex-col md:flex-row w-full text-dark-green'>
                            <div className="pr-2 w-full mb-4">
                                <label className="block mb-2">First Name:</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formState.firstName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-white  px-3 py-2 border shadow-sm focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                            <div className="w-full mb-4">
                                <label className="block mb-2">Last Name:</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formState.lastName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full bg-white px-3 py-2 border  shadow-sm focus:outline-none focus:border-indigo-500"
                                />
                            </div>
                        </div>
                        <div className="mb-4 text-dark-green">
                            <label className="block mb-2">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 bg-white border shadow-sm focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4 text-dark-green">
                            <label className="block mb-2">Phone Number:</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formState.phoneNumber}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border bg-white shadow-sm focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4 text-dark-green">
                            <label className="block mb-2">Message:</label>
                            <textarea
                                name="message"
                                value={formState.message}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border bg-white shadow-sm focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                className="w-min px-3 py-2 text-light-cream bg-dark-green rounded-lg shadow-sm hover:bg-gray-900 "
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    )
}