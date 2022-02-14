export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";

export interface ProductListRequest {
  products: any[];
  loading?: boolean;
  error?: any;
}

export interface ProductAction {
  payload: ProductListRequest;
}

export interface ProductListRequestAction {
  type: typeof PRODUCT_LIST_REQUEST;
}

export interface ProductListSuccessAction extends ProductAction {
  type: typeof PRODUCT_LIST_SUCCESS;
}

export interface ProductListFailAction extends ProductAction {
  type: typeof PRODUCT_LIST_FAIL;
}

export type ActionProductListTypes =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListFailAction;
