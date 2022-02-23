import React, { useMemo, useReducer, useState, createContext } from "react";
import { getUserId, saveUserId } from "services/userIdService";

import { GET_USER_ID } from "./appActions";
import { appReducer } from "./appReducer";

const AppContext = createContext();

export const AppProvider = (props) => {
  const [loading, setLoading] = useState(false);

  // context initial state
  const initialState = {
    userId: "",
  };

  // context reducer
  const [state, dispatch] = useReducer(appReducer, initialState);

  // uploadUserCatImage
  const uploadCatImage = (formData) => {};
  // fetchUserCatImages
  const fetchUserImages = () => {};
  // favoriteCatImage
  const favoriteCatImage = () => {};
  // upvoteCatImage
  const upvoteCatImage = () => {};
  // downVoteImage
  const downVoteImage = () => {};

  const values = useMemo(() => {
    return {
      userId: state.userId,
      loading,
      uploadCatImage,
      fetchUserImages,
      favoriteCatImage,
      upvoteCatImage,
      downVoteImage,
    };
  }, [state, loading]);

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (typeof context === undefined) {
    throw new Error("userAppContext must beused with AppProvider");
  }
  return context;
};
