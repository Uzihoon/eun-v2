import { css, styled } from 'styled-components';
import palette from '~lib/styles/palette';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';
import Warning from '../Icons/Warning';

type AlertType = 'INFO' | 'ERROR' | 'WARNING';

interface StyledAlertProps {
  type?: AlertType;
}

interface AlertProps {
  type?: AlertType;
  header?: string;
  content: string;
}

const Alert: React.FC<AlertProps> = ({ type = 'INFO', header, content }) => {
  return (
    <StyledAlert type={type}>
      {header && (
        <AlertHeader>
          <AlertHeaderIcon>
            <Warning strokeWidth={2.5} width={17} />
          </AlertHeaderIcon>
          <AlertHeaderText>{header}</AlertHeaderText>
        </AlertHeader>
      )}
      <AlertContent>{content}</AlertContent>
    </StyledAlert>
  );
};

const StyledAlert = styled.div<StyledAlertProps>`
  width: 100%;
  margin: ${space[2]} 0;
  padding: ${space[2]} ${space[3]};
  border-radius: 10px;
  color: ${themedPalette.alert_txt};

  ${(props) => {
    switch (props.type) {
      case 'INFO':
        return css``;
      case 'ERROR':
        return css`
          background-color: ${themedPalette.bg_error_alert};
          border: 2px solid ${themedPalette.border_error_alert};
        `;
      case 'WARNING':
        return css``;
    }
  }}
`;

const AlertHeader = styled.div`
  font-weight: bold;
  padding-bottom: ${space[1]};
  display: flex;
  align-items: center;
  color: ${palette.red.l600};
`;

const AlertHeaderIcon = styled.div`
  padding-top: 5px;
`;

const AlertHeaderText = styled.div`
  margin-left: ${space[0]};
`;

const AlertContent = styled.div`
  font-size: 0.9em;
  padding-bottom: ${space[1]};
`;

export default Alert;
