import React, { useState, useEffect } from 'react'
import IconSelector from '../../assets/icons/icons';
import s from '../../styles/styleComponents/ProductPage.module.scss';
import Button from '../../components/interface/button/Button';
import Line from '../../components/interface/line/Line';
import { useLocation, useParams } from 'react-router';
import { productApi } from '../../services/ProductService';
import { authUser } from '../../services/AuthUser';
import Products from '../../components/products/Products';
import UserCard from '../../components/usercard/UserCard';
import { extraApi } from '../../services/ExtraService';

export default function ProductPage() {
    const { id } = useParams()
    const location = useLocation()

    const { data: item, isLoading, isFetching } = productApi.useGetProductQuery(id)

    const [initialAmount, setInitialAmount] = useState(1)
    const [currentTab, setCurrentTab] = useState('Описание')
    const descriptionTabs = ['Описание', 'Доставка']

    const { data: products, isLoading: productsIsLoading } = productApi.useGetAllProductsQuery({
        page: 1,
        limit: 999,
        mainCategory: undefined,
        sortByPrice: 0,
        params: `salerEmail=${item?.saler.email}`
    })

    const [currentPhoto, setCurrentPhoto] = useState<any>()

    const { data: currentSaler } = authUser.useFetchOneUserQuery(item?.saler.email)

    const { data: reviews } = extraApi.useGetAllReviewQuery({
        page: 1,
        limit: 10,
        userId: currentSaler?._id
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    const incAmount = () => {
        if (initialAmount === item.amount) {

        } else setInitialAmount(initialAmount + 1)
    }

    const decAmount = () => {
        if (initialAmount === 1) {

        } else setInitialAmount(initialAmount - 1)
    }

    const renderColor = (color: string) => {
        switch (color) {
            case 'blue': return '#337ab6'
            case 'green': return '#5cb85c'
            case 'orange': return '#f0ac4e'
            case 'red': return '#ff0000'
            case 'lightblue': return '#5bc0de'
            case 'black': return '##282a3c'
            case 'violet': return '#800080'
            case 'gray': return '#777777'
            case 'white': return '#ffffff'
            case 'brown': return '#d9534f'
        }
    }

    const renamedColor = () => {
        switch (item.color) {
            case 'blue': return 'Синий'
            case 'green': return 'Зелёный'
            case 'orange': return 'Оранжевый'
            case 'red': return 'Красный'
            case 'lightblue': return 'Голубой'
            case 'black': return 'Чёрный'
            case 'violet': return 'Фиолетовый'
            case 'gray': return 'Серый'
            case 'white': return 'Белый'
            case 'brown': return 'Коричневый'
        }
    }

    const renamedCondition = () => {
        switch (item.condition) {
            case 'novaya_s_birkoy': return 'Новая с биркой'
            case 'novaya_bez_birki': return 'Новая без бирки'
            case 'nebolshie_defekti': return 'Небольшие дефекты'
            case 'nadevalas_odin_raz': return 'Надевалась один раз'
            case 'nadevalas_neskolko_raz': return 'Надевалась несколько раз'
            default: return item.condition
        }
    }

    const renderTabs = descriptionTabs.map((el: string, i: number) => {
        return (
            <div
                className={currentTab === el ? `${s.product__nav_btn} ${s.active}` : s.product__nav_btn}
                key={i}
                onClick={() => setCurrentTab(el)}>
                <span>{el}</span>
            </div>
        )
    })

    const renderImages = () => {
        return (
            item.additionalsPhotos.map((el: string, i: number) => {
                return <img
                    className={currentPhoto === el ? s.current : ''}
                    onClick={() => setCurrentPhoto(el)}
                    key={i}
                    src={el}
                    alt='additionalImg' />
            })
        )
    }

    return (
        <div className={s.product}>
            <div className={s.product__body}>
                {isLoading && isFetching ? <IconSelector className={s.product__loader} id='loader' /> :
                    <>
                        <div className={s.product__content}>
                            <div className={s.product__imgs}>
                                <div className={s.product__other_img}>
                                    <img 
                                        className={currentPhoto === item.mainPhoto || currentPhoto === undefined ? s.current : ''} 
                                        onClick={() => setCurrentPhoto(item.mainPhoto)} 
                                        src={item.mainPhoto} 
                                        alt='img' />
                                    {renderImages()}
                                </div>
                                <div className={s.product__current_img}>
                                    {currentPhoto === undefined ?
                                        <img
                                            src={item.mainPhoto}
                                            alt='img' />
                                        :
                                        <img
                                            src={currentPhoto}
                                            alt='img' />}
                                </div>
                            </div>
                            <div className={s.product__info}>
                                <div className={s.product__title}>
                                    <IconSelector className={s.product__verified} id='verified-user' />
                                    <h1>{item.name}</h1>
                                    <IconSelector className={s.product__favorite} id='heart' />
                                </div>
                                <div className={s.product__other}>

                                </div>
                                <div className={s.product__price}>
                                    <h5>{item.discount ? item.discount : item.price}</h5>
                                    <IconSelector id='uah' />
                                </div>
                                <div className={s.product__props}>
                                    <div className={s.product__size}>
                                        <h2>Размер:</h2><span>{item.size}</span>
                                    </div>
                                    <div className={s.product__color}>
                                        <h2>Цвет:</h2>
                                        <span>{renamedColor()}</span>
                                        <div
                                            className={s.product__color_round}
                                            style={{ backgroundColor: renderColor(item.color) }}></div>
                                    </div>
                                    <div className={s.product__condition}>
                                        <h2>Состояние:</h2>
                                        <span>{renamedCondition()}</span>
                                    </div>
                                    <div className={s.product__brand}>
                                        <h2>Брэнд: </h2><span>{item.brand}</span>
                                    </div>
                                </div>
                                <div className={s.product__amount}>
                                    <div className={s.product__amount_change}>
                                        <IconSelector
                                            className={s.product__amount_ico}
                                            id='plus'
                                            onClick={incAmount} />
                                        <span>{initialAmount}</span>
                                        <IconSelector
                                            className={s.product__amount_ico}
                                            id='minus'
                                            onClick={decAmount} />
                                    </div>
                                    <Button className={s.product__buy_btn} text='Купить' />
                                </div>
                                <div className={s.product__safe_transaction}>
                                    <h2>Безопасная сделка</h2>
                                    <IconSelector
                                        className={s.product__safe_ico} id='verified-user' />
                                </div>
                                <Line className={s.product__line} />
                                <div className={s.product__saler}>
                                    <UserCard
                                        imageSize='64px'
                                        salerName={item.saler.name}
                                        salerRating={currentSaler?.rating}
                                        salerVotes={reviews?.totalReviews}
                                        salerLoading={productsIsLoading}
                                        productsLength={products?.products.length}
                                        salerImage={currentSaler?.image}
                                        reviews={reviews?.reviews} />
                                </div>
                                <button className={s.product__send}>
                                    <span>Написать</span>
                                    <IconSelector className={s.product__send_ico} id='email' />
                                </button>
                            </div>
                        </div>
                        <div className={s.product__description}>
                            <div className={s.product__nav}>
                                <div className={s.product__nav_body}>
                                    {renderTabs}
                                    <Line style={{ position: 'absolute', bottom: '0', zIndex: '1' }} />
                                </div>
                            </div>
                            {currentTab === 'Описание' ?
                                <div className={s.product__description_text}>
                                    <p>{item.description}</p>
                                </div>
                                :
                                <div className={s.product__delivery}>
                                    Доставка
                                </div>}
                        </div>
                        <div className={s.product__saler_products}>
                            <div className={s.product__saler_title}>
                                <h1>Товары продавца</h1>
                                <span>Все товары</span>
                            </div>
                            <div className={s.product__saler_body}>
                                <Products limit={4} salerEmail={item.saler.email} />
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}