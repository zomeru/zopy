import {
  ProductListRequest,
  ActionProductListTypes,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../actions/types/";

export const defaultState: ProductListRequest = {
  products: [],
};

export const productListReducer = (
  state: ProductListRequest = defaultState,
  action: ActionProductListTypes
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
