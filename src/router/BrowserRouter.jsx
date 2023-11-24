import { createContext, useState } from "react"

const BrowserContext = createContext();
const routerState = {};

function BrowserRouter({ children }) {
    const [currentURL, setCurrentURL] = useState(new URL(window.location.href));

    return(

        <BrowserContext.Provider value = {{routerState, currentURL, setCurrentURL}}>
            {children}
        </BrowserContext.Provider>

    );

}

export default BrowserRouter
export { BrowserContext }