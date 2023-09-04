const variables = {
  s1: '0.25rem',
  s2: '0.5rem',
  s3: '0.75rem',
  s4: '1rem',
  s5: '1.5rem',
  s6: '2rem',
  s7: '2.5rem',
  s8: '3.5rem',
  s9: '4rem',
  s10: '5rem',
  s11: '8rem',
} as const;

const space = {
  padding: { ...variables },
  margin: { ...variables },
};

export default space;
