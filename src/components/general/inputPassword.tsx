import React, { useState } from 'react'
import style from '../../../styles/General/inputPassword.module.css'
import OpenEye from '../../../public/OpenEye.svg'
import CloseEye from '../../../public/CloseEye.svg'

const InputPassword: React.FC = ({isLoading, handleData, checkOnBlur, value, placeholder, name}) => {
    const [hidePassword, setHidePassword] = useState<boolean>(false)
    return (
        <div className={style.container}>
            <input
                type={hidePassword ? 'text' : 'password'}
                name={name}
                placeholder={placeholder}
                className={isLoading ? style.input_wait : style.input}
                onChange={handleData}
                autoComplete="off"
                onBlur={checkOnBlur}
                value={value}
                disabled={isLoading}
            />
            {!hidePassword ?
                <CloseEye className={style.icon_close_eye} onClick={() => setHidePassword(!hidePassword)} />
                :
                <OpenEye className={style.icon_open_eye} onClick={() => setHidePassword(!hidePassword)} />
            }
        </div>
    )
}

export default InputPassword