import { useState } from "react";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
        <Login/>
    </div>
  )
}

export default App;

  // const [counter, setCounter] = useState(1)

  // const increaseSelection = () => {
  //   setCounter(counter + 1)
  // }
  // return (
  //   <div className="w-75 bg-amber-600 p-2 flex flex-col items-center text-center rounded-2xl m-4">
  //     <img src="src/assets/flower.jpg" alt="flower" />
  //     <h2 className="font-bold text-3xl text-amber-900">Spreading love</h2>
  //     <h1 className="font-extrabold text-3xl text-amber-900">
  //       {counter}
  //     </h1>
  //     <p className="text-left py-2">
  //       Love is all about being thoughtful and intentional towards your partner.
  //       Start today by getting them flowers.
  //     </p>
  //     <button onClick={increaseSelection} className="bg-amber-800 px-3.5 py-1.5 rounded-4xl">Select</button>

  //   </div>
//   );
// };

