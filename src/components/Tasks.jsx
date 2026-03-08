import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { CloudeSunIcon, MoonIcon, SunIcon } from "../assets/icons";
import { useGetTasks } from "../hooks/data/use-get-tasks";
import { taskQueryKeys } from "../keys/queries";
import Header from "./Header";
import TaskItem from "./TaskItem";
import TasksSeparator from "./TasksSeparator";

const Tasks = () => {
  const queryClient = useQueryClient();
  const { data: tasks } = useGetTasks();

  const morningTasks = tasks?.filter((task) => task.time === "morning");

  const afternoonTasks = tasks?.filter((task) => task.time === "afternoon");

  const eveningTasks = tasks?.filter((task) => task.time === "evening");

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
    queryClient.setQueryData(taskQueryKeys.getAll(), newTasks);
  };

  return (
    <div className="w-full space-y-6 px-8 py-16">
      {/* TITULO E BOTOES */}
      <Header subtitle="Minhas tarefas" title="Minhas tarefas" />
      {/* LISTA DE TAREFAS */}
      <div className="rounded-xl bg-white p-6">
        <div className="my-6 space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          {/* TAREFAS DE MANHA */}
          {morningTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da manhã
            </p>
          )}
          {morningTasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudeSunIcon />} />
          {/* TAREFAS DA TARDE */}
          {afternoonTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da manhã
            </p>
          )}
          {afternoonTasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </div>

        <div className="my-6 space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {/* TAREFAS DA NOITE */}
          {eveningTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da manhã
            </p>
          )}
          {eveningTasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
