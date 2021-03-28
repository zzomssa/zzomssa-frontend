import styled, { css } from 'styled-components';
import { Card, CardImg, CardBody } from 'reactstrap';

import tw from 'twin.macro';

const CardListContainer = styled.div(
  tw`hidden md:(flow-root my-10 mx-16 items-center)`,
);
const CustomCard = styled(Card)(
  tw`flex m-8 flex-row rounded-xl overflow-hidden border border-solid h-222px`,
  css`
    border-color: ${(props) => props.theme.card_border};
  `,
);
const CustomCardImg = styled(CardImg)(tw`w-3/5 h-full clickable`, css``);
const CustomCardBody = styled(CardBody)(
  tw`w-2/5`,
  css`
    background-color: ${(props) => props.theme.card_bg};
  `,
);

const CardContent = styled.div(
  tw`px-10 pt-6 truncate h-150px`,
  css`
    white-space: break-spaces;
  `,
);
const CardTitle = styled.p(
  tw`pb-4 font-bold leading-6 text-22`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);
const CardText = styled.p(tw`text-16`);
const CardDuration = styled.p(
  tw`mt-4 text-16`,
  css`
    color: ${(props) => props.theme.contrast_text};
  `,
);
const CardBrandInfo = styled.div(
  tw`font-bold text-20 bg-black text-center py-4`,
  css`
    color: ${(props) => props.theme.white};
  `,
);

const LastItem = styled.div(tw``, css``);

// const LastItem = styled.div();
// const StyledLink = styled(Link)(
//   tw``,
//   css`
//     &:focus,
//     &:visited,
//     &:link,
//     &:active {
//       text-decoration: none;
//       color: ${(props) =>
//         props.selected ? props.theme.contrast_text : 'inherit'};
//     }
//   `,
// );

export {
  CardListContainer,
  CustomCard,
  CustomCardImg,
  CustomCardBody,
  CardContent,
  CardTitle,
  CardText,
  CardDuration,
  CardBrandInfo,
  LastItem
};
