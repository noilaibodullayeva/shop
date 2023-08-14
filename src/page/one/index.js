
import { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import "./style.css"
const One = () => {
    const styles = {
        mystyle: {
            height: "700px",
            width: "700px",
            padding: "20px 30px 10px 10%",
            border: "2px, solid black"
        },
        mystyle2: {
            fontSize: "60px !important",
            fontFamily: "Monoscape",
            padding: "20px 30px 10px 50% !important",
            textAlign: "centre",
            marginLeft: "5%",
            color: "black"
        },
        mystyle3: {
            fontSize: "30px !important",
            fontFamily: "Monoscape",
            textAlign: "centre",
            marginLeft: "5%",
            width: "720px"
        },
        mystyle4: {
            display: "flex !important",
            flexDirection: "row !important",
            padding: "10px"
        },
        buttons: {
            width: "200px !important",
            height: "60px",
            backgroundColor: "#eeeeee !important",
            fontSize: "17px"
        },
        imagesBig: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        },
        imagesSmall: {
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        },
        imagess: {
            width: "350px",
            height: "300px"
        }
    }
    const currencies = [
        {
            value: 'Karta orqali',
            label: 'Karta',
        },
        {
            value: 'Naqd',
            label: 'Naqd',
        },
        {
            value: 'Visa karta orqali',
            label: 'Visa karta',
        },
    ];
    const viloyatlar = [
        {
            value: 'Andijon',
            label: 'Andijon',
        },
        {
            value: 'Farg`ona',
            label: 'Farg`ona',
        },
        {
            value: 'Namangan',
            label: 'Namangan',
        },
        {
            value: 'Tashkent',
            label: 'Tashkent',
        },
        {
            value: 'Jizzax',
            label: 'Jizzax',
        },
        {
            value: 'Gulistan',
            label: 'Gulistan',
        },
        {
            value: 'Samarqand',
            label: 'Samarqand',
        },
        {
            value: 'Qashadaryo',
            label: 'Qashadaryo',
        },
        {
            value: 'Surxondaryo',
            label: 'Surxondaryo',
        },
        {
            value: 'Navoiy',
            label: 'Navoiy',
        },
        {
            value: 'Xorazm',
            label: 'Xorazm',
        },
        {
            value: 'Qoraqolpog`iston',
            label: 'Qoraqolpog`iston',
        },
    ];
    const [productCount, setProductCount] = useState(0)
    const URL = "http://localhost:7887/"
    const params = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(URL + "products/" + params.id).then(val => {
            setProduct(val.data)
            console.log(val.data)
        })
    }, [])

    const setCount= (action) => {
      if (action === "-"){
        if(productCount>1) {
            setProductCount(productCount-1)  
        }
      } else{
        if(product.amount>productCount){
             setProductCount(productCount+1) 
        }
      }
    }

    return (
        <div >
            {!product ? <>Loading...</> : <div>
                <h1 style={styles.mystyle2}>{product.title}</h1>
                <div className="images-big" style={styles.imagesBig} >
                    <div className="images-small" style={styles.imagesSmall}>
                        <img style={styles.imagess} src={product.addImg[0]} alt="rasm1" />
                        <img style={styles.imagess} src={product.addImg[1]} alt="rasm1" />
                        <img style={styles.imagess} src={product.addImg[2]} alt="rasm1" />
                    </div>
                    <div><img src={product.img} style={styles.mystyle} className="imagebiggpone" alt="image "/></div>
                </div>

                <p style={styles.mystyle3}  className="desc">{product.desc}</p>
                <Button variant="outlined" style={styles.mystyle3} className="buttonprice">{product.price}</Button>
            </div>}

            <div className="onee" style={styles.mystyle4}>
                <h1>Sotib olishni xohlaysizmi?</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' }, display: "flex"
                    }}
                    noValidate
                    autoComplete="off"
                    className="boxbig"
                >
                    <TextField id="filled-basic" label="Filled" variant="filled" placeholder="Ismingiz" />
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="standard-select-currency"
                                select
                                label="Hudud"
                                defaultValue="EUR"
                                helperText="Tanlang"
                                variant="standard"
                            >
                                {viloyatlar.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </div>
                    </Box>
                    <TextField id="filled-basic" label="Filled" variant="filled" placeholder="Telefon raqamingiz" />
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="standard-select-currency"
                                select
                                label="To'lov turi"
                                defaultValue="EUR"
                                helperText="Tanlang"
                                variant="standard"
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </div>
                    </Box>
                    <div style={{ width: "180px", height:"50px", display: "flex", justifyContent: "space-between" }}>
                        <Button variant="outlined" onClick={()=> {setCount("-")}}>-</Button>
                        <p>{productCount}</p>
                        <Button variant="outlined" onClick={()=> {setCount("+")}}>+</Button>
                    </div>
                    <Button variant="contained" style={styles.buttons}>Submit</Button>
                </Box>

            </div>
        </div>
    )
}

export default One;