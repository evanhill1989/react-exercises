
import BrowserRouter from "./router/BrowserRouter.jsx";
import Route from "./router/Route.jsx";



function App() {
 


    return (
      <>
        
       <h1>App</h1>
       <BrowserRouter>
          <h2>Browser Router!</h2>
          <Route path="/1">
              <h3>Route1</h3>
          </Route>
       </BrowserRouter>

      </>
    )
}

export default App
