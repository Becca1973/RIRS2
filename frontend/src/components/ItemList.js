import React, { useEffect, useState } from 'react';
import { getItems, addItem } from '../api/itemApi';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [newItemName, setNewItemName] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            const data = await getItems();
            setItems(data);
        };
        fetchItems();
    }, []);

    const handleAddItem = async () => {
        if (!newItemName) return;
        const newItem = await addItem(newItemName);
        if (newItem) {
            setItems([...items, newItem]);
            setNewItemName('');
        }
    };

    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default ItemList;