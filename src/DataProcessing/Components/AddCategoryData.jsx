import { useState } from "react";

export default function AddCategoryData() {
    const [openCategoryModal, setOpenCategoryModal] = useState(false);
    const handleOpenCategoryModal = () => {
        setOpenCategoryModal(true)
    }
    const handleCloseCategoryModal = () => {
        setOpenCategoryModal(false)
    }
    const [categoryCollection, setCategoryCollection] = useState({
        id: "CTC0001",
        categoryName: "",
    });
    const handleNewCategory = (e) => {
        const { name, value } = e.target;
        setCategoryCollection((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSave = () => {
        setOpenCategoryModal(false);
    };
    return (
        {
            handleNewCategory, handleSave, categoryCollection,openCategoryModal,handleOpenCategoryModal,handleCloseCategoryModal
        }
    )
}
