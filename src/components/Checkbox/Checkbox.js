export function CheckBox({ handleTaskCompleted }) {

    return (
        <>
            <input type="checkbox" onChange={(e) => handleTaskCompleted(e.target.checked)}></input>
        </>
    )
}