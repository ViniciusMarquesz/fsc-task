import {
  LayoutListIcon,
  ListCheckIcon,
  LoaderCircleIcon,
  WaterIcon,
} from "../assets/icons";
import DashboardCard from "../components/DashboardCard";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import { useGetTasks } from "../hooks/data/use-get-tasks";

const HomePage = () => {
  const { data: tasks } = useGetTasks();

  const inProgressTasks = tasks?.filter(
    (task) => task.status === "in_progress"
  ).length;

  const completedTasks = tasks?.filter(
    (task) => task.status === "completed"
  ).length;

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full space-y-6 px-8 py-16">
        <Header subtitle="Dashboard" title="Dashboard" />
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <DashboardCard
            icon={<LayoutListIcon />}
            mainText={tasks?.length || 0}
            secondaryText="Tarefas disponiveis"
          />

          <DashboardCard
            icon={<ListCheckIcon />}
            mainText={inProgressTasks}
            secondaryText="Tarefas concluídas"
          />

          <DashboardCard
            icon={<LoaderCircleIcon />}
            mainText={completedTasks}
            secondaryText="Tarefas pendentes"
          />

          <DashboardCard
            icon={<WaterIcon />}
            mainText="5"
            secondaryText="Agua"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
