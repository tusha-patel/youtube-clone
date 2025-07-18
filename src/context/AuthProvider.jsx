import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidApi";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [value, setValue] = useState("lofi");

    useEffect(() => {
        fetchAlldata(value);
    }, [value]);

    const fetchAlldata = (query) => {
        setLoading(true);
        fetchData(`search/?q=${query}`).then(({ contents }) => {
            setData(contents);
            setLoading(false);
        });
    }

    return (
        <AuthContext.Provider value={{ loading, data, value, setValue }} >
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);