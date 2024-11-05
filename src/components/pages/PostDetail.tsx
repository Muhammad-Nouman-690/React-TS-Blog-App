import { useParams, useNavigate } from 'react-router-dom';
import blogData from '../../data/Data.json';

export default function PostDetail() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/');
    }
    const { id } = useParams<{ id: string }>();

    const post = blogData.blog.find((post) => post.id === Number(id));
    console.log(post);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    className="w-48 h-48"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{post.name}</h3>
            <p className="text-gray-500">{post.description}</p>
            <button onClick={goBack} type="button" className="mt-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Go Back </button>

        </div>
    );
}
