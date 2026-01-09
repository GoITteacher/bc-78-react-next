const sleep = (d: number) => new Promise((r) => setTimeout(r, d));
const Page = async () => {
  // await sleep(2000);
  return <div>Users Diagram 1</div>;
};

export default Page;
