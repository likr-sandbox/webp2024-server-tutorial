export default async () => {
  const data = {
    message: Math.floor(Math.random() * 100),
  };
  return new Response(JSON.stringify(data));
};
