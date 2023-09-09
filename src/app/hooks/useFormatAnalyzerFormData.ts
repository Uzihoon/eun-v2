import { useMemo, useState } from 'react';

const useFormatAnalyzerFormData = () => {
  const [error, setError] = useState(false);

  const analyzerId = useMemo(() => '', []);

  const dispatchFormat = () => {};

  return { error, dispatchFormat };
};

export default useFormatAnalyzerFormData;
