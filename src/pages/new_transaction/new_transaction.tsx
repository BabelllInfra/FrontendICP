import { useForm } from "react-hook-form";
import ButtonPrimary from "../../components/buttonPrimary";
import { useState, useEffect } from "react";
import StatusButton from "../../models/button_status_enum";
import { ChangeIsBack } from "../../redux/mainSlice";
import { useDispatch } from "react-redux";

/* eslint-disable no-case-declarations */
const NewTransactionPage = () => {
  //=============  REACT FORM ============= 
  type FormValues = {
    amount: string,
  }

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()

  //=============  REACT FORM ============= 
  const [statusbutton, setStatusButton] = useState(StatusButton.Enabled);
  const dispatch = useDispatch();

  //=============  INIT ============= 
  const init = async () => {
    dispatch(ChangeIsBack({
      isBack: false,
    }))
  }
  useEffect(() => {
    init();
    // repeat();
  }, []);
  //=============  INIT ============= 


  const onSubmit = () => {
    
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
                  validate: (value) => {
                    // const pattern1 = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s]).*$/;
                    // const pattern2 = /^[^\s]+$/;
                    // if (!value.match(pattern2)) {
                    //   return 'La contraseña no puede contener espacios';
                    // }
                    // if (!value.match(pattern1)) {
                    //   return 'La contraseña debe contener min una letra mayúscula [A-Z], un número [ 0-9] y un simbolo [!@#$%^&*()_-]';
                    // }

                    return true;
                  },
                })} />
              {errors.amount && <span className="errorTxt">{errors.amount.message}</span>}

            </div>

            <div className="w-full flex flex-row justify-between mt-4">
              <p className="font-bold">Criptomoneda o Token: </p>
              <div className="bg-grayLow flex flex-row p-2 rounded-lg gap-2">
                <p className="font-bold">bitcoin</p>
              </div>
            </div>
            <div className="w-full flex flex-row justify-between mt-4" >
              <p className="font-bold">Red: </p>
              <div className="bg-grayLow flex flex-row p-2 rounded-lg gap-2">
                <p className="font-bold">ckbitcoin</p>
              </div>
            </div>
            <div className="w-full flex flex-row justify-end mt-4 mb-10" >
              <p className="text-grayBold mx-4"> Comisión:  {'response.comision'}</p>
            </div>
            <ButtonPrimary type="button" name="Generar código QR" status={statusbutton} onClick={() => { }} />
          </form>
        </div>
      </div>
    </>

  )
}

export default NewTransactionPage;