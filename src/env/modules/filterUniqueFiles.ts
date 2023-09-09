const filterUniqueFiles = (origin: File[], target: File[]) => {
  return [...origin, ...target.filter((file) => !origin.find(({ name }) => name === file.name))];
};

export default filterUniqueFiles;
