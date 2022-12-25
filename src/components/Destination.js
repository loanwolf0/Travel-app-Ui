import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p> Tours give you the opportunity to </p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="lore mwer xfqewf clas sNa mewefcwer classNamewefcwere crfwe returnwr e
       lore mwer xfqewf classNamew efcwer classNamewefcwere crfwe returnwr e
       lor emwer xfqewf classNa mewef cwer classNamewefcwere crfwe returnwr e
       loremwerxfqewf classNa mewef cwer class Namewe fcwere crfwe returnwr e"
        img1="https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600"
        img2="https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg?auto=compress&cs=tinysrgb&w=600"
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="lore mwer xfqewf clas sNa mewefcwer classNamewefcwere crfwe returnwr e
       lore mwer xfqewf classNamew efcwer classNamewefcwere crfwe returnwr e
       lor emwer xfqewf classNa mewef cwer classNamewefcwere crfwe returnwr e
       loremwerxfqewf classNa mewef cwer class Namewe fcwere crfwe returnwr e"
        img1="https://images.pexels.com/photos/2618804/pexels-photo-2618804.jpeg?auto=compress&cs=tinysrgb&w=600"
        img2="https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </div>
  );
};

export default Destination;
