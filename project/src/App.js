import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import './index.css';
function App() {
  return (
    <div className="container">
    <ProfilePhoto/>
    <div>
    <FullName/>
    <Address/>
    </div>
    </div>
  );
}

export default App;
