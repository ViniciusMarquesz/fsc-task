import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import CloudeSunIcon from "../assets/icons/cloud-sun.svg?react";

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
        <div className="space-y-3">
          <div className="border-[#9A9C9F pb-1] flex gap-2 border-b border-solid">
            <SunIcon />
            <p className="text-sm text-[#9A9C9F]">Manhã</p>
          </div>
        </div>

        {/* TARDE */}
        <div className="my-6 space-y-3">
          <div className="border-[#9A9C9F pb-1] flex gap-2 border-b border-solid">
            <CloudeSunIcon />
            <p className="text-sm text-[#9A9C9F]">Tarde</p>
          </div>
        </div>

        {/* NOITE */}
        <div className="space-y-3">
          <div className="border-[#9A9C9F pb-1] flex gap-2 border-b border-solid">
            <MoonIcon />
            <p className="text-sm text-[#9A9C9F]">Manhã</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
