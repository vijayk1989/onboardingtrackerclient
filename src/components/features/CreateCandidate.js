import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikField from "../ui/FormikField";
import FormikSelect from "../ui/FormikSelect";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "formik-material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  candidateFormGrid: {
    margin: "10px",
  },
  candidateForm: {
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

const validationSchema = Yup.object({
  candidateName: Yup.string().required("Candidate Name is a required field"),
  onboardingStatus: Yup.string().required(
    "Onboarding Status is a required field"
  ),
  candidateLTIId: Yup.string().required(),
  clientSelectionDate: Yup.date().required(),
  grade: Yup.string().required(),
  skills: Yup.string().required(),
  totalExp: Yup.number().required(),
  baseBU: Yup.string().required(),
  clientBU: Yup.string().required(),
  salesPOC: Yup.string().required(),
  deliveryManager: Yup.string().required(),
  clientHiringManager: Yup.string().required(),
  clientHead: Yup.string().required(),
  billRate: Yup.string().required(),
  bgvDate: Yup.date().required(),
  bgvStatus: Yup.string().required(),
  locationStatus: Yup.string().required(),
  status: Yup.string().required(),
  actionItems: Yup.string().required(),
  offerReleaseDate: Yup.string().required(),
  ltiDOJ: Yup.date().required(),
  clientCToolID: Yup.string().required(),
  clientDOJ: Yup.date().required(),
  clientLWD: Yup.date().required(),
  jobCategory: Yup.string().required(),
  dcInitiationDate: Yup.date().required(),
  dcClearedDate: Yup.date().required(),
  dcstatus: Yup.string().required(),
  pevStatus: Yup.string().required(),
  techSelectStatus: Yup.string().required(),
  countryName: Yup.string().required(),
  cityName: Yup.string().required(),
  odcLTI: Yup.string().required(),
  odcClient: Yup.string().required(),
});

const submitFormToBackend = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/onboarding", data);
    console.log(response);
  } catch (e) {
    console.log("Axios Error", e);
  }
};

const formatDate = (date) => {
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 101).toString().substring(1);
  var day = (date.getDate() + 100).toString().substring(1);
  return year + "-" + month + "-" + day;
};

const onSubmit = (values, { resetForm }) => {
  let locations = {};
  Object.keys(values).forEach((key) => {
    if (key === "countryName") {
      locations[key] = values[key];
    } else if (key === "cityName") {
      locations[key] = values[key];
    } else if (key === "odcLTI") {
      locations[key] = values[key];
    } else if (key === "odcClient") {
      locations[key] = values[key];
    }
  });
  delete values["countryName"];
  delete values["cityName"];
  delete values["odcLTI"];
  delete values["odcClient"];
  values["locations"] = [locations];
  values["clientSelectionDate"] = formatDate(values.clientSelectionDate);
  values["bgvDate"] = formatDate(values.bgvDate);
  values["offerReleaseDate"] = formatDate(values.offerReleaseDate);
  values["ltiDOJ"] = formatDate(values.ltiDOJ);
  values["clientDOJ"] = formatDate(values.clientDOJ);
  values["clientLWD"] = formatDate(values.clientLWD);
  values["dcInitiationDate"] = formatDate(values.dcInitiationDate);
  values["dcClearedDate"] = formatDate(values.dcClearedDate);
  values["tentativeDOJ"] = formatDate(values.tentativeDOJ);
  console.log("values", JSON.stringify(values, null, 2));
  submitFormToBackend(values);
  resetForm({ values: initialValues });
  // setTimeout(() => {
  //   setSubmitting(false);

  // }, 600);
};

const internalSelect = [
  {
    value: "Internal",
    label: "Internal",
  },
  {
    value: "External",
    label: "External",
  },
];

const statuses = [
  {
    value: "cleared",
    label: "Cleared",
  },
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "notInitiated",
    label: "Not Initiated",
  },
];

const initialValues = {
  candidateName: "",
  onboardingStatus: "",
  candidateLTIId: "",
  clientSelectionDate: null,
  grade: "",
  skills: "",
  totalExp: 0,
  baseBU: "",
  clientBU: "",
  salesPOC: "",
  deliveryManager: "",
  clientHiringManager: "",
  clientHead: "",
  billRate: "",
  bgvDate: null,
  bgvStatus: "",
  locationStatus: "",
  status: "",
  actionItems: "",
  offerReleaseDate: null,
  ltiDOJ: "",
  ltiRR: "",
  litOpportunity: "",
  clientCToolID: "",
  positionID: "",
  costCenter: "",
  clientDOJ: null,
  clientLWD: null,
  jobCategory: "",
  dcInitiationDate: null,
  dcClearedDate: null,
  dcstatus: "",
  pevStatus: "",
  techSelectStatus: "",
  remarks: "",
  peoplesoftID: "",
  tentativeDOJ: null,
  dcAging: 1,
  bgvAging: 1,
  internalAging: 1,
  selectionAgingDays: 1,
  countryName: "",
  cityName: "",
  odcLTI: "",
  odcClient: "",
};

