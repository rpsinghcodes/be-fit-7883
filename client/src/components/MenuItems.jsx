import { useEffect, useState } from 'react';
import { getAll, updateFood, deleteFood } from '../api/api';
import DishCard from './DishCard';

const MenuItems = ({ searchQuery, dishes }) => {
  const [allDishes, setAllDishes] = useState([]);
  const [editingDish, setEditingDish] = useState(null);
  const [editedDishName, setEditedDishName] = useState("");
  const [editedItems, setEditedItems] = useState([]);

  useEffect(() => {
    const getDishes = async () => {
      try {
        const data = await getAll();
        if (data && Array.isArray(data.response)) {
          setAllDishes(data.response);
        } else {
          console.error('Unexpected response format:', data);
        }
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };
    getDishes();
  }, []);

  const handleEditClick = (dish) => {
    setEditingDish(dish._id);
    setEditedDishName(dish.dishName);
    setEditedItems(dish.items);
  };

  const handleSaveClick = async () => {
    try {
      const updatedDish = {
        _id: editingDish,
        dishName: editedDishName,
        items: editedItems
      };
      await updateFood(updatedDish);
      setEditingDish(null);
      const data = await getAll();
      if (data && Array.isArray(data.response)) {
        setAllDishes(data.response);
      }
    } catch (error) {
      console.error('Error updating dish:', error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await deleteFood(id, "admin@gmail.com");
      const data = await getAll();
      if (data && Array.isArray(data.response)) {
        setAllDishes(data.response);
      }
    } catch (error) {
      console.error('Error deleting dish:', error);
    }
  };

  const filteredDishes = searchQuery
    ? allDishes.filter(dish =>
        dish.dishName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allDishes;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.isArray(filteredDishes) && filteredDishes.map((dish) => (
        <DishCard
          key={dish._id}
          dish={dish}
          isEditing={editingDish === dish._id}
          onEdit={() => handleEditClick(dish)}
          onSave={handleSaveClick}
          onDelete={() => handleDeleteClick(dish._id)}
          editedDishName={editedDishName}
          setEditedDishName={setEditedDishName}
          editedItems={editedItems}
          setEditedItems={setEditedItems}
        />
      ))}
    </div>
  );
};

export default MenuItems;
