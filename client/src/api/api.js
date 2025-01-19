import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchDishes = async () => {
  try {
    const response = await axios.get(`${API_URL}/food`);
    return response.data;
  } catch (error) {
    console.error('Error fetching dishes:', error);
    throw error;
  }
};

export const addDish = async (dish) => {
  try {
    const response = await axios.post(`${API_URL}/food`, {
      email: "admin@gmail.com",
      dishName: dish.name,
      items: dish.items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        calories: item.calorie
      }))
    });
    return response.data;
  } catch (error) {
    console.error('Error adding dish:', error);
    throw error;
  }
};

export const getAll = async () => {
  try {
    const response = await axios.get(`${API_URL}/food`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all food items:', error);
    throw error;
  }
};

export const getFoodByName = async (foodName) => {
  try {
    const response = await axios.get(`${API_URL}/food/${foodName}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching food item by name (${foodName}):`, error);
    throw error;
  }
};

export const updateFood = async (food) => {
  try {
    const response = await axios.put(`${API_URL}/food`, food);
    return response.data;
  } catch (error) {
    console.error('Error updating food item:', error);
    throw error;
  }
};

export const deleteFood = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/food/${id}`, {
      data: { email: "admin@gmail.com" }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting food item:', error);
    throw error;
  }
};
