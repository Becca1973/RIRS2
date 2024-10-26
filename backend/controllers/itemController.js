const ItemModel = require('../models/itemModel');

const ItemController = {
    getItems: (req, res) => {
        ItemModel.getAllItems((err, items) => {
            if (err) return res.status(500).json({ message: err.message });
            res.json(items);
        });
    },

    createItem: (req, res) => {
        const { name } = req.body;
        if (!name) return res.status(400).json({ message: 'Name is required' });

        ItemModel.addItem(name, (err, item) => {
            if (err) return res.status(500).json({ message: err.message });
            res.status(201).json(item);
        });
    }
};

module.exports = ItemController;