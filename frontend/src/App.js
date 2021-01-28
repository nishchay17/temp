import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CreateReviewScreen from "./screens/CreateReviewScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/new" component={CreateReviewScreen} />
        <Route path="/" component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
