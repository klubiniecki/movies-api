import { PAGE_SIZE } from "./constants";

const getLimitFromQuery = ({ limit }) => Number(limit) || PAGE_SIZE;

export default getLimitFromQuery;
