import styled from 'styled-components';
import { DesignToken } from '../../Style';

const StyledAccount = styled.nav.attrs({ className: 'nav-account' })`
  .nav.nav-pills {
    border: none;
    margin-bottom: 8px;
    display: inline-flex;
    .nav-item {
      border: none;
      transition: all 140ms linear;
      background: transparent;
      color: #434343;
      &:not(:last-child) {
        margin-right: ${DesignToken('$spacing-md')};
      }
      // a.active {
      //   background-color: #007bff;
      //   color: #fff;
      // }
      &.action-item {
        a {
          color: ${DesignToken('$primary-highlight')};
          border: 2px solid ${DesignToken('$primary-highlight')};
          background-color: ${DesignToken('$white')};
          &:hover {
            color: ${DesignToken('$white')};
            background-color: ${DesignToken('$primary-highlight')};
          }
          &.active {
            background-color: ${DesignToken('$primary-highlight')};
            color: #fff;
          }
        }
      }
      &.action-disabled {
        a:hover {
          cursor: not-allowed;
        }
      }
      a.nav-link {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: ${DesignToken('$border-circle')};
      }
    }
  }
  .tab-content {
    padding: .5rem 1rem;
  }
`;

export default StyledAccount;
