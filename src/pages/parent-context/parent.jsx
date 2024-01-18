import { useState } from "react";
import { MyContext } from "../../context/context";
import { useContext } from 'react';

const Parent = () => {
  const [text] = useState("Data of parent");
  return (
    <>
      <MyContext.Provider value={{ text }}>
        <div>i am parent</div>
        <Child />
      </MyContext.Provider>
      <SubChild1 />
    </>
  );
};
export default Parent;

const Child = () => {
  return (
    <>
      <div>i am child 1</div>
      <SubChild1 />
    </>
  );
};

const SubChild1 = () => {
  return (
    <>
      <div>i am sub child 1</div>
      <SubChild2 />
    </>
  );
};

const SubChild2 = () => {
    const { text } = useContext(MyContext);

  return <div>i am sub child 2 {text}</div>;
};
