import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "08678cc2283e4d228f4992faaeb6e1f2"
    }
})