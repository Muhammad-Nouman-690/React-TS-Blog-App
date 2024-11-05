import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setShowModal(true);
      };

      const closeModal = () => {
        setShowModal(false);
        setName("");
        setEmail("");
        setMessage("");
        navigate('/');
      };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                type="text"
                                className="mt-1 text-zinc-950 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="mt-1 text-zinc-950 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                className="mt-1 text-zinc-950 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                {showModal && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                            <h2 className="text-zinc-950 text-2xl font-bold mb-4 text-center">Thank You!</h2>
                            <p className="text-gray-700 mb-4 text-center">Will Contact you soon.</p>
                            <button
                                onClick={closeModal}
                                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}