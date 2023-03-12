import styled from 'styled-components';
import BgDesk from '../../img/auth/Bg-auth-desk.png';
import BgDesk2x from '../../img/auth/Bg-auth-desk@2x.png';
import BgTab from '../../img/auth/Bg-auth-tab.png';
import BgTab2x from '../../img/auth/Bg-auth-tab@2x.png';
import BgMob from '../../img/auth/Bg-auth-mob.png';
import BgMob2x from '../../img/auth/Bg-auth-mob@2x.png';

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  background-image: url('${BgMob}');
  background-position: center 100%;
  background-repeat: no-repeat;
  height: calc(100vh - 54px);
  background-size: contain;
  /* background-size: 1300px 440px; */

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${BgMob2x}');
  }

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('${BgTab}');

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${BgTab2x}');
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url('${BgDesk}');
    padding-top: 70px;
    padding-bottom: 70px;
    display: block;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${BgDesk2x}');
    }
  }
`;
