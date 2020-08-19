import React, { useContext } from "react";
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
import { TrackerContext, initialFormData } from "../../context/TrackerContext";
import { useHistory } from "react-router-dom";
import FormSelectionData from "../../Data/FormSelectionData";
import ValidationSchema from "../validation/ValidationSchema";

const useStyles = makeStyles((theme) => ({
  candidateFormGrid: {
    margin: "10px",
  },
  candidateForm: {
    marginTop: "2px",
    marginBottom: "10px",
    width: "95%",
  },
  candidateFormContainer: {
    margin: "5px 10px",
  },
  formHeading: {
    textDecoration: "underline",
    marginBottom: 0,
    padding: 0,
  },
  candidateFormItems: {
    paddingBottom: "10px",
  },
}));

const formatDate = (date) => {
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 101).toString().substring(1);
  var day = (date.getDate() + 100).toString().substring(1);
  return year + "-" + month + "-" + day;
};

function CreateCandidate() {
  const classes = useStyles();
  const { formData, isEditing, editID, setIsEditing, setFormData } = useContext(
    TrackerContext
  );
  const history = useHistory();

  const submitFormToBackend = async (data) => {
    try {
      if (!isEditing) {
        const response = await axios.post(
          "http://localhost:8080/onboarding",
          data
        );
        console.log(response);
        setFormData(initialFormData);
        alert("Form Submitted successfully");
        history.push("/");
      } else {
        const response = await axios.put(
          `http://localhost:8080/onboarding/${editID}`,
          data
        );
        setIsEditing(false);
        setFormData(initialFormData);
        console.log(response);
        alert("Candidate data was successfully edited");
        history.push("/");
      }
    } catch (e) {
      console.log("Axios Error", e);
    }
  };

  const onSubmit = (values) => {
    let location = {};
    Object.keys(values).forEach((key) => {
      if (key === "ltiWorkCountryName") {
        location[key] = values[key];
      } else if (key === "ltiWorkCityName") {
        location[key] = values[key];
      } else if (key === "clientWorkCountryName") {
        location[key] = values[key];
      } else if (key === "clientWorkCityName") {
        location[key] = values[key];
      }
    });
    delete values["ltiWorkCountryName"];
    delete values["ltiWorkCityName"];
    delete values["clientWorkCountryName"];
    delete values["clientWorkCityName"];
    if (!isEditing) {
      values["clientSelectionDate"] = values["clientSelectionDate"]
        ? formatDate(values.clientSelectionDate)
        : null;
      values["bgvDate"] = values["bgvDate"] ? formatDate(values.bgvDate) : null;
      values["offerReleaseDate"] = values["offerReleaseDate"]
        ? formatDate(values.offerReleaseDate)
        : null;
      values["ltiDOJ"] = values["ltiDOJ"] ? formatDate(values.ltiDOJ) : null;
      values["clientDOJ"] = values["clientDOJ"]
        ? formatDate(values.clientDOJ)
        : null;
      values["clientLWD"] = values["clientLWD"]
        ? formatDate(values.clientLWD)
        : null;
      values["dcInitiationDate"] = values["dcInitiationDate"]
        ? formatDate(values.dcInitiationDate)
        : null;
      values["dcClearedDate"] = values["dcClearedDate"]
        ? formatDate(values.dcClearedDate)
        : null;
      values["tentativeDOJ"] = values["tentativeDOJ"]
        ? formatDate(values.tentativeDOJ)
        : null;
    }
    values["location"] = location;
    console.log("values", JSON.stringify(values, null, 2));
    submitFormToBackend(values);
  };

  return (
    <div className={classes.candidateFormContainer}>
      <Typography variant="h5">New Candidate Form</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Formik
          initialValues={formData}
          validationSchema={Yup.object(ValidationSchema)}
          onSubmit={onSubmit}
        >
          {({ dirty, isValid }) => {
            return (
              <Form>
                <div className={classes.candidateFormItems}>
                  <h3 className={classes.formHeading}>Candidate Data</h3>
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
                        items={FormSelectionData.internalSelect}
                        label="Internal / External"
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
                        variant="dialog"
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
                        label="Total Experience (Months)"
                        required
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikSelect
                        name="baseBU"
                        items={FormSelectionData.practiceUnits}
                        label="Base BU"
                        required
                      />
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
                      <FormikField
                        name="billRate"
                        label="Bill Rate (Per Day)"
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
                        variant="dialog"
                        format="dd/MM/yyyy"
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <Field
                        component={DatePicker}
                        name="ltiDOJ"
                        label="LTI DOJ"
                        variant="dialog"
                        format="dd/MM/yyyy"
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikField name="jobCategory" label="Job Category" />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.candidateFormItems}>
                  <h3 className={classes.formHeading}>BGV Data</h3>
                  <Grid
                    className={classes.candidateForm}
                    container
                    direction="row"
                    spacing={2}
                  >
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <Field
                        component={DatePicker}
                        name="bgvDate"
                        label="BGV Date"
                        variant="dialog"
                        format="dd/MM/yyyy"
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikSelect
                        name="bgvStatus"
                        items={FormSelectionData.bgvStatus}
                        label="BGV Status"
                        required
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.candidateFormItems}>
                  <h3 className={classes.formHeading}>C-TOOL Data</h3>
                  <Grid
                    className={classes.candidateForm}
                    container
                    direction="row"
                    spacing={2}
                  >
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikSelect
                        name="status"
                        items={FormSelectionData.cToolStatus}
                        label="C-Tool Status"
                        required
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikField name="clientCToolID" label="HSBC CTool ID" />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikField name="positionID" label="Position ID" />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikField name="costCenter" label="Cost Center" />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.candidateFormItems}>
                  <h3 className={classes.formHeading}>Client Data</h3>
                  <Grid
                    className={classes.candidateForm}
                    container
                    direction="row"
                    spacing={2}
                  >
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <Field
                        component={DatePicker}
                        name="clientDOJ"
                        label="HSBC DOJ"
                        variant="dialog"
                        format="dd/MM/yyyy"
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <Field
                        component={DatePicker}
                        name="clientLWD"
                        label="HSBC LWD"
                        variant="dialog"
                        format="dd/MM/yyyy"
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikField name="peoplesoftID" label="Peoplesoft ID" />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <Field
                        component={DatePicker}
                        name="tentativeDOJ"
                        label="Tentative DOJ"
                        variant="dialog"
                        format="dd/MM/yyyy"
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.candidateFormItems}>
                  <h3 className={classes.formHeading}>DC Data</h3>
                  <Grid
                    className={classes.candidateForm}
                    container
                    direction="row"
                    spacing={2}
                  >
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <Field
                        component={DatePicker}
                        name="dcInitiationDate"
                        label="DC Initiation Date"
                        variant="dialog"
                        format="dd/MM/yyyy"
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <Field
                        component={DatePicker}
                        name="dcClearedDate"
                        label="DC Cleared Date"
                        variant="dialog"
                        format="dd/MM/yyyy"
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikSelect
                        name="dcstatus"
                        items={FormSelectionData.dcStatus}
                        label="DC Status"
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.candidateFormItems}>
                  <h3 className={classes.formHeading}>Tech Select Data</h3>
                  <Grid
                    className={classes.candidateForm}
                    container
                    direction="row"
                    spacing={2}
                  >
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <Field
                        component={DatePicker}
                        name="techSelectionDate"
                        label="Tech Selection Date"
                        variant="dialog"
                        format="dd/MM/yyyy"
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikSelect
                        name="techSelectStatus"
                        items={FormSelectionData.techSelectStatus}
                        label="Tech Select Status"
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.candidateFormItems}>
                  <h3 className={classes.formHeading}>Location Data</h3>
                  <Grid
                    className={classes.candidateForm}
                    container
                    direction="row"
                    spacing={2}
                  >
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikField
                        name="ltiWorkCountryName"
                        label="Candidate Country"
                        required
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikField
                        name="ltiWorkCityName"
                        label="Candidate City"
                        required
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikField
                        name="clientWorkCountryName"
                        label="HSBC Country"
                        required
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikField
                        name="clientWorkCityName"
                        label="HSBC City"
                        required
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className={classes.candidateFormItems}>
                  <h3 className={classes.formHeading}>Miscallaneous</h3>
                  <Grid
                    className={classes.candidateForm}
                    container
                    direction="row"
                    spacing={2}
                  >
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
                      <FormikSelect
                        name="pevStatus"
                        items={FormSelectionData.statuses}
                        label="PEV Status"
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikSelect
                        name="locationStatus"
                        items={FormSelectionData.statuses}
                        label="Location Status"
                      />
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                      <FormikField name="remarks" label="Remarks" />
                    </Grid>
                  </Grid>
                </div>
                <Button
                  disabled={!dirty || !isValid}
                  variant="contained"
                  type="submit"
                  color="primary"
                >
                  {isEditing ? "Edit" : "Submit"}
                </Button>
              </Form>
            );
          }}
        </Formik>
      </MuiPickersUtilsProvider>
    </div>
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
  "location": [
    {
      "ltiWorkCountryName": "abc",
      "ltiWorkCityName": "abc",
      "clientWorkCountryName": "abc",
      "clientWorkCityName": "abc"
    }
  ]
*/

export default CreateCandidate;
