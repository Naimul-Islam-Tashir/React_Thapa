import { createContext } from "react";
import ComA from "./components/ComA";
export const FirstName=createContext();
 const LastName=createContext();
function App() {
  const Fname="tashir";
  return (
    <div>
     <h1>App Component </h1>
     <FirstName.Provider value={Fname}>
          <LastName.Provider value={"Ahmed"}>
              <ComA /> 
          </LastName.Provider>
     </FirstName.Provider>
    </div>
  );
}
export default App;
export {LastName};

