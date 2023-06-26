import style from "./List.module.css"
import { useState } from "react"
import { Item } from "./Item/Item"
import { AddCircle } from "@mui/icons-material"
import { Modal } from "../Modal/Modal"

export function List() {

    const [listTasks, setTaskList] = useState([])
    const [task, setTask] = useState('')
    const [taskSelected, setSelected] = useState([])
 
    const addTask = (e) => {
        e.preventDefault()
        setTaskList([...listTasks, {
            id: listTasks.length + 1,
            name: task
        }])

        setTask('')
    }
    
    const handleRemoveById = (taskId) => {
        const newListTask = listTasks.filter(item => item.id !== taskId)
        setTaskList(newListTask)
    }

    const handleSelectedTask = (taskId) => {
        const currentTask = listTasks.filter(item => item.id === taskId)
        setSelected(currentTask[0])
    }

    const handleUpdateById = (taskUpdated) => {
        const newListTask = listTasks.map((task) => {
            if (task.id === taskUpdated.id){
                task.name = taskUpdated.name
            }

            return task
        })

        setTaskList(newListTask)
        setSelected([])
    }
    
    return (
        <div className={style.container}>
            <div className={style.containerList}>
                <form className={style.form}>
                    <input type="text" 
                        value={task}
                        placeholder="O que você está planejando?" 
                        className={style.inputTask} 
                        onChange={(e) => setTask(e.target.value)} 
                    />
                    <button type="submit" className={style.inputSubmit}  onClick={addTask}><AddCircle/></button>
                </form>
                <ul className={style.taskList}>
                    {listTasks.map((e, index) => {
                        return (
                            <Item 
                                key={index} 
                                id={e.id} 
                                name={e.name} 
                                handleRemoveById={handleRemoveById} 
                                handleSelectedTask={handleSelectedTask}
                            />
                        )
                    })}
                </ul>
            </div>
            <Modal task={taskSelected} handleUpdateById={handleUpdateById} />
        </div>
    )
}