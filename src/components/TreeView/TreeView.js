import TreeViewItem from "../TreeViewItem/TreeViewItem";

const TreeView = ({ data }) => {
    return (
        <div className="tree-view">
            {data?.map(item => (
                <TreeViewItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default TreeView;
