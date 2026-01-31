import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";

const Tasks = () => {
  return (
    <div className="w-full px-8 py-16">
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
    </div> // Div pai
  );
};

export default Tasks;
