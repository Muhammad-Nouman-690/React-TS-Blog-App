export default function About() {
    return (
        <>
            <div className="min-h-screen  flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
                    <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">About Us</h1>
                    <p className="text-gray-700 mb-4">
                        Welcome to our blog! We are passionate about sharing insightful articles and engaging content on a wide range of topics. Our mission is to provide valuable information and inspiration to our readers.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Our team consists of experienced writers and enthusiasts who are dedicated to delivering high-quality content. We believe in the power of words to inform, inspire, and connect people.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Thank you for visiting our blog. We hope you enjoy reading our posts as much as we enjoy creating them. Stay tuned for more updates and feel free to reach out to us with any questions or feedback.
                    </p>
                    <div className="text-center">
                        <a
                            href="/"
                            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Go Back to Home
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}