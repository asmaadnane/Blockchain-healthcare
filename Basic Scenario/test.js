//scenario 1 add doctor A to blockchain 
{
    "$class": "org.health.system.medicalPractitioner",
    "title": "SURGEON",
    "participantID": "0002",
    "name": {
      "$class": "org.health.system.Name",
      "firstName": "Doctor A",
      "LastName": "Alpha"
    }
  }

  //scenario 1 - create patient A
  
  {
    "$class": "org.health.system.patient",
    "contactinfo": {
      "$class": "org.health.system.ContactInfo",
      "address": {
        "$class": "org.health.system.Address",
        "streetName": "1 St.Paul's Ave",
        "town": "Chingford",
        "postCode": "E1 3AP"
      },
      "phoneNumber": "02085292663"
    },
    "participantID": "0001",
    "name": {
      "$class": "org.health.system.Name",
      "firstName": "Patient A",
      "LastName": "Alpha"
    }
  }
  //Scenario 1 - member A 
  
  {
    "$class": "org.health.system.member",
    "participantID": "0003",
    "name": {
      "$class": "org.health.system.Name",
      "firstName": "Member A",
      "LastName": "Alpha"
    }
  }
  
  
  //scenario 1 - Patient A creates EHR and add doctor's ID to readIDs
  {
    "$class": "org.health.system.EhrAsset",
    "assetKey": "0001",
    "visits": [],
    "owner": "resource:org.health.system.patient#0001",
    "updateIDs": ["0002"]
  }
 

  