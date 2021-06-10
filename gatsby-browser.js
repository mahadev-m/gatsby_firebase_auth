import "firebase/auth";
import React from "react";
import AuthProvider from "../myapp/src/context/auth";

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
);
