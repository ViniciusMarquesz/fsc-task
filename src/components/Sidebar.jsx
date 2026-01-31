import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#0BADB5]">Task Manager</h1>
        <p>
          Um simples{" "}
          <span className="text-[#0BADB5]">organizador de tarefas</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant="unselected">Inicio</SidebarButton>
        <SidebarButton variant="selected">Minhas Tarefas</SidebarButton>
        <a
          href="#"
          className="rounded-lg bg-[#E6F7F8] px-6 py-3 text-[#0BADB5]"
        >
          Minhas tarefas
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
