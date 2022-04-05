export function setCategory(categoryInfo,selectedCategory,underCategory,categoryId) {
    return {
        type: 'SET_CATEGORY_INFO',
        data: {categoryInfo: categoryInfo,selectedCategory:selectedCategory,underCategory:underCategory,categoryId:categoryId}
    }
}

