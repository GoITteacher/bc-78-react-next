interface LayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
  diagram1: React.ReactNode;
  diagram2: React.ReactNode;
}

const Layout = ({ sidebar, content, diagram1, diagram2 }: LayoutProps) => {
  return (
    <div>
      <aside>{sidebar}</aside>
      <div>
        <div>
          {diagram1} {diagram2}
        </div>
        {content}
      </div>
    </div>
  );
};

export default Layout;
