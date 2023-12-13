import { useTreeState } from "../../../context/TreeContext";
import { COLORS } from "../../../variables/colors";

export const useToggle = () => {
    const { dispatch } = useTreeState();

    const toggleHandler = (item) => {
        if (item.access) {
            dispatch({
                type: "TOGGLE_ITEM",
                id: item.id,
                isOpened: !item.isOpened
            });
        }
    };

    const toggleOpenedItemColor = (item) => {
        switch (item.project) {
            case "React":
                return COLORS.GRAY;
            case "Vue":
                return COLORS.GREEN;
            case "Angular":
                return COLORS.LIGHT_RED;
            default:
                return "";
        }
    };


    return {
        toggleHandler,
        toggleOpenedItemColor,
    };
};
