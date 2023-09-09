const formatFileListToArray = (fileList: FileList | null): File[] => {
  if (!fileList || fileList.length === 0) return [];
  const files: File[] = [];

  for (let i = 0; i < fileList.length; i++) {
    const item = fileList.item(i);

    if (item) files.push(item);
  }

  return files;
};

export default formatFileListToArray;
