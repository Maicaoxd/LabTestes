import axios from "axios";
const url = "http://localhost:4000/produtos";
export const listaDeProdutos = () => axios.get(url);