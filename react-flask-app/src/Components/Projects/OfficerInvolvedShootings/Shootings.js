import React from "react";

const DenverShootings = () => {
  return (
    <div className="shootings-container">
      <h4>Denver Officer Involved Shootings</h4>
      <p>
        The data comes from the,{" "}
        <a href="https://www.denvergov.org/opendata/dataset/city-and-county-of-denver-denver-police-officer-involved-shootings">
          City of Denver Open Data Catalog
        </a>{" "}
        and has clearly indicated the terms of using this work at{" "}
        <a href="http://creativecommons.org/licenses/by/3.0/">
          http://creativecommons.org/licenses/by/3.0/
        </a>
      </p>
      <p>I recreated the dashboard the city of Denver has provided and made it clickable and dynamic and also added a few extra visuals.  Microsoft Power Bi hosts the project and provides a sharable link.  The dashboards can also require authentication if needed.</p>
      <iframe
        width="100%"
        height="1060"
        src="https://app.powerbi.com/view?r=eyJrIjoiZjRiMDA5ZmYtYzk2ZS00OTIzLTg5MjAtMjg4OTRlMTQ1ZGRkIiwidCI6Ijc5YTUxMDViLTcyMTUtNDg5My1hY2E2LTlhZTQxMTQ2M2ZkOSIsImMiOjZ9&pageName=ReportSection6f39f6667ec1bec9948e"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default DenverShootings;
