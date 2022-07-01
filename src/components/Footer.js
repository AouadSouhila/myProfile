import { Link } from 'react-router-dom';
import styled from 'styled-components';
import behance from '../images/behance.png'
import linkedin from '../images/linkedin.png'
import pinterest from '../images/pinterest.png'

const FooterSection = styled.div`
width: 100%;
height: 80px;
margin:0;
overflow: hidden;
background: #FBB889;

`;
const FooterContent = styled.div`
   padding : 40px 200px;
   font-size: 18px;
`;

const List = styled.ul`
position : absolute;
right:230px;
top: 2150px;
img{
width: 36px;
height: 36px;
}


li {

padding: 0 5px;
display: inline-block;
}

`;
const Footer = () => {


    return(
        <FooterSection>
            <FooterContent>
            <p>Designed by Souhila Aouad in 2022. All right reserved.</p>
            
            <List>
                <li><Link to='/'> 
                <img src={pinterest}/>
                </Link>
                </li>
                <li><Link to='https://www.behance.net/souhilaad'> 
                <img src={behance} />
                </Link>
                </li>
                <li><Link to='https://www.linkedin.com/in/souhila-aouad-578073171/'> 
                <img src={linkedin}/>
                </Link>
                </li>
            </List>
            </FooterContent>
        
        </FooterSection>
    );
}

export default Footer;