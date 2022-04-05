const initialState = {
    categoryInfo: null,
    selectedCategory: null,
    underCategory:null,
    categoryId:null
};

const serviceReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY_INFO':
            const {categoryInfo,selectedCategory,underCategory,categoryId} = action.data;
            return {
                ...state,
                categoryInfo: categoryInfo,
                selectedCategory:selectedCategory,
                underCategory:underCategory,
                categoryId:categoryId
            };

    }
    return state
};

export default serviceReducer
