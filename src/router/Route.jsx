import { BrowserContext } from "./BrowserRouter";
import { useContext } from "react";

function Route({ children, path }) {

    const {currentURL} = useContext(BrowserContext);
    console.log(currentURL, path);

    // am i at current URL?
    // yes? --> render myself
    // no? render nothing

    if(currentURL.pathname === path) {

    return(
        <>
            {children}
        </>
    )
    } else {
        return null;
    }
}

export default Route