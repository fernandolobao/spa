import styled from 'styled-components';

const StyledOverview = styled.div.attrs({ className: 'container-fluid'})`
  padding: 15px;
  border-radius: 8px;
  background-color: #fafafa;
  .card {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
    .card-title {
      margin: 0;
    }
  }

  .list-group {
    .list-group-item {
      display: flex;
      padding-left: 0;
      padding-right: 0;
      span {
        margin-left: auto;
        display: flex;
        align-items: center;
        &.active {
          &::before {
            content: '';
            height: 4px;
            width: 4px;
            display: flex;
            background-color: green;
            border-radius: 50%;
            margin-right: 8px;
          }
        }
      }
    }
  }
`;

export default StyledOverview;
