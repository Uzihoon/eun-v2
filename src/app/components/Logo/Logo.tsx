import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { DarkLogo, LightLogo } from './Logo.style';

const Logo: React.FC = () => {
  const ThemeLogo = useMemo(() => {
    // TODO: Add LightLogo depending on the condition
    return DarkLogo;
  }, []);

  return (
    <ThemeLogo>
      <Link to="/">EUN</Link>
    </ThemeLogo>
  );
};

export default Logo;
