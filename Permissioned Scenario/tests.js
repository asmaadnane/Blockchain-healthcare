 //Setup for scenario 2
    //Admin adds the hospital 
    {
        "$class": "org.health.system.medicalInstitution",
        "participantID": "0001",
        "institutionName": "Hospital A"
    }

    //admin adds patient A
    {
        "$class": "org.health.system.patient",
        "contactinfo": {
        "$class": "org.health.system.ContactInfo",
        "address": {
            "$class": "org.health.system.Address",
            "streetName": "7 Church RD",
            "town": "Leeds",
            "postCode": "LH11 34A"
        },
        "phoneNumber": "0208 555 8787"
        },
        "participantID": "0002",
        "name": {
        "$class": "org.health.system.Name",
        "firstName": "Patient A",
        "lastName": "Alpha"
        }
    }
    //patient A creates an EHR
    {
        "$class": "org.health.system.EhrAsset",
        "assetKey": "0001",
        "owner": "resource:org.health.system.patient#0002"
      }

//Hospital A adds practitioner B
{
    "$class": "org.health.system.AddPractitioner",
    "institutionID": "0001",
    "title": "GP",
    "participantID": "0003",
    "name": {
      "$class": "org.health.system.Name",
      "firstName": "GP A",
      "lastName": "Alpha"
    }
  }

//patient A vists practitioner B and gives them rights to add to EHR
{
    "$class": "org.health.system.UpdateRights",
    "ehr": "resource:org.health.system.EhrAsset#0001",
    "doctorID": "0003"
  }
//add to visit
  {
    "$class": "org.health.system.AddVisits",
    "ehrID": "0001",
    "visit": {
      "$class": "org.health.system.Visit",
      "Doctor": "Practitioner B",
      "symptoms": ["Fever", "headache", "vomiting"],
      "dateOfVisit": "18/03/2019",
      "solved": true
    }
  }