import { useEffect, useState } from "react";
import { ExpandOutline, CloseOutline } from "react-ionicons";
import { useTreeState } from "./context/TreeContext";
import { fetchData } from "./api/index";
import TreeView from "./components/TreeView/TreeView";
import Button from "./components/_shared/Button";
import Input from "./components/_shared/Input";
import { SIZES } from "./variables/sizes";
import { COLORS } from "./variables/colors";
import "./styles/index.scss";

function App() {
  const { state, dispatch } = useTreeState();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData().then((data) => {
        dispatch({type: "INIT_DATA", data});
    })
  }, []);

  const onHandleChange = (e) => {
      const query = e.target.value;
      setSearchQuery(query);
      dispatch({ type: "SEARCH", query });
  };

  return (
    <div className="App">
      <div className="tree-view-sidebar">
          <div className="tree-form-container">
              <Input
                  name="search"
                  type="text"
                  placeholder="Search file or folder"
                  value={searchQuery}
                  handleChange={onHandleChange}
              />

              <div className="tree-buttons-container">
                  <Button clickHandler={() => dispatch({type: "OPEN_ALL"})} name="Open all folders">
                      <ExpandOutline
                          color={COLORS.WHITE}
                          height={SIZES.ICON.SMALL}
                          width={SIZES.ICON.SMALL}
                      />
                  </Button>
                  <Button clickHandler={() => dispatch({type: "CLOSE_ALL"})} name="Close all folders">
                      <CloseOutline
                          color={COLORS.WHITE}
                          height={SIZES.ICON.SMALL}
                          width={SIZES.ICON.SMALL}
                      />
                  </Button>
              </div>
          </div>

          <TreeView data={state} />
      </div>
    </div>
  );
}

export default App;
