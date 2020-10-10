import { Alert, AsyncStorage } from "react-native";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

const initialState = {
  email: "",
  firstname: "",
  username: "",
  password: "",
  image: "",
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EMAIL_EDIT":
      return {
        ...state,
        email: action.data,
      };
    case "FIRSTNAME_EDIT":
      return {
        ...state,
        firstname: action.data,
      };
    case "USERNAME_EDIT":
      return {
        ...state,
        username: action.data,
      };
    case "PASSWORD_EDIT":
      return {
        ...state,
        password: action.data,
      };
    case "ON_SUBMIT":
      Alert.alert("Signed Up succesfully.");
      return state;

    case "IMAGE_EDIT":
      return {
        ...state,
        image: action.data,
      };

    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, signUpReducer);
const store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
