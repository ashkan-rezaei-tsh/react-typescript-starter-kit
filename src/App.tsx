import { Routes, Route } from "react-router-dom";

import "./App.css";
import Index from "./pages/Index";
import Auth from "./pages/auth/Auth";
import SendCode from "./pages/auth/Auth";

function App() {


    return (
        <>
            {/* Not Requires Auth */}
            <Routes >
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/sendCode" element={<SendCode />} />
            </Routes>
            {/* Requires Auth */}
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>
        </>
    );
}

export default App;
