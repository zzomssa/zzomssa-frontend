import styled, { css } from 'styled-components';
import { Card, CardImg, CardBody } from 'reactstrap';
import Masonry from 'react-masonry-css';

import tw from 'twin.macro';

const CardListContainer = styled.div(
  tw`hidden md:(flow-root mt-10 mb-16 items-center)`
);

const CustomCard = styled(Card)(
  tw`inline-block m-3 rounded-3xl overflow-hidden clickable`,
  css`
    /* border-color: ${(props) => props.theme.card_border}; */
    width: 95%;
  `,
);

const ContentsHeaderContainer = styled.div(
  tw`mt-6 pl-6 md:(flow-root mt-10 pl-10 items-center)`,
);

const ContentsSubHeaderContainer = styled.div(tw`flex justify-between mr-8`);

const CategoryHeader = styled.div(
  tw`md:(font-normal text-30) font-normal text-20 mb-6`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);

const CustomCardImg = styled(CardImg)(tw`w-full h-full clickable`);

const CustomCardBody = styled(CardBody)(
  tw`w-full`,
  css`
    background-color: ${(props) => props.theme.card_bg};
    margin-top: -4px;
  `,
);

const CardContent = styled.div(
  tw`px-4 pt-4 truncate`,
  css`
    white-space: break-spaces;
  `,
);

const CardTitle = styled.p(
  tw`mb-2 font-bold overflow-clip overflow-hidden text-20 leading-tight`,
  css`
    color: ${(props) => props.theme.black};
  `,
);

const CardText = styled.p(tw`mt-5 mb-1.5 text-16 overflow-clip overflow-hidden leading-tight`,
css`
    color: ${(props) => props.theme.card_text};
`);

const CardDuration = styled.p(
  tw`text-16 text-center py-4`,
  css`
    color: ${(props) => props.theme.black};
  `,
);

const CardBrandInfo = styled.div(
  tw`font-bold text-20 text-center py-4`,
  css`
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.card_bg};
  `,
);

const LoadingIcon = styled.img(
  tw`w-10 h-10 z-100`,
  css`
    transform-origin: 50% 50%;
    animation: spin 1.5s cubic-bezier(0.8, 0, 0.2, 1) infinite;
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  `,
);

const LastItem = styled.div(tw`absolute left-2/4 transform -translate-x-2/4 pb-8`);

const breakpointColumnsObj = {
  default: 3,
  1100: 2
};

export {
  Masonry,
  breakpointColumnsObj,
  CardListContainer,
  CustomCard,
  CustomCardImg,
  CustomCardBody,
  ContentsHeaderContainer,
  ContentsSubHeaderContainer,
  CategoryHeader,
  CardContent,
  CardTitle,
  CardText,
  CardDuration,
  CardBrandInfo,
  LoadingIcon,
  LastItem
};
