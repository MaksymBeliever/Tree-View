import { ArrowDownOutline, ArrowUpOutline, LockClosed } from "react-ionicons";
import TreeView from "../TreeView/TreeView";
import { useRenderIcon } from "./hooks/useRenderIcon";
import { useToggle } from "./hooks/useToggle";
import { COLORS } from "../../variables/colors";
import { SIZES } from "../../variables/sizes";

const TreeViewItem = ({ item }) => {
    const { renderFileType  } = useRenderIcon();
    const { toggleHandler, toggleOpenedItemColor } = useToggle();

    return (
        <div
            className="tree-item"
            style={{ color: item.isHighlight ? COLORS.RED : "initial", backgroundColor: toggleOpenedItemColor(item) }}
        >
            <div className="tree-item-container">
                {renderFileType(item.type, item?.format)}
                {item.children && (
                    <button onClick={() => toggleHandler(item)} className="toggle-icon">
                        {item.isOpened ? (
                            <ArrowDownOutline
                                color={COLORS.LIGHT_BLUE}
                                height={SIZES.ICON.SMALL}
                                width={SIZES.ICON.SMALL}
                            />
                        ) : (
                            <ArrowUpOutline
                                color={COLORS.LIGHT_BLUE}
                                height={SIZES.ICON.SMALL}
                                width={SIZES.ICON.SMALL}
                            />
                        )}
                    </button>
                )}

                <span>{item.name}</span>

                {!item.access && (
                    <div className="tree-locked-item">
                        <LockClosed
                            color={COLORS.RED}
                            height={SIZES.ICON.SMALL}
                            width={SIZES.ICON.SMALL}
                        />
                    </div>
                )}
            </div>

            {item.isOpened && <TreeView data={item?.children} />}
        </div>
    );
};

export default TreeViewItem;
