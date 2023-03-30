import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styled, { keyframes } from 'styled-components'

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
const TextContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--dark);
    color: var(--white);
`;

const moveUp = keyframes`
    100%{
        transform: translateY(0);
    }
`;

const Text = styled.p`
    width: 50%;
    font-size: var(--fontlg);
    position: relative;
    height: var(--fontmd);
    overflow: hidden;

    span{
        position: absolute;
        transform: translateY(3rem);
        animation-name: ${moveUp};
        animation-duration: 2.5s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-delay: ${props => props.delay};
        font-family: var(--fontL);
        background-image: linear-gradient(-45deg, var(--gradient));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .author{
        width: 100%;
        text-align: end;
        background-image: linear-gradient(-180deg, var(--gradient));
    }
`;

const Quote = () => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let Elem = sectionRef.current;

        let trigger = ScrollTrigger.create({
            trigger: Elem,
            start: "top top",
            end: "bottom-=100 center",
            pin: true,
            pinSpacing: false,
        });

        return () => {
            if (trigger) trigger.kill();
        }
    }, [])

    return (
        <Section ref={sectionRef}>
            <TextContainer>
                <Text delay="0.1s"><span>&#8220;You can't connect the dots looking forward.</span></Text>
                <Text delay="0.5s"><span>&nbsp;&nbsp;&nbsp;You can only connect them looking backward.</span></Text>
                <Text delay="0.9s"><span>&nbsp;&nbsp;&nbsp;So you have to trust the dots</span></Text>
                <Text delay="1.4s"><span>&nbsp;&nbsp;&nbsp;will somehow connect in your future.&#8221;</span></Text>
                <Text delay="1.9s"><span className='author'>&#x23AF;Steve Jobs</span></Text>
            </TextContainer>
        </Section>
    )
}

export default Quote