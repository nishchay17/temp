import {
  USER_CREATE_REVIEW_FAIL,
  USER_CREATE_REVIEW_REQUEST,
  USER_CREATE_REVIEW_RESET,
  USER_CREATE_REVIEW_SUCCESS,
} from "../constants/reviewConstants";

export const userReviewReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case USER_CREATE_REVIEW_REQUEST:
      return { ...state, loading: true };
    case USER_CREATE_REVIEW_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
        success: true,
      };
    case USER_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case USER_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
