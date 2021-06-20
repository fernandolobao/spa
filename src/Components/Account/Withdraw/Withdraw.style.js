import styled from 'styled-components';
import { DesignToken } from '../../../Style';

const StyledWithdraw = styled.div.attrs({ className: 'withdraw' })`
  .input {
    margin-bottom: ${DesignToken('$spacing-md')};
    form {
      display: flex;
      flex-direction: row;
      > button.btn-link {
        width: 80px;
        height: 80px;
        margin-left: -1rem;
        margin-right: ${DesignToken('$spacing-md')};
        border-radius: ${DesignToken('$border-circle')};
        border: 2px solid ${DesignToken('$primary-highlight')};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${DesignToken('$primary-highlight')};
        &:hover {
          color: ${DesignToken('$white')};
          background-color: ${DesignToken('$primary-highlight')};
        }
      }
      .input-group {
        .input-group-append {
          .input-group-text {
            padding: 0;
            border: none;
            button.btn-link {
              border-color: ${DesignToken('$primary-highlight')};
              border-radius: 0 ${DesignToken('$border-sm')} ${DesignToken('$border-sm')} 0;
              background-color: ${DesignToken('$primary-highlight')};
              color: ${DesignToken('$white')};
              padding: 0 1em;
              height: 100%;
              &:hover {
                color: ${DesignToken('$primary-highlight')};
                background-color: ${DesignToken('$white')};
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledWithdraw;
