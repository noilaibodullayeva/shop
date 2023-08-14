import { useEffect, useState } from "react";

import Mahsulot from "../../components/cards/index"
import Stack from '@mui/material/Stack';
import axios from "axios"
import Container from '@mui/material/Container';
import { useLocation } from "react-router-dom"

const Home = () => {

    const URL = "http://localhost:7887/"

    const [product, setProduct] = useState([])

    const location = useLocation()

    useEffect(() => {
        let PATH = "";
        if (  location.state?.id==0) {
            PATH = URL + "products";
        } else {
            PATH = URL + "products?categoryId="+location.state?.id;
        }
        axios.get(PATH).then(val => {
            setProduct(val.data)
        })
    }, [location])

    return (
        <Container>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                {product.map((v, index) => {
                    return (
                        <Mahsulot data={v} key={index}/>
                    )
                })}
            </Stack>
        </Container>
    )
}

export default Home