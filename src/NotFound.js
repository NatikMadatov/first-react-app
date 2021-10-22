import {Link} from "react-router-dom";

const NotFound = ()=>{
    return(
        <div className="not-found">
            <h2>Sorry</h2>
            <p>404 Not Found</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    )
};
export default NotFound;
