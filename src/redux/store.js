import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {encryptTransform} from "redux-persist-transform-encrypt"
import { composeWithDevTools } from "@redux-devtools/extension";
import todoReducer from "./async/todos/reducer";
import langReducer from "./lang/reducer";

const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_SECRET_KEY,
  onError: function (error) {
    console.log(error);
  },
});

const rootReducer = combineReducers({
  todo: todoReducer,
  language: langReducer
});

//real-time storage
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"],
  // blacklist: ["language"]
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//store
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store);

export {store, persistor};