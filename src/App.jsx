import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Request from "./components/Workspace/Request/RequestPanel";
import Response from "./components/Workspace/Response/ResponsePanel";

const App = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Request setResponse={setResponse} setLoading={setLoading} />
              <Response response={response} loading={loading} />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
