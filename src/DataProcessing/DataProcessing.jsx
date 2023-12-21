import { createContext } from "react";
import AddCategoryData from "./Components/AddCategoryData";
import PropTypes from 'prop-types';

export const DataContext = createContext();

export default function DataProcessing({ children }) {
    const { handleNewCategory, handleSave, categoryCollection, openCategoryModal, handleOpenCategoryModal, handleCloseCategoryModal
    } = AddCategoryData()
    return (
        <DataContext.Provider
            value={{
                // Add New Category Data Processing
                handleNewCategory, handleSave, categoryCollection, openCategoryModal, handleOpenCategoryModal, handleCloseCategoryModal,
                // Add New Category Data Processing
            }}
        >
            {children}
        </DataContext.Provider>
    )
}
// Prop types validation
DataProcessing.propTypes = {
    children: PropTypes.node.isRequired,
};