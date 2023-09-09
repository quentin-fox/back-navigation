export const load = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const value = Math.random().toString();

  return { value }
}
