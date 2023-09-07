import React, { useEffect, useState } from 'react'
import './Form.css'
import { useTelegram } from '../../hooks/useTelegram';
function Form() {
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [subject, setSubject] = useState();
  const {tg} = useTelegram();

  useEffect(()=>{
    tg.MainButton.setParams({
      text: "Ma'lumotlarni jo'natish"
    })
  },[])
  useEffect(()=>{
    if(!city || !street){
      tg.MainButton.hide();
    }else{
      tg.MainButton.show();
    }
  },[city, street])
  const onChangeCity = (e) => {
    setCity(e.target.value);
  }
  
  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  }
  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  }


  return (
    <div className={'form'}>
      <h3>Ma'lumotlaringizni kiriting </h3>
      <input className={'input'} value={city} onChange={onChangeCity} type='text' placeholder={'Viloyat(shahar)'} />
      <input className={'input'} value={street} onChange={onChangeStreet} type='text' placeholder={'Manzil'} />
      <select className={'select'} value={subject} onChange={onChangeSubject}>
        <option value={'physical'}>Jismoniy shaxs</option>
        <option value={'legal'}>Yuridik tashkilot</option>
      </select>
    </div>
  )
}

export default Form