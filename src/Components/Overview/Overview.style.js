import styled from 'styled-components';
import { DesignToken } from '../../Style';

const StyledOverview = styled.div.attrs({ className: 'container-fluid'})`
  .card-wrapper {
    position: relative;
  
    a.prev, a.next {
      display: inline-flex;
      width: 40px;
      height: 40px;
      border-radius: ${DesignToken('$border-circle')};
      position: absolute;
      top: 90px;
      z-index: 9999;
      background-color: ${DesignToken('$white')};
      color: ${DesignToken('$primary-highlight')};
      border: 1px solid ${DesignToken('$primary-highlight')};
      align-items: center;
      justify-content: center;
    }
    a.prev {
      left: 0;
    }
    a.next {
      right: 0;
    }
    .credit-card {
      width: 400px;
      height: 250px;
      border-radius: ${DesignToken('$border-lg')};
      color: #fff;
      text-shadow: 0 1px 1px rgb(0 0 0 / 30%);
      box-shadow: 0 1px 10px 1px rgb(0 0 0 / 30%);
      background: linear-gradient(12deg, #000, ${DesignToken('$grey')});
      overflow: hidden;
      position: absolute;
      transition: all 250ms linear;
  
      &.show {
        opacity: 1;
        z-index: 999;
      }
      &.hidden {
        opacity: 0.5;
        transform: translate(10px, 10px);
      }
  
      .strip {
        width: 180px;
        transform: skewX(20deg) translateX(50px);
        position: absolute;
        right: 0;
        height: inherit;
        background-image: linear-gradient(to bottom, ${DesignToken('$primary-highlight')}, ${DesignToken('$primary-medium')});
        box-shadow: 0 0 10px 0px rgb(0 0 0 / 50%);
      }
  
      .chip {
        position: relative;
        top: 60px;
        left: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 40px;
        border-radius: 5px;
        background-image: linear-gradient(to bottom left, #ffecc7, #d0b978);
        overflow: hidden;
  
        .chip-line {
          position: absolute;
          width: 100%;
          height: 1px;
          background-color: #333;
          &:nth-child(1) {
            top: 13px;
          }
          &:nth-child(2) {
            top: 20px;
          }
          &:nth-child(3) {
            top: 28px;
          }
          &:nth-child(4) {
            left: 25px;
            width: 1px;
            height: 50px;
          }
        }
        .chip-main {
          width: 20px;
          height: 25px;
          border: 1px solid #333;
          border-radius: 3px;
          background-image: linear-gradient(to bottom left, #efdbab, #e1cb94);
          z-index: 1;
        }
      }
      .wave {
        position: relative;
        top: 20px;
        left: 100px;
      }
      .card-number {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px 25px 10px;
        font-size: 23px;
        font-family: 'cc font', monospace;
      }
      .end {
        margin-left: 25px;
        text-transform: uppercase;
        font-family: 'cc font', monospace;
        .end-text {
          font-size: 9px;
          color: rgba(255,255,255,0.8);
        }
      }
      .card-holder {
        margin: 10px 25px;
        text-transform: uppercase;
        font-family: 'cc font', monospace;
      }
    }
  }
`;

export default StyledOverview;
