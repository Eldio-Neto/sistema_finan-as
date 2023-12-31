import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{background:string}>`
    display: inline-block;
    padding: 5px;
    border-radius:5px;
    color: #FFF;
    background-color: ${ props => props.background?`${props.background}`:'white' };
`;

export const Value = styled.div<{color:string}>`
    color:${props=>props.color};
`;