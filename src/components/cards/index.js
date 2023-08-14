import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from "react-router-dom";

const Mahsulot = ({ data }) => {
  const navigate = useNavigate();
  const getOne = (id) => {
    console.log(id)
    navigate("/one/" + id);
  }
  
  return (
    <div>
      <Card onClick={() => getOne(data.id)} sx={{ maxWidth: 330, maxHeight: 600 }} className='card'>
        <CardMedia
          component="img"
          alt="green iguana"
          height="340"
          image={data.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ color: "#000000", fontStyle: "bold", fontFamily: "Monospace" }} >
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.desc}
          </Typography>
          <Typography variant="body2" color="text" style={{ color: "#222", fontSize: "20px", fontWeight: "400", fontFamily: "Monospace", paddingTop: "20px" }}>
            {data.price}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Mahsulot