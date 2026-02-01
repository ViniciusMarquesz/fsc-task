import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import CloudeSunIcon from "../assets/icons/cloud-sun.svg?react";
import TasksSeparator from "./TasksSeparator";
import { useState } from "react";
import tasksList from "../constants/tasks";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const [tasks, setTasks] = useState(tasksList);

  const morningTasks = tasks.filter((task) => task.time === "morning");

  const afternoonTasks = tasks.filter((task) => task.time === "afternoon");

  const eveningTasks = tasks.filter((task) => task.time === "evening");

  const handleTaskDeleteClick = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleTaskCheckboxClick = (taskId) => {
    // Lógica para lidar com o clique na checkbox da tarefa
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }

      if (task.status === "not_started") {
        return { ...task, status: "in_progress" };
      }

      if (task.status === "in_progress") {
        return { ...task, status: "done" };
      }

      if (task.status === "done") {
        return { ...task, status: "not_started" };
      }

      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="w-full space-y-6 px-8 py-16">
      {/* TITULO E BOTOES */}
      <div className="flex w-full justify-between">
        {/* Titulo */}
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-sl font-semibold">Minhas tarefas</h2>
        </div>

        {/* Botoes */}
        <div className="flex items-center gap-3">
          <Button variant="secondary">
            Limpar Tarefas
            <TrashIcon />
          </Button>
          <Button>
            Nova Tarefa
            <AddIcon />
          </Button>
        </div>
      </div>
      {/* LISTA DE TAREFAS */}
      <div className="rounded-xl bg-white p-6">
        <div className="my-6 space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          {/* TAREFAS DE MANHA */}
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudeSunIcon />} />
          {/* TAREFAS DA TARDE */}
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {/* TAREFAS DA NOITE */}
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
