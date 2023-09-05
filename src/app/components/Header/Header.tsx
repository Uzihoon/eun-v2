import { HeaderBackground, HeaderContainer, HeaderDesc, HeaderTitle } from './Header.style';

interface HeaderProps {
  title: string;
  desc?: string;
}

const Header: React.FC<HeaderProps> = ({ title, desc }) => {
  return (
    <HeaderContainer>
      <HeaderBackground />
      <HeaderTitle>{title}</HeaderTitle>
      {desc && <HeaderDesc>{desc}</HeaderDesc>}
    </HeaderContainer>
  );
};

export default Header;
