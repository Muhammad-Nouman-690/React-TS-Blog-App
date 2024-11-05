import { useState } from "react";
import postData from '../../data/Data.json';
import { useNavigate } from "react-router-dom";

type Post = {
    id: number;
    name: string;
    href: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    postName: string;
    postContent: string;
};

export default function AddPost() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [imageAlt, setImageAlt] = useState('');
    const [description, setDescription] = useState('');
    const [postName, setPostName] = useState('');
    const [postContent, setPostContent] = useState('');

    const [posts, setPosts] = useState<Post[]>(postData.blog);
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPost: Post = {
            id: Date.now(),
            name,
            href: '#',
            price,
            imageSrc,
            imageAlt,
            description,
            postName,
            postContent,
        };

        const updatedPosts = [...posts, newPost];
        setPosts(updatedPosts);
        postData.blog = updatedPosts;

        console.log('New Post:', newPost);

        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        navigate('/');
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input
                        type="text"
                        value={imageSrc}
                        onChange={(e) => setImageSrc(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Image Alt Text</label>
                    <input
                        type="text"
                        value={imageAlt}
                        onChange={(e) => setImageAlt(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Post Name</label>
                    <input
                        type="text"
                        value={postName}
                        onChange={(e) => setPostName(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Post Content</label>
                    <textarea
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    Add Post
                </button>
            </form>
        </div>
    );
}
