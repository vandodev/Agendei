import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Tenta carregar o estado do usuário do localStorage
        const token = localStorage.getItem("sessionToken");
        const id = localStorage.getItem("sessionId");
        const email = localStorage.getItem("sessionEmail");
        const name = localStorage.getItem("sessionName");

        if (token && id && email && name) {
            setUser({ id, email, name });
        }
    }, []);

    function logout() {
        // Limpa o localStorage e o estado do usuário
        localStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
}