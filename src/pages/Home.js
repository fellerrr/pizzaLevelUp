import React, {useContext, useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Sceleton from "../components/PizzaBlock/Sceleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import {searchContext} from "../App";
import qs from 'qs'
import {useNavigate} from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {setCategoryId,  setCurrentPage, setFilters} from "../redux/slices/filterSlice";
import axios from "axios";


const Home = () => {
    const {category, sort, currentPage } = useSelector(state => state.filter)
    const activeSort = sort.sortProp

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const setCategory = (id)=>dispatch(setCategoryId(id))

    const onChangePage =(number)=>{
        dispatch(setCurrentPage(number))
    }

    const {searchValue} = useContext(searchContext)
    let [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)


    const baseApi = 'https://63a3b1d3471b38b20613fdcd.mockapi.io/pizzas'
    const paginationIS = `?p=${currentPage}&l=4`
    const categoryIs = category > 0 ? `&category=${category}` : ''
    const sortBy = `&sortBy=${activeSort.replace('-','')}`
    const order =`&order=${activeSort.includes('-')? 'ask' : 'desc'}`
    const search = searchValue ? `&search=${searchValue}` : ''

    useEffect(()=>{
        setLoading(true)
        axios
            .get(`${baseApi}${paginationIS}${categoryIs}${sortBy}${order}${search}`)
            .then(res=>{
                setItems(res.data)
                setLoading(false)
            })
            // window.scrollTo(0,0)
        },[category, activeSort, currentPage, searchValue]
    )

    useEffect(()=>{
        const queryString = qs.stringify({
            sortProperty:activeSort,
            category,
            currentPage
        })

        navigate(`?${queryString}`)
    }, [category, activeSort, currentPage])

    return (
        <>
            <div className="content__top">
                <Categories category = {category} setCategory={setCategory}/>
                <Sort/>

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {loading
                    ? [...new Array(6)].map((el,idx)=><Sceleton key={idx}/>)
                    : items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)
                }
            </div>
            <Pagination currentPage = {currentPage} onChangePage = {onChangePage}/>
        </>
    );
};

export default Home;