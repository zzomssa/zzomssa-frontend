import styled, { css } from 'styled-components';
import { Card, CardImg, CardBody } from 'reactstrap';
import tw from 'twin.macro';

const CardListContainer = styled.div(tw`mt-6 mb-20 items-center md:(hidden)`);
const CustomCard = styled(Card)(
  tw`mb-4 overflow-hidden border-b border-solid shadow-card`,
  css`
    border-color: ${(props) => props.theme.card_border};
  `,
);
const CustomCardImg = styled(CardImg)(
  tw`w-full clickable h-222px`
);
const CustomCardBody = styled(CardBody)(
  tw`w-full flex flex-row justify-between -mt-1`,
  css`
    background-color: ${(props) => props.theme.card_bg};
  `,
);

const CardContent = styled.div(
  tw`px-4 pt-4 mb-4 truncate block`,
  css`
    white-space: break-spaces;
  `,
);
const CardTitle = styled.p(
  tw`pb-4 font-normal text-16`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);
const CardDuration = styled.p(
  tw`font-light text-12`,
  css`
    color: ${(props) => props.theme.mo_card_duration};
  `,
);
const CardBrandInfo = styled.div(
  tw`flex font-normal text-16 text-center items-center px-4`,
  css`
    color: ${(props) => props.theme.contrast_text};
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

const LastItem = styled.div(tw`absolute left-2/4 transform -translate-x-2/4`);

export {
  CardListContainer,
  CustomCard,
  CustomCardImg,
  CustomCardBody,
  CardContent,
  CardTitle,
  CardDuration,
  CardBrandInfo,
  LoadingIcon,
  LastItem
};
