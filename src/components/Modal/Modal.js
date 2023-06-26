import {  useState } from "react"
import style from './Modal.module.css'

export function Modal({ task, handleUpdateById }) {
    const { id, name } = task
    const [taskUpdated, setTaskUpdated] = useState('')
    const updateTask = () => {
        handleUpdateById({id, name: taskUpdated})
        setTaskUpdated('')
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className={`modal-content ${style.modal} text-light`}>
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Tarefa</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                   <input 
                        type="text" 
                        value={name || ''} 
                        name="task" 
                        className="form-control mb-3"
                        disabled
                    />
                   <input 
                        type="text" 
                        value={taskUpdated} 
                        name="task" 
                        className="form-control" 
                        onChange={(e) => setTaskUpdated(e.target.value)}
                    />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-primary" onClick={updateTask} data-bs-dismiss="modal" aria-label="Close">Atualizar</button>
                </div>
                </div>
            </div>
        </div>  
    )
}