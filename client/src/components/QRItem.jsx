import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const QRItem = ({ food }) => {
  const [items, setItems] = useState(food.items);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    const calculateTotalCalories = () => {
      const total = items.reduce((total, item) => total + (parseInt(item.calories) * parseInt(item.quantity)), 0);
      setTotalCalories(total);
    };

    calculateTotalCalories();
  }, [items]);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setItems(updatedItems);
  };

  const handleIncreaseQuantity = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = parseInt(updatedItems[index].quantity) + 1;
    setItems(updatedItems);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity > 0) {
      updatedItems[index].quantity = parseInt(updatedItems[index].quantity) - 1;
      setItems(updatedItems);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{food.dishName}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-1 flex justify-between items-center">
            <div>
              <span className="font-medium">{item.name}</span>: {item.quantity} - {item.calories} cal
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleDecreaseQuantity(index)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <Minus className="h-4 w-4 text-gray-600" />
              </button>
              <button
                onClick={() => handleIncreaseQuantity(index)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <Plus className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <span className="font-medium">Total Calories:</span> {totalCalories} cal
      </div>
    </div>
  );
};

export default QRItem;
