import App from "./App.js";

const intializeApp = function () {
    const app = new App();
    console.log("THis", this);
    window.handleCellClick = app.handleCellClick;
};

// document.addEventListener("DOMContentLoaded", intializeApp);
intializeApp();
