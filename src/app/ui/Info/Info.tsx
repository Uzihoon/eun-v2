import { styled } from 'styled-components';
import { t } from '~i18n';
import palette from '~lib/styles/palette';

interface InfoProps {
  onClick?: () => void;
}

const Info: React.FC<InfoProps> = ({ onClick }) => <StyledInfo onClick={onClick}>{t.get('info')}</StyledInfo>;

const StyledInfo = styled.div`
  font-size: 0.9em;
  color: ${palette.blue.l500};
  cursor: pointer;
  margin-left: 3px;
  transition: all 0.2s;
  &:hover {
    text-decoration: underline;
  }
`;

export default Info;
