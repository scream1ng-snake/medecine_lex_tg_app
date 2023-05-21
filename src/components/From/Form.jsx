import React from "react";
import useTelega from "../../hooks/UseTelegram";
import './Form.css';

const Form = () => {
  const [country, setCountry] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [subject, setSubject] = React.useState('physical');
  const { tg } = useTelega();

  const onSendData = React.useCallback(() => {
    const data = {
      country,
      street,
      subject
    }
    tg.sendData(JSON.stringify(data))
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    tg?.WebApp?.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg?.WebApp?.offEvent('mainButtonClicked', onSendData)
    }
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные'
    })
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    if(!street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show()
    } 
    // eslint-disable-next-line
  }, [street, country])

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  const onChangeStreet = (e) => {
    setStreet(e.target.value)
  }

  const onChangeSubject = (e) => {
    setSubject(e.target.value)
  }

  return (
    <div className="form">
      <h3>Введите ваши данные</h3>
      <input 
        type="text" 
        className="input" 
        placeholder="Страна" 
        value={country}
        onChange={onChangeCountry}
      />
      <input 
        type="text" 
        className="input" 
        placeholder="Улица" 
        value={street}
        onChange={onChangeStreet}
      />
      <select 
        className="select"
        onChange={onChangeSubject}
        value={subject}
      >
        <option value="physical">
          Физ. лицо
        </option>
        <option value="legal">
          Юр. лицо
        </option>
      </select>
    </div>
  )
}

export default Form;