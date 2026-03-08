import PropTypes from "prop-types";
import { useState } from "react";

import { AddIcon, TrashIcon } from "../assets/icons";
import AddTaskDialog from "./AddTaskDialog";
import Button from "./Button";

function Header({ subtitle, title }) {
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false);

  return (
    <div className="flex w-full justify-between">
      {/* Titulo */}
      <div>
        <span className="text-xs font-semibold text-brand-primary">
          {subtitle}
        </span>
        <h2 className="text-sl font-semibold">{title}</h2>
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
        />
      </div>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
