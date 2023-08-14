/**
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>
**/


const parent = React.createElement("div", { id:"parent" },[
    React.createElement("div", { id:"child" }, [
        React.createElement("div", {}, "I'm h1 tag"),
        React.createElement("div", {}, "I'm h tag")
    ]),
    React.createElement("div", { id:"child" }, [
        React.createElement("div", {}, "I'm h1 tag"),
        React.createElement("div", {}, "I'm h tag")
    ])
]);

// const heading = React.createElement("h1", {}, "hello from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);