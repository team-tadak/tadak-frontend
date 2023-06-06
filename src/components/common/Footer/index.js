import {
  FooterBrandName,
  FooterContactContainer,
  FooterContactItemContainer,
  FooterContainer,
  FooterCopyrightContainer,
  StyledFooter,
} from 'components/common/Footer/styles';
import LocationIcon from 'components/common/icons/LocationIcon';
import MessageIcon from 'components/common/icons/MessageIcon';
import PhoneIcon from 'components/common/icons/PhoneIcon';

function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterBrandName>TADAK</FooterBrandName>
        <FooterContactContainer>
          <FooterContactItemContainer>
            <MessageIcon />
            <div>tadak@tadak.com</div>
          </FooterContactItemContainer>
          <FooterContactItemContainer>
            <PhoneIcon />
            <div>031-000-0000</div>
          </FooterContactItemContainer>
          <FooterContactItemContainer>
            <LocationIcon />
            <div>경기도 수원시</div>
          </FooterContactItemContainer>
        </FooterContactContainer>
        <FooterCopyrightContainer>
          <div>Copyright &#169; 2022 TADAK All rights reserved </div>
        </FooterCopyrightContainer>
      </FooterContainer>
    </StyledFooter>
  );
}

export default Footer;
