export const load = async () => {
  await new Promise(resolve => setTimeout(resolve, 100));

  const value = Math.random() * 1000;

  return { value }
}
