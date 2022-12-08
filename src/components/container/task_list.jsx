import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Ejemplo', 'Ejemplo de tarea', true, LEVELS.NORMAL);

    return (
        <div>
            <div>
                Sus tareas:
                <TaskComponent task={defaultTask} />
            </div>
        </div>
    );
};

export default TaskListComponent;
