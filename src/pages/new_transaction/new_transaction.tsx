import { useForm } from "react-hook-form";
import ButtonPrimary from "../../components/buttonPrimary";
import { useState, useEffect } from "react";
import StatusButton from "../../models/button_status_enum";
import { ChangeIsBack } from "../../redux/mainSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { routesNames, routesNamesApp } from "../../routes/routes";
import iconBtc from "../../assets/images/ckBTC-token.png";
import { ConvertModel } from "../../models/convert_model";
import TransactionService from "../../services/transaction_service";
import { RequestInitialConvertionModel } from "../../models/request_initial_convertion_model";
import useErrorHandling from "../../hooks/useError";
import toast from "react-hot-toast";
import { lsConversionData } from "../../common/constants/constants";

/* eslint-disable no-case-declarations */
const NewTransactionPage = () => {
  //=============  REACT FORM ============= 
  type FormValues = {
    amount: number,
  }

  const { register, handleSubmit, formState: { errors }, watch, setError, getValues } = useForm<FormValues>()
  const amountWatched = watch('amount');

  //=============  REACT FORM ============= 
  const { errorMessage, handleErrors, clearErrorMessage } = useErrorHandling()
  const [convert, setConvert] =  useState(new ConvertModel('XRP', 'XRP', '0.0', '', ''));

  const [statusbutton, setStatusButton] = useState(StatusButton.Disabled);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  //=============  INIT ============= 
  const init = async () => {
    dispatch(ChangeIsBack({
      isBack: false,
    }))
  }
  useEffect(() => {
    init();
    // repeat();
  });

  useEffect(() => {
    console.log('Valor del campo cambiado:', amountWatched);
    if (amountWatched != undefined) {
      if (amountWatched <= 0) {
        setError('amount', { type: 'manual', message: 'El monto debe ser mayor a 0' })
        return
      }
      if (amountWatched <= 199) {
        setError('amount', { type: 'manual', message: 'El monto minimo es de 200.0' })
        return
      }
    }
    setError('amount', { type: 'manual', message: '' })
    getConvertion()

  }, [amountWatched]);

  const getConvertion = async () =>{
    try{
      setStatusButton(StatusButton.Loading)
      const value =parseInt(getValues('amount').toString()); 
      const request = new RequestInitialConvertionModel(convert.from_currency, convert.network, value);
      const response = await TransactionService.initialConvertion(request);
      setConvert(new ConvertModel(response.from_currency, response.to_currency, response.amount, response.network, response.to_address))
      const objectData = JSON.stringify(response);
      localStorage.setItem(lsConversionData, objectData);
      setStatusButton(StatusButton.Enabled)

    }catch(e){
      setStatusButton(StatusButton.Enabled)
      handleErrors(e)
    }
  }
  //=============  INIT ============= 
  useEffect(() => {
    if (errorMessage !== '') {
      toast.error(errorMessage)
      clearErrorMessage()
    }
  }, [errorMessage])

  const onSubmit = async () => {
    try{
      setStatusButton(StatusButton.Loading)
      const value =parseInt(getValues('amount').toString()); 
      const request = new RequestInitialConvertionModel(convert.from_currency, convert.network, value);
      const response = await TransactionService.initialConvertion(request);
      setConvert(new ConvertModel(response.from_currency, response.to_currency, response.amount, response.network, response.to_address))
      const objectData = JSON.stringify(response);
      localStorage.setItem(lsConversionData, objectData);
      navigate(routesNamesApp.qrTransaction)
      setStatusButton(StatusButton.Enabled)

    }catch(e){
      setStatusButton(StatusButton.Enabled)
      handleErrors(e)
    }
  }



  return (
    <>
      <div className="my-0 mb-20">
        <h4 className="titleTxt text-lg">
          Hola,{'user'}
        </h4>
        <h1 className="titleTxt">
          Nueva Transacción
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex flex-row  items-center justify-between justify-self-center mt-6">
          <p className="font-bold">Recibes</p>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">

              <input className="inputNumber text-end" placeholder='0.0' type="number" {...register('amount',
                {
                  required: {
                    value: true,
                    message: "Ingresa un monto valido"
                  },
                })} />
              {errors.amount && <span className="errorTxt w-full text-start">{errors.amount.message}</span>}

            </div>

            <div className="w-full flex flex-row justify-between mt-4 items-center">
              <p className="font-bold">Criptomoneda o Token: </p>
              <div className="bg-grayLow flex flex-row p-2 rounded-lg gap-2">
                <img src={iconBtc} alt="bitcoin" className="w-[25px] h-[25px]" />
                <p className="font-bold">bitcoin</p>
              </div>
            </div>
            <div className="w-full flex flex-row justify-between mt-4 items-center" >
              <p className="font-bold">Red: </p>
              <div className="bg-grayLow flex flex-row p-2 rounded-lg gap-2">
                <p className="font-bold">ckbitcoin</p>
              </div>
            </div>
            <div className="w-full flex flex-row justify-between mt-4 items-center mb-10" >
              <p className="font-bold"> Comisión:</p>
              <p className="text-grayBold4"> {'0.0 ckBTC'}</p>

            </div>
            <ButtonPrimary type="submit" name="Generar código QR" status={statusbutton} onClick={() => { }} />
          </form>
        </div>
      </div>
    </>

  )
}

export default NewTransactionPage;