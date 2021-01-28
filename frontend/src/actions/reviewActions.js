import axios from "axios";
import {
  USER_CREATE_REVIEW_FAIL,
  USER_CREATE_REVIEW_REQUEST,
  USER_CREATE_REVIEW_SUCCESS,
} from "../constants/reviewConstants";
import API from "../API";

export const createUserReview = (review) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_CREATE_REVIEW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`${API}/api/reviews/new`, review, config);

    dispatch({
      type: USER_CREATE_REVIEW_SUCCESS,
      payload: { data },
    });
    //localStorage.setItem("userExp", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
