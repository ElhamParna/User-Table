import React from "react";
const AddressMap = () => {
  return (
    <div className="google-map-code" style={{ height: "218px" , marginTop:"20px" }}>
      <div class="mapouter" style={{ height: "100%" }}>
        <div class="gmap_canvas" style={{ height: "100%" }}>
          <iframe
            style={{ width: " 100%", height: "100%", borderRadius: "10px" }}
            class="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ایران تهران یوسف اباد اسدابادی 59st &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default AddressMap ;
