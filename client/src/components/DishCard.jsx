// DishCard.jsx
import React, { useState } from 'react';
import { Edit2, Trash2, Plus, Minus } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DishCard = ({ 
  dish, 
  isEditing, 
  onEdit, 
  onSave,
  onDelete,
  editedDishName,
  setEditedDishName,
  editedItems,
  setEditedItems 
}) => {
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...editedItems];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setEditedItems(updatedItems);
  };

  const handleAddItem = () => {
    setEditedItems([...editedItems, { name: '', quantity: '', calories: '' }]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = editedItems.filter((_, i) => i !== index);
    setEditedItems(updatedItems);
  };

  return (
    <div className={`glass-morphism rounded-xl p-6 card-hover animate-fadeIn ${isEditing ? 'bg-yellow-50' : ''}`}>
      <div className="flex justify-between items-start mb-4">
        {isEditing ? (
          <input
            type="text"
            value={editedDishName}
            onChange={(e) => setEditedDishName(e.target.value)}
            className="text-xl font-semibold text-gray-800 bg-yellow-50 p-1 rounded"
          />
        ) : (
          <h3 className="text-xl font-semibold text-gray-800">{dish.dishName}</h3>
        )}
        <div className="flex gap-2">
          {isEditing ? (
            <button
              className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              onClick={onSave}
            >
              Save
            </button>
          ) : (
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={onEdit}
            >
              <Edit2 className="h-4 w-4 text-gray-600" />
            </button>
          )}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button 
                className="p-2 hover:bg-red-100 rounded-lg transition-colors"
              >
                <Trash2 className="h-4 w-4 text-red-600" />
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete this dish.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {isEditing && (
        <div className="grid grid-cols-4 gap-2 mb-2 px-3 text-sm font-medium text-gray-600">
          <div>Name</div>
          <div>Quantity</div>
          <div>Calories</div>
          <div>Actions</div>
        </div>
      )}

      <div className="space-y-3">
        {(isEditing ? editedItems : dish.items).map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-3 bg-white rounded-lg shadow-sm ${isEditing ? 'bg-yellow-50' : ''}`}
          >
            {isEditing ? (
              <div className="grid grid-cols-4 gap-2 w-full">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                  className="font-medium text-gray-800 bg-yellow-50 p-1 rounded"
                  placeholder="Item name"
                />
                <input
                  type="text"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                  className="text-sm text-gray-600 bg-yellow-50 p-1 rounded"
                  placeholder="Quantity"
                />
                <input
                  type="text"
                  value={item.calories}
                  onChange={(e) => handleItemChange(index, 'calories', e.target.value)}
                  className="text-sm text-gray-600 bg-yellow-50 p-1 rounded"
                  placeholder="Calories"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="p-1 hover:bg-red-100 rounded transition-colors"
                  >
                    <Minus className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.quantity}</p>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {item.calories} cal
                </span>
              </>
            )}
          </div>
        ))}
      </div>
      
      {isEditing && (
        <button
          onClick={handleAddItem}
          className="mt-4 w-full py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Item
        </button>
      )}
    </div>
  );
};

export default DishCard;