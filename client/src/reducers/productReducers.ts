import {
  ActionProductListTypes,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  //
  ActionProductDetailsTypes,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../actions/types/";
import { IProduct } from "../types";

export interface ProductState {
  loading: boolean;
  error?: any;
}

export interface ProductListState extends ProductState {
  products?: IProduct[];
}

export const defaultListState: ProductListState = {
  loading: true,
  products: [],
};

export const productListReducer = (
  state: ProductListState = defaultListState,
  action: ActionProductListTypes
): ProductListState => {
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

export interface ProductDetailsState extends ProductState {
  product?: IProduct;
}

export const defaultDetailsState: ProductDetailsState = {
  loading: true,
  product: {} as IProduct,
};

export const productDetailsReducer = (
  state: ProductDetailsState = defaultDetailsState,
  action: ActionProductDetailsTypes
): ProductDetailsState => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state };

    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
