import style from "./Item.module.css"
import { useState } from "react"
import { Delete, Edit } from "@mui/icons-material"
import { CheckBox } from "../../Checkbox/Checkbox"

export function Item({ id, name, handleRemoveById}) {

    const [isCompleted, setIsCompleted] = useState()

    const removeItemById = () => {
        handleRemoveById(id)
    }

    const handleTaskCompleted = (taskStatus) => {
        setIsCompleted(taskStatus)
    }

    return (
        <li className={style.item}>
            <div><CheckBox handleTaskCompleted={handleTaskCompleted}/></div>
            <div className={`${isCompleted ? style.itemCompleted : ""}`}>{ name }</div>
            <div>
                <button><Edit className={style.icon}/></button>
                <button onClick={removeItemById}><Delete className={style.icon}/></button>
            </div>
        </li>
    )
}