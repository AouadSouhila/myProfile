import React from "react";
import styled, {css} from 'styled-components/macro';
import heroimage from "../images/me1.png"


const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;

    `;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    `;


const HeroImage = styled.img`
    position: absolute;
    top: 100px;
    width:50%;
    right: 0;
    object-fit: cover;
    filter: drop-shadow(0 4px 10px #bbb);
`;
const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #000;

    h1 {
        font-family: "Limelight", sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        text-align:left;
        position: absolute;
        top: -100px;
        padding-left : 94px;
        font-size: 50px;
    }

    p{
        margin-bottom: 1.2rem;
        padding: 1rem 0;
        padding-left : 94px;
        padding-right: 50rem;
        font-size: 24px;
    }
    spin{
        font-weight: 700;
    }
    `;




const Hero = () => {
    return (
        <HeroSection>
            <HeroWrapper>
                <HeroImage src={heroimage}/>
                    <HeroContent>
                    <h1>Souhila Aouad</h1>
                    <p>A passionate <spin  style={{color: "#ED6C6D"}}>UX/UI designer</spin>  and <spin style={{color: "#FBB889"}}>frontend developer</spin>, i am curious and productive individual with goal to create delightful experience and drive business impact.</p>
                    <p> Welcome to my portfolio</p>
                    </HeroContent>
            </HeroWrapper>
        </HeroSection>
    );
};
export default Hero;