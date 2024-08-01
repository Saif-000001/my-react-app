// props drilling

/* import ComponentD from "./ComponentD";

function ComponentC (props) {
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <ComponentD user = {props.user} />
        </div>
    );
}

export default ComponentC; */



import ComponentD from "./ComponentD";

function ComponentC () {
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <ComponentD />
        </div>
    );
}

export default ComponentC;