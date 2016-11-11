import { combineReducers } from "redux";
import pagination from "./paginationReducer";
import visiblePanel from "./visiblePanelReducer";
import pages from "./pagesReducer";
import addPages from "./addPagesReducer";
import theme from "./themeReducer";
import pageHierarchy from "./pageHierarchyReducer";
import errors from "./errorsReducer";
import pageSeo from "./pageSeoReducer";

const rootReducer = combineReducers({
    pagination,
    visiblePanel,
    pages,
    addPages,
    theme,
    pageHierarchy,
    errors,
    pageSeo
});

export default rootReducer;
