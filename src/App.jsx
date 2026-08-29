import { RouterProvider } from "react-router"
import router from "./router/router"
import { UserContextProvider } from "./context/UserContext"

function App() {


  return (
    <>
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
    </>
  )
}

export default App
