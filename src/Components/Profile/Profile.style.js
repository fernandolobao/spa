import styled from 'styled-components';
import { DesignToken } from '../../Style';

export const StyledProfile = styled.div.attrs({ className: 'profile' })`
  .greetings {
    display: flex;
    align-items: center;
    padding: ${DesignToken('$spacing-md')} 0;
    > *:not(:last-child) {
      margin-right: ${DesignToken('$spacing-md')};
    }
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: ${DesignToken('$border-circle')};
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h5 {
      color: ${DesignToken('$primary-highlight')};
      display: inline-block;
    }
    .hi {
      > div > span:not(:last-child) {
        margin-right: ${DesignToken('$spacing-md')};
      }
    }
  }
`;
