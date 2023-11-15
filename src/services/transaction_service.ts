import { AxiosError } from "axios"
import instance from "./base"
import { RequestInitialConvertionModel } from "../models/request_initial_convertion_model"

const initialConvertion = async ( request:RequestInitialConvertionModel ) => {
  try {
    const response = await instance.post(`/initialConvertion/`, request)
    return response.data.Resultado
  } catch (e) {
    if (e instanceof AxiosError) {
      let message = e.toString()
      if(e.response){
        message =`${e.response.status} ${e.response.statusText}`
      }
      throw new Error(message)
    }
    if(e){
      throw new Error(`Sucedio algo inesperado ${e.toString()}`);
    }
    throw new Error('Sucedio algo inesperado');
  }
}


const TransactionService = {
  initialConvertion,
}

export default TransactionService