import { t } from '~i18n';
import { HelpPanelBox, HelpPanelClose, HelpPanelContent, HelpPanelHeader, StyledHelpPanel } from './HelpPanel.style';
import CloseIcon from '@mui/icons-material/Close';

interface HelpPanelProps {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

const HelpPanel: React.FC<HelpPanelProps> = ({ open, title, content, onClose }) => {
  if (!open) return null;

  return (
    <StyledHelpPanel>
      <HelpPanelBox>
        <HelpPanelClose onClick={onClose}>
          <CloseIcon />
        </HelpPanelClose>
        <HelpPanelHeader>{t.get(title)}</HelpPanelHeader>
        <HelpPanelContent>{t.get(content)}</HelpPanelContent>
      </HelpPanelBox>
    </StyledHelpPanel>
  );
};

export default HelpPanel;
