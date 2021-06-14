import styled from 'styled-components';

const StyledAccount = styled.nav.attrs({ className: 'nav-account'})`
  .nav.nav-tabs {
    border: none;
    margin-bottom: 8px;
    display: inline-flex;
    .nav-item {
      border: none;
      transition: all 140ms linear;
      background: transparent;
      color: #434343;
      border-radius: 4px;
      &.active {
        background-color: #007bff;
        color: #fff;
      }
    }
  }
  .tab-content {
    padding: .5rem 1rem;
  }
`;

export default StyledAccount;
