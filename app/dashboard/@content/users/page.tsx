const sleep = (d: number) => new Promise((r) => setTimeout(r, d));
const Page = async () => {
  await sleep(5000);
  return <div>Users Content</div>;
};

export default Page;
