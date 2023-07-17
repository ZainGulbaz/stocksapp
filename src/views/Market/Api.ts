import Axios from "axios";

import { BASE_API_URL } from "../../utils/Constants";
import { Stock } from "../../utils/Interface";
export const getStocksData=async():Promise<Stock[]|[]>=>{
    try{
     
        let res= await Axios.get(BASE_API_URL+"stocks");
        return res.data;

    }
    catch(err:any)
    {
        throw new Error(err);
    }

}