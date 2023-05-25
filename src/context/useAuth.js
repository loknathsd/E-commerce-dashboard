import { useContext } from "react";
import { Context } from "./UserContext";

const useAuth =()=>useContext(Context);

export default useAuth;