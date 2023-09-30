
const heading = React.createElement("div" , {id:"parent"},"Hello",  
                [React.createElement("h1",{id:"child1"},"inside tag"),
                React.createElement("h2",{id:"child2"},"inside h2")]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
