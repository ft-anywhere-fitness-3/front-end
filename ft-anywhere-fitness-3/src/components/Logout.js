import React, {useEffect} from "react";

const Logout = (props) => {
  const { setLoggedIn } = props;

    useEffect(() => {
        setLoggedIn(false)
        localStorage.removeItem("token");
        localStorage.removeItem("instructor_id");
        localStorage.removeItem("user_role");
        props.history.push('/login');
    },[])
    return <div></div>
}

export default Logout;