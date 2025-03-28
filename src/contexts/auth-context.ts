import { User } from "@/types/user";
import { createContext } from "react";

type AuthContextType = {
    user: User | null;
    loading: boolean;
    signUp: (email: string, passwordHash: string) => Promise<void>;
    signIn: (email: string, passwordHash: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext();
