import styled from 'styled-components'

export const Ratings = styled.div`
  position: relative;
  vertical-align: middle;
  display: inline-block;
  color: #ffffff;
  overflow: visible;
  font-size: 11pt;
`

export const FullStars = styled.div`
letter-spacing: 3px;

  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  color: rgb(255, 214, 2);
  width: ${props => props.width}%;

  &:before {
    content: "\\2605\\2605\\2605\\2605\\2605";
    -webkit-text-stroke: 0.75px rgb(204, 136, 14);
  }
`

export const EmptyStars = styled.div`
letter-spacing: 3px;

  position: relative;

  &:before {
    content: "\\2605\\2605\\2605\\2605\\2605";
    -webkit-text-stroke: 0.75px #848484;
  }
`

export const ReviewsCount = styled.span`
  height: 16px;
  position: absolute;
  top: 3px;
  left: 92px;
  display: inline;
  border-bottom: 1px solid rgb(116,116,116);
  color: rgb(116,116,116);
  overflow: visible;
  font-size: 12px;
  cursor: default;
`
