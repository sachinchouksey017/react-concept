import { useMemo, useState } from "react";
// The useMemo is a hook used in the functional component of react that returns a memoized value.
// Memoization is a concept used in general when we don't need to recompute the function with a given
// argument for the next time as it returns the cached result.

const Counter = () => {
const [counterOne, setCounterOne] = useState(0);
const [counterTwo, setCounterTwo] = useState(0);

const isEven = useMemo(() => {
    console.log(' i am called');
    let i=0
    while(i< 200000000) i++;
    return counterOne%2 === 0;
}, [counterOne])

return (
    <>
    <button onClick={()=> setCounterOne(counterOne + 1)}>counter one {counterOne}</button>
    counter one is {isEven ? `even number` : `odd number`}
    <button onClick={()=> setCounterTwo(counterTwo + 1)}>counter two {counterTwo}</button>
    </>
)

}

export default Counter;