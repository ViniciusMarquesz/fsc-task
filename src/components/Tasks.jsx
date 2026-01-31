import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import CloudeSunIcon from "../assets/icons/cloud-sun.svg?react";
import TasksSeparator from "./TasksSeparator";

const Tasks = () => {
  return (
    <div className="w-full px-8 py-16">
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
        {/* MANHÃ */}
        <div className="my-6 space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
        </div>

        {/* TARDE */}
        <div className="my-6 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudeSunIcon />} />
        </div>

        {/* NOITE */}
        <div className="my-6 space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
