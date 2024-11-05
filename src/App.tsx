import { Provider } from "react-redux";
import Routing from "./components/routing/Routing"
import { UserContext } from "./core/UserContext"
import { useState } from "react"
import { store } from "./core/Store";

export default function App() {

  const [name, setName] = useState(' Click for LogIn');
  
  const value = { name, setName}

  return (
    <UserContext.Provider value={value}>
      <Provider store={store}>
        <Routing />
      </Provider>
    </UserContext.Provider>
  )
}