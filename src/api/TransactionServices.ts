import axios from "axios";
import authHeader from "./authHeader";
import * as Constant from "./Constant"


class TransactionServices {
    transactionRequest: object

    constructor(startDate: string, endDate:string) {
        this.transactionRequest = {
            start_date: startDate,
            end_date: endDate
        }
    }

    getTransactionHistory() {
        return axios.post(Constant.SANDBOX_HOST + Constant.getTransaction,this.transactionRequest, {headers: authHeader()}, )
    }

}