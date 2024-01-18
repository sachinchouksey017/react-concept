import { useCallback, useState } from "react";
import Child from "./Child";

const Increment = () => {
const [counterOne, setCounterOne] = useState(0);
const [counterTwo, setCounterTwo] = useState(0);

// const isEven = useMemo(() => {
//     console.log(' i am called');
//     let i=0
//     while(i< 200000000) i++;
//     return counterOne%2 === 0;
// }, [counterOne])

const isEven = useCallback(()=>{
console.log('i am ');

}, [])
// const isEven = () =>{
// console.log('i am ');
// }

return (
    <>
    <button onClick={()=> setCounterOne(counterOne + 1)}>counter one {counterOne}</button>
    {/* counter one is {isEven ? `even number` : `odd number`} */}
    <button onClick={()=> setCounterTwo(counterTwo + 1)}>counter two {counterTwo}</button>
    <Child counterOne={counterOne} isEven={isEven}/>
    </>
)

}

export default Increment;