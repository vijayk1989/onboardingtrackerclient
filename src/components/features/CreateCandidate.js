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
  jobCategory: Yup.string().required(),
  dcInitiationDate: Yup.date().required(),
  dcClearedDate: Yup.date().required(),
  dcStatus: Yup.string().required(),
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

const onSubmit = (values, { setSubmitting, resetForm }) => {
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
  console.log("values", values);
  submitFormToBackend(values);
  setTimeout(() => {
    setSubmitting(false);
    resetForm({ values: initialValues });
  }, 400);
};

const internalSelect = [
  {
    value: "internal",
    label: "Internal",
  },
  {
    value: "external",
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
  bgvDate: "",
  bgvStatus: "",
  locationStatus: "",
  status: "",
  actionItems: "",
  offerReleaseDate: "",
  ltiDOJ: "",
  ltiRR: "",
  litOpportunity: "",
  clientCToolID: "",
  positionID: "",
  costCenter: "",
  clientDOJ: "",
  clientLWD: "",
  jobCategory: "",
  dcInitiationDate: "",
  dcClearedDate: "",
  dcStatus: "",
  pevStatus: "",
  techSelectStatus: "",
  remarks: "",
  peoplesoftID: "",
  tentativeDOJ: "",
  dcAging: 1,
  bgvAging: 1,
  internalAging: 1,
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
                      name="dcStatus"
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
{
"candidateName": "Andrew",
"onboardingStatus": "Internal",
"candidateLTIId": "1987347",
"clientSelectionDate": "2020-07-15",
"grade": "A-1-2",
"skills": "Java,Microservices,Springboot",
"totalExp": 100,
"baseBU":"A3",
"clientBU":"Core Banking",
"salesPOC":"Indranil",
"deliveryManager":"Ramkumar Golagabathula",
"clientHiringManager":"Sanjay Kumar Lokhande",
"clientHead":"Sumati Chedimali",
"billRate":"160",
"bgvDate":"2020-07-15",
"bgvStatus":"",
"locationStatus":"",
"status":"",
"actionItems":"",
"offerReleaseDate":"",
"ltiDOJ":"",
"ltiRR":"",
"litOpportunity":"",
"clientCToolID":"",
"positionID":"",
"costCenter":"",
"clientDOJ":"",
"clientLWD":"",
"jobCategory":"",
"dcInitiationDate":"",
"dcClearedDate":"",
"dcstatus":"",
"pevStatus":"",
"techSelectStatus":"",
"remarks":"",
"peoplesoftID":"",
"tentativeDOJ":"",
"dcAging":1,
"bgvAging":1,
"internalAging":1,
"selectionAgingDays":1,
"locations":[ { "countryName": "India","cityName":"Pune","odcLTI":"","odcClient": "Sivajinager" },{ "countryName" : "UK","cityName":"London","odcLTI":"London Bridge ","odcClient":"" }]
}
*/

export default CreateCandidate;
