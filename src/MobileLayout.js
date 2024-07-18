import MobileFooter from "./Component/MobileFooter";
import MobileHeader from "./Component/MobileHeader";
import MobileMain from "./Component/MobileMain";

function MobileLayout() {
  
  return (
    <div className="container">
      <MobileHeader />
      <MobileMain />
      <MobileFooter />
    </div>
  );
}

export default MobileLayout;
