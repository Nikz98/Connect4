import Slot from "./Slot"

const passID = (id) => {
    console.log(`You clicked: ${id}`)
}
 
const Gameboard = (board) => {
    return (
        <>
            <Slot onTurn={passID}/>
        </>
    )
}

export default Gameboard