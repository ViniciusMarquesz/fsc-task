import Sidebar from "../components/sidebar";
import Tasks from "../components/Tasks";

function TasksPage() {
  return (
    <div className="flex">
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default TasksPage;
