import { configureStore } from '@reduxjs/toolkit';

import thunk from "redux-thunk";
import reducers from "./reducers";
import { routerMiddleware } from 'connected-react-router';


 export const store = configureStore(
    reducers,{},
  //  middleware(thunk,routerMiddleware),
  );