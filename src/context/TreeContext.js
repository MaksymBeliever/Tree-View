import { createContext, useContext, useReducer } from "react";

export const TreeStateContext = createContext();

const toggleItem = (items, id, isOpened) => {
    return items.map(item => {
        if (item.id === id) {
            return {
                ...item,
                isOpened
            };
        }

        if (item.children) {
            return {
                ...item,
                children: toggleItem(item.children, id, isOpened)
            };
        }

        return item;
    });
};

const toggleAllItems = (items, isOpened) => {
    return items.map(item => {
        if (item.children) {
            return {
                ...item,
                isOpened,
                children: toggleAllItems(item.children, isOpened)
            };
        }

        return {
            ...item,
            isOpened,
        };
    });
};

const searchItems = (items, query) => {
    items.map(item => {
        item.isHighlight = query.length
            ? item.name.toLowerCase().includes(query.toLowerCase())
            : false;

        if (item.children) {
            searchItems(item.children, query);
        }
    });

    return items;
};

const treeReducer = (state, action) => {
    switch (action.type) {
        case "INIT_DATA":
            return action.data;
        case "TOGGLE_ITEM":
            return toggleItem(state, action.id, action.isOpened);
        case "OPEN_ALL":
            return toggleAllItems(state, true);
        case "CLOSE_ALL":
            return toggleAllItems(state, false);
        case "SEARCH":
            return searchItems(state, action.query);
        default:
            return state;
    }
};

export const TreeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(treeReducer, []);

    return (
        <TreeStateContext.Provider value={{ state, dispatch }}>
            {children}
        </TreeStateContext.Provider>
    );
};

export const useTreeState = () => {
    return useContext(TreeStateContext);
};
