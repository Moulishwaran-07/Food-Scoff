import React, { createContext, useContext, useEffect, useState } from "react";
import Header from "./Header"
import './Search.css'
import small1 from '../assets/search_icon/chinese1.jpg'
import small2 from '../assets/search_icon/parotta1.jpg'
import small3 from '../assets/search_icon/poori1.jpg'
import small4 from '../assets/search_icon/rolls1.jpg'
import small5 from '../assets/search_icon/south indian1.jpg'
import small6 from '../assets/search_icon/veg1.jpg'
import small7 from '../assets/search_icon/pizza1.jpg'
import small8 from '../assets/search_icon/pongal1.jpg'
import small9 from '../assets/search_icon/briyani1.jpg'
import small10 from '../assets/search_icon/burger1.jpg'
import small11 from '../assets/search_icon/icecream1.jpg'
import small12 from '../assets/search_icon/khichdi1.jpg'
import food from './foods.json'
import add from '../assets/icon/add.png'
import star from '../assets/icon/star.png'
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { styled } from '@mui/material/styles';
import Badge, { BadgeProps } from '@mui/material/Badge';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "./DataProvider";


interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: string;
    image: string;
}

function Search() {



    const Navigate4 = useNavigate()
    const Cart = () => {

        // const Theme = createContext<Product>
        // const Cart: React.FC = () => {
        //     const [foods, setFoods] = useState({ Products });
        //     return <Cart></Cart>;
        // }

        Navigate4('/Cart')
    }

    // const [Count, setCount] = useState(0)
    const [Products, setProducts] = useState(food)
    // const [data, setData] = useState<Product[]>([]);

    const { data, setData, Count, setCount } = useDataContext();
    const filterItems = (item: any) => {

        const updateItem = food.filter((e: any) => {
            return e.category === item

        })
        setProducts(updateItem)
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(food);

    useEffect(() => {

        setFilteredProducts(
            Products.filter((product: any) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, Products]);



    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -4,
            top: 0,
            border: `1px solid ${theme.palette.background.paper}`,
            padding: '1px 1px',

        },

    }));

    const AddCount = (values: Product) => {
        setData((prevData) => [...prevData, values]);
        setCount((prevCount) => prevCount + 1);
      };

    useEffect(() => {
        console.log(data)
    }, [data])


    return (
        <div>
            <Header></Header>
            <div className="cart_icon">
                <div className="count_icon">
                    <IconButton aria-label="cart" onClick={Cart}>
                        <StyledBadge badgeContent={Count} color="secondary">
                            <LocalMallIcon color="secondary" fontSize="large" />
                        </StyledBadge>
                    </IconButton>
                </div>
            </div>
            <div className="Search_part">
                <div className="search_design">
                    <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder="Search Variety Foods"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    >
                    </input>

                </div>
                <div className="small_items">
                    <div className="small1">
                        <img src={small1} onClick={() => filterItems('chinese')} alt="chinese"></img>
                    </div>
                    <div className="small2">
                        <img src={small2} onClick={() => filterItems('parotta')} alt="parotta"></img>
                    </div>
                    <div className="small3">
                        <img src={small3} onClick={() => filterItems('')} alt=""></img>
                    </div>
                    <div className="small4">
                        <img src={small4} onClick={() => filterItems('roll')} alt="roll"></img>
                    </div>
                    <div className="small5">
                        <img src={small5} onClick={() => filterItems('')} alt=""></img>
                    </div>
                    <div className="small6">
                        <img src={small6} onClick={() => filterItems('')} alt=""></img>
                    </div>
                    <div className="small7">
                        <img src={small7} onClick={() => filterItems('pizza')} alt="pizza"></img>
                    </div>
                    <div className="small8">
                        <img src={small8} onClick={() => filterItems('')} alt=""></img>
                    </div>
                    <div className="small9">
                        <img src={small9} onClick={() => filterItems('briyani')} alt="briyani"></img>
                    </div>
                    <div className="small10">
                        <img src={small10} onClick={() => filterItems('burger')} alt="burger"></img>
                    </div>
                    <div className="small11">
                        <img src={small11} onClick={() => filterItems('ice')} alt="ice"></img>
                    </div>
                    <div className="small12">
                        <img src={small12} onClick={() => filterItems('khichdi')} alt="khichdi"></img>
                    </div>
                </div>
                <h1 className="full_food" onClick={() => setProducts(food)}>All Food</h1>
                <hr className="search_line"></hr>
            </div>

            <div>
                <div className="all_foods">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((element: any) => {
                            const { image, title, description, category, price, id } = element;
                            return (
                                <div className="card" key={id}>

                                    <img src={image} alt={title} />
                                    <span className="category">{category}</span>
                                    <div className="add_icon">
                                        <img
                                            src={add}
                                            className="add"
                                            onClick={() => AddCount(element)}
                                            onClickCapture={handleClick}
                                            alt="add"
                                        />
                                        <Snackbar open={open} autoHideDuration={7000} onClose={handleClose}>
                                            <Alert
                                                onClose={handleClose}
                                                severity="success"
                                                variant="filled"
                                                sx={{ width: '100%' }}
                                            >
                                                Your Item Added To Cart<span className="view_pop" onClick={Cart}>Open</span>
                                            </Alert>
                                        </Snackbar>

                                    </div>
                                    <div className="food_info">
                                        <div className="rating_star">
                                            <p>{title}</p>
                                            <img src={star} className="star" alt="star" />
                                        </div>
                                        <p className="description">{description}</p>
                                        <p className="price">{price}</p>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="no_food">No results found</p>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Search