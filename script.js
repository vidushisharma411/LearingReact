// const heading = React.createElement("h1", {id: "heading", xyz: "hdhhjgj"}, "Hellow world");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// console.log(heading); 

const parent = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child"},
        [React.createElement("h1", {}, "fisrt h1 tag"),
         React.createElement("h2", {}, "second h2tag"),
        ]),
    React.createElement("div", {id: "child2"},
        [React.createElement("h1", {}, "fisrt h1 tag"),
         React.createElement("h2", {}, "second h2 tag"),
        ]),   
    ]);
console.log(parent);
    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent );