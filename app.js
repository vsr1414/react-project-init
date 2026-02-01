import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "title" }, "Hello World from React yo ho hooo!");
const root = ReactDOM.createRoot(document.getElementById("root"));


// heading is react element which is JS object
//react elelment

// const heading = <h1 id="title">helloo guyss welcome to React</h1>
// root.render(heading);


//React Component --> class based and function based

//Functional Component - A function which returns react element(JS object / JSX Code)

const Title = () =>  <h1 id="title" className="title">This is a title component</h1>
const value = true;
const Navbar = () => {
    return (
        <div>
            if(true) {
                <div>True</div>
            } else {
                <div>False</div>
            }

            value ? <div>Value is true</div> : <div>Value is false</div>

        </div>
    )
}

const HeadingComponent = () => {
    return (
        <div>
            <div>
                <Title/>
            </div>
            <h1>This is a heading component</h1>
        </div>
    )
}

root.render(<HeadingComponent/>);

//JSX - Javascript XML
//JSX is not HTML
//Babel is used to convert JSX to React.createElement()  --> JS Object