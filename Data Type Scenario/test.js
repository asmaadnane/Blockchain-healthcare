 //Setup for scenario 4
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

//Hospital A adds specialist A
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

//patient A vists specialist A and gives them rights to add to EHR
{
    "$class": "org.health.system.UpdateRights",
    "ehr": "resource:org.health.system.EhrAsset#0001",
    "doctorID": "0003"
  }
//specialist A adds a lung xray to the ehr
{
    "$class": "org.health.system.addLungXray",
    "ehrID": "0001"
  }