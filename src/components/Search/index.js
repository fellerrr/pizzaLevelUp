import React, {useCallback, useContext, useRef, useState} from 'react';
import {BsSearch} from 'react-icons/bs'
import {searchContext} from "../../App";
import cross from "../../assets/cross.svg"
import debounce from 'lodash.debounce'

import style from './Search.module.scss'

const Index = () => {
    const [value, setValue] = useState('')
    const {setSearchValue} = useContext(searchContext)
    const inputRef = useRef(null)

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str)
        },500),[]
    )

    const onClickClear = () => {
        setSearchValue('')
        setValue('')
        inputRef.current.focus()
    }

    const onChangeInput = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }


    return (
        <div className={style.root}>
            <BsSearch/>
            <input
                ref = {inputRef}
                value={value}
                onChange={onChangeInput}
                type='text' size={32} maxLength={30} placeholder='Поиск пиццы...'/>
            {value && <img
                className={style.clear}
                width={16} src={cross} alt='cross'
                onClick={onClickClear}
            />}
        </div>

    );
};

export default Index;