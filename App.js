import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="head" tabIndex="5">Nameste React using jsx</h1>
);

const element = (
    <div> React element </div>
)
    

const HeadingComponent = () => (
    <div id="container" className="heading">
        <Title />
        {Title()}
        {element}
        <h1>Nameste react from  functional component</h1>
    </div>
);
// const heading = React.createElement("h1", {}, "hello from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);