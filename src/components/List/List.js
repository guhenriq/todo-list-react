import style from "./List.module.css"
import { useState } from "react"
import { Item } from "./Item/Item"
import { AddCircle } from "@mui/icons-material"

export function List() {

    const [listTasks, setTaskList] = useState([])
    const [task, setTask] = useState()

    const addTask = (e) => {
        e.preventDefault()
        setTaskList([...listTasks, {
            id: listTasks.length,
            name: task
        }])
    }
    
    const handleRemoveById = (taskId) => {
        const newListTask = listTasks.filter(item => item.id !== taskId)
        setTaskList(newListTask)
    }
    
    return (
        <div className={style.container}>
            <div className={style.containerList}>
                <form className={style.form}>
                    <input type="text" placeholder="O que você está planejando?" className={style.inputTask} onChange={(e) => setTask(e.target.value)} />
                    <button type="submit" className={style.inputSubmit}  onClick={addTask}><AddCircle/></button>
                </form>
                <ul className={style.taskList}>
                    {listTasks.map((e) => {
                        return (
                            <Item key={e.id} id={e.id} name={e.name} handleRemoveById={handleRemoveById}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}