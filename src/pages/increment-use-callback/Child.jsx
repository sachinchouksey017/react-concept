import { memo } from "react";

const Child = ({counterOne, isEven}) => {
    console.log('child is rendered', counterOne);
    return (
        <div>child</div>
    )
}

export default memo(Child);