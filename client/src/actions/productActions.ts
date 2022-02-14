import { Dispatch } from "redux";
import axios from "axios";

import {
  ActionProductListTypes,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "./types";
import { IProduct } from "../types";

export const listProducts =
  () => async (dispatch: Dispatch<ActionProductListTypes>) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      const { data } = await axios("/api/products");

      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data as IProduct[],
      });
    } catch (error) {
      const err: any = error;
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
