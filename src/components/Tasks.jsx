import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  AddIcon,
  CloudeSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from "../assets/icons";
import AddTaskDialog from "./AddTaskDialog";
import Button from "./Button";
import TaskItem from "./TaskItem";
import TasksSeparator from "./TasksSeparator";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false);

  useEffect(() => {
    // Pegar dados da Api
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "GET",
      });
      const tasks = await response.json();

      // Atualizar estado com os dados da Api
      setTasks(tasks);
    };

    fetchTasks();
  }, []);

  const morningTasks = tasks.filter((task) => task.time === "morning");

  const afternoonTasks = tasks.filter((task) => task.time === "afternoon");

  const eveningTasks = tasks.filter((task) => task.time === "evening");

  const onDeleteTaskSuccess = async (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    toast.success("Tarefa removida com sucesso!");
  };

  const handleTaskCheckboxClick = (taskId) => {
    // Lógica para lidar com o clique na checkbox da tarefa
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }

      if (task.status === "not_started") {
        toast.success("Tarefa em progresso!");
        return { ...task, status: "in_progress" };
      }

      if (task.status === "in_progress") {
        toast.success("Tarefa concluída!");
        return { ...task, status: "done" };
      }

      if (task.status === "done") {
        toast.success("Tarefa reiniciada!");
        return { ...task, status: "not_started" };
      }

      return task;
    });
    setTasks(newTasks);
  };

  const onTaskSubmitSuccess = (task) => {
    setTasks([...tasks, task]);
    toast.success("Tarefa adicionada com sucesso!");
  };

  const onTaskSubmitError = () => {
    toast.error("Erro ao adicionar tarefa!");
  };

  return (
    <div className="w-full space-y-6 px-8 py-16">
      {/* TITULO E BOTOES */}
      <div className="flex w-full justify-between">
        {/* Titulo */}
        <div>
          <span className="text-xs font-semibold text-brand-primary">
            Minhas Tarefas
          </span>
          <h2 className="text-sl font-semibold">Minhas tarefas</h2>
        </div>

        {/* Botoes */}
        <div className="flex items-center gap-3">
          <Button color="ghost">
            Limpar Tarefas
            <TrashIcon />
          </Button>
          <Button onClick={() => setAddTaskDialogIsOpen(true)}>
            Nova Tarefa
            <AddIcon />
          </Button>
          <AddTaskDialog
            isOpen={addTaskDialogIsOpen}
            handleClose={() => setAddTaskDialogIsOpen(false)}
            onSubmitSuccess={onTaskSubmitSuccess}
            onSubmitError={onTaskSubmitError}
          />
        </div>
      </div>
      {/* LISTA DE TAREFAS */}
      <div className="rounded-xl bg-white p-6">
        <div className="my-6 space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          {/* TAREFAS DE MANHA */}
          {morningTasks.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da manhã
            </p>
          )}
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              onDeleteSuccess={onDeleteTaskSuccess}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudeSunIcon />} />
          {/* TAREFAS DA TARDE */}
          {afternoonTasks.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da manhã
            </p>
          )}
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              onDeleteSuccess={onDeleteTaskSuccess}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {/* TAREFAS DA NOITE */}
          {eveningTasks.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da manhã
            </p>
          )}
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              onDeleteSuccess={onDeleteTaskSuccess}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
