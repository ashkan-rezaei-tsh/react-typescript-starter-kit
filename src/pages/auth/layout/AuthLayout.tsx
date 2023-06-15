import { Link } from "react-router-dom";

import classes from "./AuthLayout.module.css";

const AuthLayout = (props: any) => {
    return (
        <div
            dir="rtl"
            className="flex h-screen items-center justify-center bg-[#292537]"
        >
            <div className={classes.pattern}>
                <span className={classes.red}></span>
                <span className={classes.indigo}></span>
                <span className={classes.blue}></span>
                <span className={classes.green}></span>
                <span className={classes.yellow}></span>
            </div>
            <div className="bg-slate mx-auto w-11/12 sm:w-6/12 md:w-5/12 lg:w-3/12">
                <div className="logo mb-8">
                    <Link to="/">
                        {/* <Logo className="mx-auto w-64" /> */}
                    </Link>
                </div>
                <div className="flex w-full flex-col rounded-md border border-[#3a364e] bg-[#302c40] px-4 py-6 text-center">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
