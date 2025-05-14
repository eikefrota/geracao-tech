import "./button.css";

// export function Button(props) {
//     return (
//         <>
//         <button className={props.className}>Login</button>
//         </>
//     );
// }

export function Button(props) {
    return (
        <>
        <button
            type={props.type}
            id={props.id}
            name={props.name}
            className={props.className}>
                Login
        </button>
        </>
    );
}
