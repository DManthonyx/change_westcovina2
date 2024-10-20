import styled from 'styled-components';
import { MapPin } from '@styled-icons/fa-solid/MapPin';

export const Div = styled.div`
    overflow: hidden;
`;

export const Pin = styled(MapPin)`
    width: 35px;
    height: 35px;
    color: red;
`;