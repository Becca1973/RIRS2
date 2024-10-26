import axios from 'axios';

const API_URL = 'http://localhost:3000/api/items';

export const getItems = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        return [];
    }
};

export const addItem = async (name) => {
    try {
        const response = await axios.post(API_URL, { name });
        return response.data;
    } catch (error) {
        console.error('Error adding item:', error);
        return null;
    }
};