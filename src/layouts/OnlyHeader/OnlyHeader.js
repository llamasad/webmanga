import Header from '../components/Header';

function OnlyHeader({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default OnlyHeader;
