
//Created nested element
/*  <div>
        <div>
            <h1> </h1>
        </div>
    </div> 
*/  

/*const parent = React.createElement("div",{id:"parent"},
          React.createElement("div",{id:"child"}, 
          React.createElement("h1",{},"i am an h1 tag")) );
*/
//If you have to create sibllings to h1 


/*
<div>
    <div>
        [<h1></h1>
        <h1></h1>]
    </div>
</div>
*/

const parent = React.createElement("div",{id:"parent"},
          React.createElement("div",{id:"child"}, 
          [React.createElement("h1",{style: {background:"red" }},"i am an h1 tag"),React.createElement("h1",{},"i am an h1 tag") ]) );



// Created an element 
//const heading = React.createElement("h1",{},"Hello world in React");

//create root using CreatRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

//Passing react element inside root
root.render(parent);

