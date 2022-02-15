import { IProduct } from "../../types";

export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST";
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL";

export interface ProductDetailsRequestAction {
  type: typeof PRODUCT_DETAILS_REQUEST;
}

export interface ProductDetailsSuccessAction {
  type: typeof PRODUCT_DETAILS_SUCCESS;
  payload: IProduct;
}

export interface ProductDetailsFailAction {
  type: typeof PRODUCT_DETAILS_FAIL;
  payload: any;
}

export type ActionProductDetailsTypes =
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDetailsFailAction;