function CreateCandidate() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h5">New Candidate Form</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ dirty, isValid }) => {
            return (
              <Form>
                <Grid
                  className={classes.candidateForm}
                  container
                  direction="row"
                  spacing={2}
                >
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField
                      name="candidateName"
                      label="Candidate Name"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikSelect
                      name="onboardingStatus"
                      items={internalSelect}
                      label="Onboarding Status"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField
                      name="candidateLTIId"
                      label="Candidate LTI ID"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <Field
                      component={DatePicker}
                      name="clientSelectionDate"
                      label="Client Selection Date"
                      variant="inline"
                      format="dd/MM/yyyy"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="grade" label="Grade" required />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="skills" label="Skills" required />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField
                      name="totalExp"
                      type="number"
                      label="Total Experience"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="baseBU" label="Base BU" required />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="clientBU" label="Client BU" required />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="salesPOC" label="Sales POC" required />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField
                      name="deliveryManager"
                      label="Delivery Manager"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField
                      name="clientHiringManager"
                      label="Client Hiring Mananger"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField
                      name="clientHead"
                      label="Client Head"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="billRate" label="Bill Rate" required />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <Field
                      component={DatePicker}
                      name="bgvDate"
                      label="BGV Date"
                      variant="inline"
                      format="dd/MM/yyyy"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikSelect
                      name="bgvStatus"
                      items={statuses}
                      label="BGV Status"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikSelect
                      name="locationStatus"
                      items={statuses}
                      label="Location Status"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikSelect
                      name="status"
                      items={statuses}
                      label="status"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="actionItems" label="Action Items" />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <Field
                      component={DatePicker}
                      name="offerReleaseDate"
                      label="Offer Release Date"
                      variant="inline"
                      format="dd/MM/yyyy"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <Field
                      component={DatePicker}
                      name="ltiDOJ"
                      label="LTI DOJ"
                      variant="inline"
                      format="dd/MM/yyyy"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="ltiRR" label="LTI RR" />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField
                      name="litOpportunity"
                      label="LTI Opportunity"
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField
                      name="clientCToolID"
                      label="Client CTool ID"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField
                      name="positionID"
                      label="Position ID"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="costCenter" label="Cost Center" />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <Field
                      component={DatePicker}
                      name="clientDOJ"
                      label="Client DOJ"
                      variant="inline"
                      format="dd/MM/yyyy"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <Field
                      component={DatePicker}
                      name="clientLWD"
                      label="Client LWD"
                      variant="inline"
                      format="dd/MM/yyyy"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="jobCategory" label="Job Category" />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <Field
                      component={DatePicker}
                      name="dcInitiationDate"
                      label="DC Initiation Date"
                      variant="inline"
                      format="dd/MM/yyyy"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <Field
                      component={DatePicker}
                      name="dcClearedDate"
                      label="DC Cleared Date"
                      variant="inline"
                      format="dd/MM/yyyy"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikSelect
                      name="dcstatus"
                      items={statuses}
                      label="DC Status"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikSelect
                      name="pevStatus"
                      items={statuses}
                      label="PEV Status"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikSelect
                      name="techSelectStatus"
                      items={statuses}
                      label="Tech Select Status"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="remarks" label="Remarks" />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="peoplesoftID" label="Peoplesoft ID" />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <Field
                      component={DatePicker}
                      name="tentativeDOJ"
                      label="Tentative DOJ"
                      variant="inline"
                      format="dd/MM/yyyy"
                      required
                    />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="countryName" label="Country Name" />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="cityName" label="City Name" />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="odcLTI" label="ODC LTI" />
                  </Grid>
                  <Grid item lg={5} md={10} sm={10} xs={10}>
                    <FormikField name="odcClient" label="ODC Client" />
                  </Grid>
                </Grid>
                <Button
                  disabled={!dirty || !isValid}
                  variant="contained"
                  type="submit"
                  color="primary"
                >
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}

/* 
  "candidateName": "abc",
  "onboardingStatus": "internal",
  "candidateLTIId": "abc",
  "clientSelectionDate": "2020-07-02",
  "grade": "A1",
  "skills": "abc",
  "totalExp": "7",
  "baseBU": "abc",
  "clientBU": "abc",
  "salesPOC": "abc",
  "deliveryManager": "abc",
  "clientHiringManager": "abc",
  "clientHead": "abc",
  "billRate": "100",
  "bgvDate": "2020-07-20",
  "bgvStatus": "cleared",
  "locationStatus": "cleared",
  "status": "cleared",
  "actionItems": "abc",
  "offerReleaseDate": "2020-07-20",
  "ltiDOJ": "2020-07-20",
  "ltiRR": "abc",
  "litOpportunity": "abc",
  "clientCToolID": "abc",
  "positionID": "abc",
  "costCenter": "abc",
  "clientDOJ": "2020-07-20",
  "clientLWD": "2020-07-20",
  "jobCategory": "abc",
  "dcInitiationDate": "2020-07-20",
  "dcClearedDate": "2020-07-20",
  "dcstatus": "cleared",
  "pevStatus": "cleared",
  "techSelectStatus": "cleared",
  "remarks": "abc",
  "peoplesoftID": "abc",
  "tentativeDOJ": "2020-07-20",
  "dcAging": 1,
  "bgvAging": 1,
  "internalAging": 1,
  "selectionAgingDays": 1,
  "locations": [
    {
      "countryName": "abc",
      "cityName": "abc",
      "odcLTI": "abc",
      "odcClient": "abc"
    }
  ]
*/

export default CreateCandidate;
