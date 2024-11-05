//use slice here
import { useDispatch,useSelector } from "react-redux";
import { increment, decrement } from "./state/CounterSlice"
import { RootState } from "../../../core/Store";

export default function Counter() {

    const dispatch = useDispatch();
    const count = useSelector((state: RootState)=> state.counter.value )
 
    const onIncClick = () => {
        dispatch(increment());
    }
    const onDecClick = () => {
        dispatch(decrement());
    }
    return (
        <>
            <p>The Current Value of the Counter is: {count} </p>
            <button className="bg-blue-500 px-4 py-2 rounded-full m-4" onClick={onIncClick}>Increment</button>
            <button className="bg-blue-500 px-4 py-2 rounded-full m-4" onClick={onDecClick}>Decrement</button>
        </>
    );
}