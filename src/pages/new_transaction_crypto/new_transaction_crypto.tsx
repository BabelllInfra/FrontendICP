import { useForm } from "react-hook-form";
import ButtonPrimary from "../../components/buttonPrimary";
import { useState, useEffect } from "react";
import StatusButton from "../../models/button_status_enum";
import { ChangeIsBack } from "../../redux/mainSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { routesNames } from "../../routes/routes";

/* eslint-disable no-case-declarations */
const NewTransactioCryptoPage = () => {
  //=============  REACT FORM ============= 
  type FormValues = {
    amount: number,
  }

  const { register, handleSubmit, formState: { errors }, watch, setError } = useForm<FormValues>()
  const amountWatched = watch('amount');

  //=============  REACT FORM ============= 
  const [statusbutton, setStatusButton] = useState(StatusButton.Disabled);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  //=============  INIT ============= 
  const init = async () => {
    dispatch(ChangeIsBack({
      isBack: true,
    }))
  }
  useEffect(() => {
    init();
    // repeat();
  });

  useEffect(() => {
    console.log('Valor del campo cambiado:', amountWatched);
    if (amountWatched != undefined) {
      if (amountWatched === 0) {
        console.log('Amount')
        setError('amount', { type: 'manual', message: 'El monto debe ser mayor a 0' })
        return
      }
      return
    }
    setError('amount', { type: 'manual', message: '' })
    setStatusButton(StatusButton.Enabled)

  }, [amountWatched]);
  //=============  INIT ============= 


  const onSubmit = () => {
    navigate(routesNames.messageWarningTransaction)
  }



  return (
    <>
      <div className="my-0 mb-20">
        <h4 className="titleTxt text-lg">
          Hola,{'user'}
        </h4>
        <h1 className="titleTxt">
          Enviar
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full">
          <div className="w-full flex flex-row justify-between mt-4">
            <p className="font-bold">Criptomoneda o Token: </p>
            <div className="bg-grayLow flex flex-row p-2 rounded-lg gap-2">
              <p className="font-bold">bitcoin</p>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between mt-4 mb-4" >
            <p className="font-bold">Red: </p>
            <div className="bg-grayLow flex flex-row p-2 rounded-lg gap-2">
              <p className="font-bold">ckbitcoin</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <div className="relative">
                <input className="inputNumber text-end" placeholder='0.0' type="number" {...register('amount',
                  {
                    required: {
                      value: true,
                      message: "Ingresa un monto valido"
                    },
                  })} />
                {errors.amount && <span className="errorTxt">{errors.amount.message}</span>}
                <span className='cursor-pointer absolute left-1 top-2 bottom-0 text-purple font-bold mr-20'>MAX</span>
              </div>
            </div>

            <div className="w-full flex flex-row justify-end mt-1 mb-10" >
              <span className="text-grayBold m-0"><strong className="mr-10">Disponible:</strong>   {'0.30 bitcoin'}</span>
            </div>
            <ButtonPrimary type="submit" name="Enviar" status={statusbutton} onClick={() => { }} />
          </form>
        </div>
      </div>
    </>

  )
}

export default NewTransactioCryptoPage;