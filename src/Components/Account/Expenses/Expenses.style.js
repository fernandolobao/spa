import styled from 'styled-components';

const StyledExpenses = styled.div.attrs({ className: 'expenses'})`
  .history {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        display: flex;
        &:not(:last-child) {
          margin-bottom: 8px;
        }
        .icon-wrapper {
          margin-right: 8px;
          border-radius: 8px;
          padding: 12px;
          align-self: center;
          &.up {
            color: #33CC33;
            background-color: #d6f5d6;
          }
          &.down {
            color: #8B0000;
            background-color: #ffe6e6;
          }
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
  }
`;

export default StyledExpenses;
