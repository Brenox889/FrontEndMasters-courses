 const Pet = () =>{
     return React.createElement("div",{},[
         React.createElement("h1",{},"Luna"),
         React.createElement("h2",{},"Dog"),
         React.createElement("h2",{},"Havanese")
     ])
 }
 
 
 const App = () =>{
           return React.createElement(
            "div",
            {id: "something-important"},
             React.createElement("h1",{}, "Adopt Me!")
           ) 
        };
        ReactDOM.render(React.createElement(App), document.getElementById('root'))