import Button from './Button.jsx'

function Card({heading, buttonText, handleButton}) {
    return(
        <>
            <h1>{heading}</h1>
            <Button buttonText={buttonText} handleButton={handleButton}/>
        </>
    )
}
export default Card