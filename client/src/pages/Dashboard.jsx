import { useState } from "react";
import Navbar from "../components/Navbar";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { AddItemForm } from "../components/AddItemForm";
import { ToastContainer } from "react-toastify";
import MenuItems from "../components/MenuItems";
import SearchBar from "../components/searchBar";
// import Background from "../components/Background";

const Dashboard = () => {
  const [dishes, setDishes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Background/> */}
      <Navbar />
      <ToastContainer/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Menu Items</h1>
          <AddItemForm />
        </div>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <MenuItems searchQuery={searchQuery} dishes={dishes} />
      </main>
    </div>
  );
};

export default Dashboard;