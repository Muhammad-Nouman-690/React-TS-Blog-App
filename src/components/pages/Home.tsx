import { useNavigate } from 'react-router-dom';
import blogData from '../../data/Data.json'

export default function Home() {
    const navigate = useNavigate();
    const addProductHandler = (id: number) => {
        navigate(`/PostDetail/${id}`)
    }
    
    return (
        <>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-10 py-10">                
                {blogData.blog.map((post) => (
                    <a key={post.id} href={post.href} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                                src={post.imageSrc}
                                alt={post.imageAlt}
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{post.name}</h3>
                        <button onClick={() => {
                            addProductHandler(post.id)
                        }} type="button" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >Post Detail</button>
                    </a>
                ))}
            </div>
        </>
    );
}