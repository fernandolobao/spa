import styled from 'styled-components';
import { DesignToken } from '../../../Style';

const StyledExpenses = styled.div.attrs({ className: 'expenses'})`
  .columns {
    display: flex;
    flex-direction: row;
  }
  .history {
    width: 100%;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        display: flex;
        &:not(:last-child) {
          margin-bottom: ${DesignToken('$spacing-sm')};
          padding-bottom: ${DesignToken('$spacing-sm')};
          border-bottom: 1px solid ${DesignToken('$primary-darker')}
        }
        .icon-wrapper {
          margin-right: ${DesignToken('$spacing-sm')};
          border-radius: ${DesignToken('$border-circle')};
          padding: ${DesignToken('$spacing-md')};
          align-self: center;
          &.in {
            color: #33CC33;
            background-color: #d6f5d6;
          }
          &.out, &.payment {
            color: #8B0000;
            background-color: #ffe6e6;
          }
        }
        .transaction, .value {
          display: flex;
          flex-direction: column;
          align-self: center;
        }
        strong {
          display: flex;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .value {
          margin-left: auto;
          margin-right: 8px;
        }
      }
    }
    &.in {
      margin-right: ${DesignToken('$spacing-lg')};
    }
  }
`;

export default StyledExpenses;
