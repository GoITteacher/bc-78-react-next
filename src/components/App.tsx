// import { useState } from "react";
// import Timer from "./Timer";
// import { Flex } from "antd";
// import Sidebar from "./Sidebar";
// import CharacterWidget from "./CharacterWidget";

import Cocktails from "./Cocktails/Cocktails";
import Counter from "./Counter";
import Products from "./Products/Products";

export default function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // const open = () => setIsOpen(true);
  // const close = () => setIsOpen(false);

  return (
    <>
      {/* <button onClick={open}>Open</button>
      {isOpen && <Sidebar onClose={close} />} */}
      {/* <CharacterWidget /> */}
      {/* <Flex vertical>
        <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        {isOpen && <Timer />}
      </Flex> */}

      {/* <Counter /> */}

      {/* <Cocktails /> */}
      <Products />
    </>
  );
}
