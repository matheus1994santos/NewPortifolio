import styled from "styled-components";

export const StyledDivCard = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction ? direction : 'initial'};
    justify-content: ${ ({justify}) => justify };
    align-items: ${ ({align}) => align };
    gap: ${ ({gap}) => gap };
    margin: ${ ({theme,mv}) => mv ? theme.spacing[mv] : '' } ${ ({theme,mh}) => mh ? theme.spacing[mh] : '' };
    margin-top: ${ ({theme,mt}) => mt ? theme.spacing[mt] : '' };
    margin-bottom: ${ ({theme,mb}) => mb ? theme.spacing[mb] : '' };
    margin-left: ${ ({theme,ml}) => ml ? theme.spacing[ml] : '' };
    margin-right: ${ ({theme,mr}) => mr ? theme.spacing[mr] : '' };
    padding: ${ ({theme,pv}) => pv ? theme.spacing[pv] : '' } ${ ({theme,ph}) => ph ? theme.spacing[ph] : '' };
    padding-top: ${ ({theme,pt}) => pt ? theme.spacing[pt] : '' };
    padding-bottom: ${ ({theme,pb}) => pb ? theme.spacing[pb] : '' };
    padding-left: ${ ({theme,pl}) => pl ? theme.spacing[pl] : '' };
    padding-right: ${ ({theme,pr}) => pr ? theme.spacing[pr] : '' };
    background-color: ${ ({theme, bg}) => theme.colors[bg]}30;
    color: ${({theme,color}) => theme.colors[color]};
`;