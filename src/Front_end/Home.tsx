import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer";
import './Home.css'
import banner from '../assets/image/banner2.jpg'
import item1 from '../assets/foods/burger.avif'
import item2 from '../assets/foods/khichdi.avif'
import item3 from '../assets/foods/bonda.avif'
import item4 from '../assets/foods/briyani.avif'
import item5 from '../assets/foods/coffee.avif'
import item6 from '../assets/foods/tea.avif'
import item7 from '../assets/foods/icecream.avif'
import item8 from '../assets/foods/chinese.avif'
import item9 from '../assets/foods/rolls.avif'
import item10 from '../assets/foods/south indian.avif'
import item11 from '../assets/foods/veg.avif'
import item12 from '../assets/foods/pongal.avif'
import item13 from '../assets/foods/poori.avif'
import item14 from '../assets/foods/parotta.avif'
import food0 from './burger.json'
import food1 from './pizza.json'
import star from '../assets/icon/star.png'
import off from '../assets/icon/off1.png'
import co from '../assets/icon/delivery.png'
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton1 from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";


function Home() {
    const Navigate2 = useNavigate()
    const search = () => { Navigate2("/Search") }

    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -4,
            top: 0,
            border: `1px solid ${theme.palette.background.paper}`,
            padding: '1px 1px',

        },
    }));

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                OPEN
            </Button>
            <IconButton1
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton1>
        </React.Fragment>
    );

    const [Count, setCount] = useState(0)

    const [Products, setProducts] = useState(food0)
    const filterItems = (item: any) => {

        const updateItem = food0.filter((e: any) => {
            return e.category === item

        })
        setProducts(updateItem)
    };


    const [Foods, setFoods] = useState(food1)
    const filterItems1 = (item: any) => {

        const updateItem = food1.filter((e: any) => {
            return e.category === item;

        })
        setFoods(updateItem);
    }

    return (
        <div>
            <Header></Header>

            <div className="homepage">
                <div className="banner">
                    <img src={banner}></img>
                </div>
                <div className="hide">
                </div>
                <div className="hide2">
                </div>
                <div className="dish">
                    <h4 className="tit1">Explore Our Menu :</h4>
                    <p className="menu_para">"The food on this site is absolutely delicious and always arrives fresh and hot. The user-friendly interface makes ordering a breeze, ensuring a delightful dining experience every time."</p>
                    <div className="items">
                        <div className="item1">
                            <img src={item1}></img>
                        </div>
                        <div className="item2">
                            <img src={item2}></img>
                        </div>
                        {/* <div className="item3">
                            <img src={item3}></img>
                        </div> */}
                        <div className="item4">
                            <img src={item4}></img>
                        </div>
                        {/* <div className="item5">
                            <img src={item5}></img>
                        </div>
                        <div className="item6">
                            <img src={item6}></img>
                        </div> */}
                        <div className="item7">
                            <img src={item7}></img>
                        </div>
                        <div className="item8">
                            <img src={item8}></img>
                        </div>
                        <div className="item9">
                            <img src={item9}></img>
                        </div>
                        <div className="item10">
                            <img src={item10}></img>
                        </div>
                        <div className="item11">
                            <img src={item11}></img>
                        </div>
                        <div className="item12">
                            <img src={item12}></img>
                        </div>
                        <div className="item13">
                            <img src={item13}></img>
                        </div>
                        <div className="item14">
                            <img src={item14}></img>
                        </div>
                    </div>
                    <hr className="bor"></hr>
                </div>
                <h1 className="tit2">Trending Offers :</h1>
                <div className="all_foods1">
                    {Products.map((element: any) => {
                        const { image, title, description, category, price, id } = element
                        return <div className="card1" key={id} onClick={search}>
                            <img src={image}></img>
                            <div className="offer">
                                <img src={off} className="offer1"></img>
                            </div>
                            <span className="category1">{category}</span>
                            <div className="food_info1">
                                <div className="rating_star1">
                                    <p>{title}</p>
                                    <img src={star} className="star1"></img>
                                </div>
                                <p className="description1">{description}</p>
                                {/* <p className="price">{price}</p>  */}
                            </div>
                        </div>
                    })}
                </div>
                <div className="Food_part1">
                    {Foods.map((element: any) => {
                        const { image, title, description, category, price, id } = element
                        return <div className="card2" key={id} onClick={search}>
                            <img src={image}></img>
                            <div className="offer1">
                                <img src={off} className="offer2"></img>
                            </div>
                            <span className="category2">{category}</span>
                            <div className="food_info2">
                                <div className="rating_star2">
                                    <p>{title}</p>
                                    <img src={star} className="star2"></img>
                                </div>
                                <p className="description2">{description}</p>
                                {/* <p className="price1">{price}</p> */}
                            </div>
                        </div>
                    })}
                </div>
                <hr></hr>
                {/* <div className="counts">
                    <div className="co_detail">
                        <div className="co1">
                            <img src={co}></img>
                        </div>
                        <div className="co2">
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home