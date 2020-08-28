import styled, { keyframes } from 'styled-components'
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'

export const Main = styled.main`

`

export const Section = styled.section`
    display: flex;
    justify-content: center;
`

export const Founder = styled.div`
    width: 24%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

export const InfoDiv = styled.div`
    text-align: center;
`

export const ContactDiv = styled.div`
    padding: 10px 0px;
`

export const Name = styled.p`
    padding: 10px 0px;

`

export const Intro = styled.p`
    line-height: 1.4em;
    letter-spacing: 1px;
`

export const Img = styled.img`
    width: 300px;
    height: 300px;
`

export const Facebook = styled(FacebookSquare)`
    width: 40px;
    height: 40px;
`

export const Insta = styled(Instagram)`
    width: 40px;
    height: 40px;
`

export const LinkedIn = styled(LinkedinSquare)`
    width: 40px;
    height: 40px;
`

export const Email = styled(EmailOutline)`
    width: 40px;
    height: 40px;
`



