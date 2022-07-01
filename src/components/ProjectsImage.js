import styled from 'styled-components';
import data from "../data/projectsData";
import { Link} from "react-router-dom";

const Galery = styled.div`
-webkit-column-count: 2;
-moz-column-count: 2;
column-count: 2;
padding: 0 200px;
`;

const Picgrid= styled.div`
width : 594px;
height: 594px;
margin-bottom: 54px;


`;

const Pic= styled.img`
position: absolute;
width : 594px;
height: 594px;
border: 0.2px solid #000;
object-fit: cover;
cursor: pointer;
`;

const PrjInfo= styled(Link)`
position : absolute;
top:100;
height:594px;
width:594px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
transition: 0.3s ease-in-out;
cursor: pointer;
background: rgba(0,0,0,0.7);
text-decoration: none;
font-size: 30px;
color: #fff;
opacity: 0;

&:hover{
    opacity:1;
}
`;
const ProjectsImages = () => {

    return(
        <Galery>
            {data.map((item, index)=>{
                return(
                    <Picgrid key={index}>

                     <Pic src={item.image} alt={item.title}/> 
                    
                    <PrjInfo>{item.title} <br/>
                    {item.description}
                    </PrjInfo> 

                    </Picgrid>
                )
            })}
        </Galery>
    );

}

export default ProjectsImages;