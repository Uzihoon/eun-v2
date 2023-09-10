import ProgressBar from '~app/ui/ProgressBar';
import { t } from '~i18n';
import {
  Background,
  Container,
  LoaderBox,
  Progress,
  ProgressInfo,
  ProgressDescription,
  ProgressTitle,
} from './ProgressLoader.style';

interface ProgressLoaderProps {
  progress: number;
  progressInfo: { request: number; complete: number };
}

const ProgressLoader: React.FC<ProgressLoaderProps> = ({ progress, progressInfo }) => {
  const { request, complete } = progressInfo;
  return (
    <Container>
      <Background />
      <LoaderBox>
        <ProgressTitle>{t.get('progress.analyzing.title')}</ProgressTitle>
        <Progress>{progress}%</Progress>
        <ProgressDescription>{t.get('progress.analyzing.description')}</ProgressDescription>
        <ProgressInfo>{t.get('progress.analyzing.info', { progress: complete + 1, total: request })}</ProgressInfo>
        <ProgressBar progress={progress} />
      </LoaderBox>
    </Container>
  );
};

export default ProgressLoader;
