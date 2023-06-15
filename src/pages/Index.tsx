import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { authenticate, login, logout } from "../store/reducers/auth";

const Index = () => {
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
    const dispatch = useAppDispatch();


    return <div className="h-[100vh] flex items-center justify-center">
        <Link to="/auth" className="text-[48px]">Login</Link>
    </div>
}


export default Index;