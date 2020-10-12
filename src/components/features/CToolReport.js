import React, { useEffect, useState } from "react";
import axios from "axios";
import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MaterialTable from "material-table";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const CToolReport = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const getTableData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/reports/ctool");
        if (response.data) {
          // console.log(response.data);
          setData(response.data);
          // prepareTableData(response.data);
          return response.data;
        }
      } catch (e) {
        console.log(e);
      }
    };
    getTableData();
  }, []);
  return (
    <div>
      <MaterialTable
        style={{ margin: "10px" }}
        icons={tableIcons}
        columns={[
          {
            cellStyle: { minWidth: "200px" },
            width: null,
            title: "Candidate Name",
            field: "candidateName",
          },
          {
            cellStyle: { minWidth: "200px" },
            title: "Candidate LTI Id",
            field: "candidateLTIId",
          },
          {
            cellStyle: { minWidth: "200px" },
            title: "Client Selection Date",
            field: "clientSelectionDate",
          },
          {
            title: "Grade",
            field: "grade",
          },
          { title: "skills", field: "skills" },
          { title: "Total Exp", field: "totalExp" },
          { title: "Base BU", field: "baseBU" },
          {
            title: "Client BU",
            field: "clientBU",
          },
          {
            title: "Sales POC",
            field: "salesPOC",
          },
          {
            cellStyle: { minWidth: "200px" },
            title: "Delivery Manager",
            field: "deliveryManager",
          },
          {
            cellStyle: { minWidth: "200px" },
            title: "Client Hiring Manager",
            field: "clientHiringManager",
          },
          { title: "Client Head", field: "clientHead" },
          {
            title: "Bill Rate",
            field: "billRate",
          },
          {
            title: "BGV Date",
            field: "bgvDate",
          },
          { title: "BGV Status", field: "bgvStatus" },
          { title: "Location Status", field: "locationStatus" },
          { title: "CTool Status", field: "status" },
          {
            title: "Action Items",
            field: "actionItems",
          },
          {
            title: "Offer Release Date",
            field: "offerReleaseDate",
          },
          { title: "LTI DOJ", field: "ltiDOJ" },
          { title: "LTI RR", field: "ltiRR" },
          { title: "LTI Opportunity", field: "litOpportunity" },
          {
            title: "Client CToolID",
            field: "clientCToolID",
          },
          {
            title: "Position ID",
            field: "positionID",
          },
          { title: "Cost Center", field: "costCenter" },
          { title: "Client DOJ", field: "clientDOJ" },
          { title: "Client LWD", field: "clientLWD" },
          {
            title: "Job Category",
            field: "jobCategory",
          },
          {
            title: "DC Initiation Date",
            field: "dcInitiationDate",
          },
          { title: "DC Cleared Date", field: "dcClearedDate" },
          { title: "DC Status", field: "dcstatus" },
          { title: "PEV Status", field: "pevStatus" },
          {
            title: "Tech Select Status",
            field: "techSelectStatus",
          },
          {
            title: "Tech Selection Date",
            field: "techSelectionDate",
          },
          {
            title: "Remarks",
            field: "remarks",
          },
          { title: "Peoplesoft ID", field: "peoplesoftID" },
          { title: "Tentative DOJ", field: "tentativeDOJ" },
          { title: "DC Aging", field: "dcAging" },
          {
            title: "BGV Aging",
            field: "bgvAging",
          },
          {
            title: "Internal Aging",
            field: "internalAging",
          },
          {
            title: "Selection Aging Days",
            field: "selectionAgingDays",
          },
          {
            cellStyle: { minWidth: "200px" },
            title: "Onboarding Status",
            field: "onboardingStatus",
          },
          {
            title: "Candidate Country",
            field: "ltiWorkCountryName",
          },
          {
            title: "Candidate City",
            field: "ltiWorkCityName",
          },
          {
            title: "Client Country",
            field: "clientWorkCountryName",
          },
          {
            title: "Client City",
            field: "clientWorkCityName",
          },
          {
            title: "ID",
            field: "sID",
            hidden: true,
          },
        ]}
        data={Data}
        title="C-Tool not available"
      />
    </div>
  );
};

export default CToolReport;
