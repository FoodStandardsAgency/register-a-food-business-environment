db = db.getSiblingDB('register_a_food_business_cache');
db.createUser({
  user: 'test-user',
  pwd: 'test-password',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});
db.createCollection('cachedRegistrations');
db.cachedRegistrations.insertOne( {
  "fsa-rn": "0004-EMAILS-NS-TASCOMI-FAIL1",
  "reg_submission_date": "2020-02-09",
  "establishment": {
    "establishment_details": {
      "establishment_trading_name": "Failed Tascomi 1",
      "establishment_primary_number": "01234 456789",
      "establishment_secondary_number": "",
      "establishment_email": "EE_fsatestemail.valid@gmail.com",
      "establishment_opening_date": "2001-01-01"
    },
    "operator": {
      "operator_first_name": "Jeff",
      "operator_last_name": "Healey",
      "operator_postcode": "NR14 7PZ",
      "operator_town": "Norwich",
      "operator_address_line_1": "Test 1 Ltd",
      "operator_address_line_2": "1 Test Lane",
      "operator_address_line_3": "Testland",
      "operator_primary_number": "01234 567890",
      "operator_secondary_number": "",
      "operator_email": "FBO_fsatestemail.valid@gmail.com",
      "operator_type": "Sole trader"
    },
    "premise": {
      "establishment_postcode": "NR14 7PZ",
      "establishment_town": "Norwich",
      "establishment_type": "Mobile or moveable premises",
      "establishment_address_line_1": "Test 2 Ltd",
      "establishment_address_line_2": "2 Test Lane",
      "establishment_address_line_3": "Testland"
    },
    "activities": {
      "customer_type": "End consumer",
      "business_type": "Any other retailer",
      "business_type_search_term": "Casino",
      "import_export_activities": "None",
      "water_supply": "Private",
      "business_other_details": "gdsgs",
      "opening_day_monday": true,
      "opening_day_tuesday": false,
      "opening_day_wednesday": false,
      "opening_day_thursday": false,
      "opening_day_friday": false,
      "opening_day_saturday": false,
      "opening_day_sunday": false,
      "opening_hours_monday": "ddfg"
    }
  },
  "declaration": {
    "feedback1": true,
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 8015,
    "local_council": "Test Council",
    "local_council_notify_emails": [
      "LC0_fsatestemail.valid@gmail.com",
      "LC1_fsatestemail.valid@gmail.com"
    ],
    "local_council_email": "LC_fsatestemail.valid@gmail.com",
    "local_council_phone_number": "01234 123 456"
  },
  "status": {
    "tascomi": {
      "time": "3/9/2020, 22:18:03",
      "complete": false
    }
  }
});


db.cachedRegistrations.insertOne( {
  "fsa-rn": "0004-EMAILS-NS-TASCOMI-FAIL2",
  "reg_submission_date": "2020-02-10",
  "establishment": {
    "establishment_details": {
      "establishment_trading_name": "Failed tascomi 2",
      "establishment_primary_number": "2222 2222222",
      "establishment_secondary_number": "",
      "establishment_email": "EE_fsatestemail.valid@gmail.com",
      "establishment_opening_date": "2001-01-01"
    },
    "operator": {
      "operator_first_name": "Sammy",
      "operator_last_name": "Smith",
      "operator_postcode": "GO18 7PZ",
      "operator_town": "London",
      "operator_address_line_1": "Test 2 Ltd",
      "operator_address_line_2": "2 Test Lane",
      "operator_address_line_3": "Testland",
      "operator_primary_number": "01234 567890",
      "operator_secondary_number": "",
      "operator_email": "FBO_fsatestemail.valid@gmail.com",
      "operator_type": "Sole trader"
    },
    "premise": {
      "establishment_postcode": "GU18 7JJ",
      "establishment_town": "London",
      "establishment_type": "Mobile or moveable premises",
      "establishment_address_line_1": "Test 2 Ltd",
      "establishment_address_line_2": "2 Test Lane",
      "establishment_address_line_3": "Testland"
    },
    "activities": {
      "customer_type": "End consumer",
      "business_type": "Any other retailer",
      "business_type_search_term": "Casino",
      "import_export_activities": "None",
      "water_supply": "Private",
      "business_other_details": "gdsgs",
      "opening_day_monday": true,
      "opening_day_tuesday": false,
      "opening_day_wednesday": false,
      "opening_day_thursday": false,
      "opening_day_friday": false,
      "opening_day_saturday": false,
      "opening_day_sunday": false,
      "opening_hours_monday": "ddfg"
    }
  },
  "declaration": {
    "feedback1": true,
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 8015,
    "local_council": "Test Council",
    "local_council_notify_emails": [
      "LC0_fsatestemail.valid@gmail.com",
      "LC1_fsatestemail.valid@gmail.com"
    ],
    "local_council_email": "LC_fsatestemail.valid@gmail.com",
    "local_council_phone_number": "01234 123 456"
  },
  "status": {
    "tascomi": {
      "time": "3/9/2020, 22:18:03",
      "complete": false
    }
  }
});

db.cachedRegistrations.insertOne(     {
  "fsa-rn": "0004-EMAILS-FAILEDNOTIFICATIONS1",
  "reg_submission_date": "2020-02-14",
  "establishment": {
    "establishment_details": {
      "establishment_trading_name": "Failed notifications 1",
      "establishment_primary_number": "09999 999999",
      "establishment_secondary_number": "",
      "establishment_email": "EE_fsatestemail.valid@gmail.com",
      "establishment_opening_date": "2001-01-02"
    },
    "operator": {
      "operator_first_name": "Roger",
      "operator_last_name": "Beaney",
      "operator_postcode": "SO15 7HH",
      "operator_town": "Southampton",
      "operator_address_line_1": "Test 1 Ltd",
      "operator_address_line_2": "1 Test Lane",
      "operator_address_line_3": "Testland",
      "operator_primary_number": "01234 567890",
      "operator_secondary_number": "",
      "operator_email": "FBO_fsatestemail.valid@gmail.com",
      "operator_type": "Sole trader"
    },
    "premise": {
      "establishment_postcode": "SO15 7HH",
      "establishment_town": "Southampton",
      "establishment_type": "Mobile or moveable premises",
      "establishment_address_line_1": "Test 2 Ltd",
      "establishment_address_line_2": "2 Test Lane",
      "establishment_address_line_3": "Testland"
    },
    "activities": {
      "customer_type": "End consumer",
      "business_type": "Any other retailer",
      "business_type_search_term": "Casino",
      "import_export_activities": "None",
      "water_supply": "Private",
      "business_other_details": "gdsgs",
      "opening_day_monday": true,
      "opening_day_tuesday": false,
      "opening_day_wednesday": false,
      "opening_day_thursday": false,
      "opening_day_friday": false,
      "opening_day_saturday": false,
      "opening_day_sunday": false,
      "opening_hours_monday": "ddfg"
    }
  },
  "declaration": {
    "feedback1": true,
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 8015,
    "local_council": "Test Council",
    "local_council_notify_emails": [
      "LC0_fsatestemail.valid@gmail.com",
      "LC1_fsatestemail.valid@gmail.com"
    ],
    "local_council_email": "LC_fsatestemail.valid@gmail.com",
    "local_council_phone_number": "01234 123 456"
  },
  "status": {
    "notifications": [
      {
        "time": "1/9/2020, 22:18:05",
        "sent": false,
        "type": "LC",
        "address": "LC0_fsatestemail.valid@gmail.com"
      },
      {
        "time": "1/9/2020, 22:18:05",
        "sent": false,
        "type": "FBO",
        "address": "LC0_fsatestemail.valid@gmail.com"
      }
    ]
  }
});

db.cachedRegistrations.insertOne(     {
  "fsa-rn": "0004-EMAILS-FAILEDNOTIFICATIONS2",
  "reg_submission_date": "2020-02-14",
  "establishment": {
    "establishment_details": {
      "establishment_trading_name": "Failed notifications 2",
      "establishment_primary_number": "09999 999999",
      "establishment_secondary_number": "",
      "establishment_email": "EE_fsatestemail.valid@gmail.com",
      "establishment_opening_date": "2001-01-02"
    },
    "operator": {
      "operator_first_name": "Jimmy",
      "operator_last_name": "Beaney",
      "operator_postcode": "SO15 8JH",
      "operator_town": "Southampton",
      "operator_address_line_1": "Test 1 Ltd",
      "operator_address_line_2": "1 Test Lane",
      "operator_address_line_3": "Testland",
      "operator_primary_number": "01234 567890",
      "operator_secondary_number": "",
      "operator_email": "FBO_fsatestemail.valid@gmail.com",
      "operator_type": "Sole trader"
    },
    "premise": {
      "establishment_postcode": "SO15 7HH",
      "establishment_town": "Southampton",
      "establishment_type": "Mobile or moveable premises",
      "establishment_address_line_1": "Test 2 Ltd",
      "establishment_address_line_2": "2 Test Lane",
      "establishment_address_line_3": "Testland"
    },
    "activities": {
      "customer_type": "End consumer",
      "business_type": "Any other retailer",
      "business_type_search_term": "Casino",
      "import_export_activities": "None",
      "water_supply": "Private",
      "business_other_details": "gdsgs",
      "opening_day_monday": true,
      "opening_day_tuesday": false,
      "opening_day_wednesday": false,
      "opening_day_thursday": false,
      "opening_day_friday": false,
      "opening_day_saturday": false,
      "opening_day_sunday": false,
      "opening_hours_monday": "ddfg"
    }
  },
  "declaration": {
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 8015,
    "local_council": "Test Council",
    "local_council_notify_emails": [
      "LC0_fsatestemail.valid@gmail.com",
      "LC1_fsatestemail.valid@gmail.com"
    ],
    "local_council_email": "LC_fsatestemail.valid@gmail.com",
    "local_council_phone_number": "01234 123 456"
  },
  "status": {
    "notifications": [

    ]
  }
});


db.cachedRegistrations.insertOne(   {
  "fsa-rn": "0004-EMAILS-NOSTATUS",
  "reg_submission_date": "2020-02-22",
  "establishment": {
    "establishment_details": {
      "establishment_trading_name": "Recent registration 999",
      "establishment_primary_number": "01234 456789",
      "establishment_secondary_number": "",
      "establishment_email": "EE_fsatestemail.valid@gmail.com",
      "establishment_opening_date": "2001-01-22"
    },
    "operator": {
      "operator_first_name": "Simon",
      "operator_last_name": "Smith",
      "operator_postcode": "BH77 6HH",
      "operator_town": "Bournemouth",
      "operator_address_line_1": "Sunny Sands burger bar",
      "operator_address_line_2": "Sandbanks beach",
      "operator_address_line_3": "Bournemouth",
      "operator_primary_number": "01788 333445",
      "operator_secondary_number": "",
      "operator_email": "FBO_fsatestemail.valid@gmail.com",
      "operator_type": "Sole trader"
    },
    "premise": {
      "establishment_postcode": "BH12 2FF",
      "establishment_town": "Bournemouth",
      "establishment_type": "Mobile or moveable premises",
      "establishment_address_line_1": "Sunny sands burger bar",
      "establishment_address_line_2": "Sandbanks beach",
      "establishment_address_line_3": "Bournemouth"
    },
    "activities": {
      "customer_type": "End consumer",
      "business_type": "Any other retailer",
      "business_type_search_term": "Casino",
      "import_export_activities": "None",
      "water_supply": "Private",
      "business_other_details": "gdsgs",
      "opening_day_monday": true,
      "opening_day_tuesday": false,
      "opening_day_wednesday": false,
      "opening_day_thursday": false,
      "opening_day_friday": false,
      "opening_day_saturday": false,
      "opening_day_sunday": false,
      "opening_hours_monday": "ddfg"
    }
  },
  "declaration": {
    "feedback1": true,
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 8015,
    "local_council": "Test Council",
    "local_council_notify_emails": [
      "LC0_fsatestemail.valid@gmail.com",
      "LC1_fsatestemail.valid@gmail.com"
    ],
    "local_council_email": "LC_fsatestemail.valid@gmail.com",
    "local_council_phone_number": "01234 123 456"
  },
  "status": {
  }
});
db.cachedRegistrations.insertOne(   {

  "fsa-rn": "0004-EMAILS-FAILEDNOTIFICATIONS3",
  "reg_submission_date": "2020-02-09",
  "establishment": {
    "establishment_details": {
      "establishment_trading_name": "Failed notifications 3",
      "establishment_primary_number": "01234 456789",
      "establishment_secondary_number": "",
      "establishment_email": "EE_fsatestemail.valid@gmail.com",
      "establishment_opening_date": "2001-01-01"
    },
    "operator": {
      "operator_first_name": "Sharon",
      "operator_last_name": "Healey",
      "operator_postcode": "NR14 7PZ",
      "operator_town": "Norwich",
      "operator_address_line_1": "Test 1 Ltd",
      "operator_address_line_2": "1 Test Lane",
      "operator_address_line_3": "Testland",
      "operator_primary_number": "01234 567890",
      "operator_secondary_number": "",
      "operator_email": "FBO_fsatestemail.valid@gmail.com",
      "operator_type": "Sole trader"
    },
    "premise": {
      "establishment_postcode": "NR14 7PZ",
      "establishment_town": "Norwich",
      "establishment_type": "Mobile or moveable premises",
      "establishment_address_line_1": "Test 2 Ltd",
      "establishment_address_line_2": "2 Test Lane",
      "establishment_address_line_3": "Testland"
    },
    "activities": {
      "customer_type": "End consumer",
      "business_type": "Any other retailer",
      "business_type_search_term": "Casino",
      "import_export_activities": "None",
      "water_supply": "Private",
      "business_other_details": "gdsgs",
      "opening_day_monday": true,
      "opening_day_tuesday": false,
      "opening_day_wednesday": false,
      "opening_day_thursday": false,
      "opening_day_friday": false,
      "opening_day_saturday": false,
      "opening_day_sunday": false,
      "opening_hours_monday": "ddfg"
    }
  },
  "declaration": {
    "feedback1": true,
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 8015,
    "local_council": "Test Council",
    "local_council_notify_emails": [
      "LC0_fsatestemail.valid@gmail.com",
      "LC1_fsatestemail.valid@gmail.com"
    ],
    "local_council_email": "LC_fsatestemail.valid@gmail.com",
    "local_council_phone_number": "01234 123 456"
  },
  "status": {
    "notifications": [
      {
        "time": "1/9/2020, 22:18:05",
        "sent": false,
        "type": "LC",
        "address": "LC0_fsatestemail.valid@gmail.com"
      },
      {
        "time": "1/9/2020, 22:18:05",
        "sent": false,
        "type": "FBO",
        "address": "LC0_fsatestemail.valid@gmail.com"
      }
    ],
    "registration": {
      "time": "2/9/2020, 22:18:03",
      "complete": false
    },
    "tascomi": {
      "time": "3/9/2020, 22:18:03",
      "complete": false
    }
  }
});

db.cachedRegistrations.insertOne( {
  "fsa-rn": "0004-EMAILS-NOFAILEDSTATUSES",
  "reg_submission_date": "2020-02-15",
  "establishment": {
    "establishment_details": {
      "establishment_trading_name": "Its all good ltd",
      "establishment_primary_number": "01677 089987",
      "establishment_secondary_number": "",
      "establishment_email": "EE_fsatestemail.valid@gmail.com",
      "establishment_opening_date": "2001-01-14"
    },
    "operator": {
      "operator_first_name": "All",
      "operator_last_name": "Good",
      "operator_postcode": "SO16 4DD",
      "operator_town": "Southampton",
      "operator_address_line_1": "All good Ltd",
      "operator_address_line_2": "1 All Good Road",
      "operator_address_line_3": "Southampton",
      "operator_primary_number": "07888 766566",
      "operator_secondary_number": "",
      "operator_email": "FBO_fsatestemail.valid@gmail.com",
      "contact_representative_email": "FBO_fsatestemail.valid@gmail.com",
      "operator_type": "Sole trader"
    },
    "premise": {
      "establishment_postcode": "SO16 4DD",
      "establishment_town": "Southampton",
      "establishment_type": "Mobile or moveable premises",
      "establishment_address_line_1": "All good Ltd Premises",
      "establishment_address_line_2": "444 Happy Lane",
      "establishment_address_line_3": "Happyland"
    },
    "activities": {
      "customer_type": "End consumer",
      "business_type": "Any other retailer",
      "business_type_search_term": "Casino",
      "import_export_activities": "None",
      "water_supply": "Private",
      "business_other_details": "gdsgs",
      "opening_day_monday": true,
      "opening_day_tuesday": false,
      "opening_day_wednesday": false,
      "opening_day_thursday": false,
      "opening_day_friday": false,
      "opening_day_saturday": false,
      "opening_day_sunday": false,
      "opening_hours_monday": "ddfg"
    }
  },
  "declaration": {
    "feedback1": true,
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 8015,
    "local_council": "Test Council",
    "local_council_notify_emails": [
      "LC0_fsatestemail.valid@gmail.com",
      "LC1_fsatestemail.valid@gmail.com"
    ],
    "local_council_email": "LC_fsatestemail.valid@gmail.com",
    "local_council_phone_number": "01234 123 456"
  },
  "status": {
    "notifications": [
      {
        "time": "2/9/2020, 22:18:05",
        "sent": true,
        "type": "LC",
        "address": "LC0_fsatestemail.valid@gmail.com"
      },
      {
        "time": "2/9/2020, 22:18:05",
        "sent": true,
        "type": "LC",
        "address": "LC1_fsatestemail.valid@gmail.com"
      },
      {
        "time": "2/9/2020, 22:18:06",
        "sent": true,
        "type": "FBO",
        "address": "fdgdfgdgdf@fhghfghfhf.con"
      },
      {
        "time": "2/9/2020, 22:18:06",
        "sent": true,
        "type": "FBO_FB",
        "address": "fdgdfgdgdf@fhghfghfhf.con"
      },
      {
        "time": "2/9/2020, 22:18:06",
        "sent": true,
        "type": "FD_FB",
        "address": "fdgdfgdgdf@fhghfghfhf.con"
      }
    ],
    "tascomi": {
      "time": "3/9/2020, 22:18:03",
      "complete": true
    }
  }
});

db.cachedRegistrations.insertOne(  {
  "fsa-rn": "0101-FAILED-REG1",
  "reg_submission_date": "2020-02-09",
  "establishment": {
    "establishment_details": {
      "establishment_trading_name": "Failed Registration 1",
      "establishment_primary_number": "01234 456789",
      "establishment_secondary_number": "",
      "establishment_email": "EE_fsatestemail.valid@gmail.com",
      "establishment_opening_date": "2001-01-01"
    },
    "operator": {
      "operator_first_name": "Jimbo",
      "operator_last_name": "Healey",
      "operator_postcode": "NR14 7PZ",
      "operator_town": "Norwich",
      "operator_address_line_1": "Test 1 Ltd",
      "operator_address_line_2": "1 Test Lane",
      "operator_address_line_3": "Testland",
      "operator_primary_number": "01234 567890",
      "operator_secondary_number": "",
      "operator_email": "FBO_fsatestemail.valid@gmail.com",
      "operator_type": "Sole trader"
    },
    "premise": {
      "establishment_postcode": "NR14 7PZ",
      "establishment_town": "Norwich",
      "establishment_type": "Mobile or moveable premises",
      "establishment_address_line_1": "Test 2 Ltd",
      "establishment_address_line_2": "2 Test Lane",
      "establishment_address_line_3": "Testland"
    },
    "activities": {
      "customer_type": "End consumer",
      "business_type": "Any other retailer",
      "business_type_search_term": "Casino",
      "import_export_activities": "None",
      "water_supply": "Private",
      "business_other_details": "gdsgs",
      "opening_day_monday": true,
      "opening_day_tuesday": false,
      "opening_day_wednesday": false,
      "opening_day_thursday": false,
      "opening_day_friday": false,
      "opening_day_saturday": false,
      "opening_day_sunday": false,
      "opening_hours_monday": "ddfg"
    }
  },
  "declaration": {
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 8015,
    "local_council": "Test Council",
    "local_council_notify_emails": [
      "LC0_fsatestemail.valid@gmail.com"
    ],
    "local_council_email": "LC_fsatestemail.valid@gmail.com",
    "local_council_phone_number": "01234 123 456"
  },
  "status": {
    "registration": {
      "time": "2/9/2020, 22:18:03",
      "complete": false
    }
  }
});

db.cachedRegistrations.insertOne(  {
  "fsa-rn": "0101-FAILED-REG2",
  "reg_submission_date": "2020-02-09",
  "establishment": {
    "establishment_details": {
      "establishment_trading_name": "Failed registration 2",
      "establishment_primary_number": "01234 456789",
      "establishment_secondary_number": "",
      "establishment_email": "EE_fsatestemail.valid@gmail.com",
      "establishment_opening_date": "2001-01-01"
    },
    "operator": {
      "operator_first_name": "Sammy",
      "operator_last_name": "Healey",
      "operator_postcode": "NR14 7PZ",
      "operator_town": "Norwich",
      "operator_address_line_1": "Test 1 Ltd",
      "operator_address_line_2": "1 Test Lane",
      "operator_address_line_3": "Testland",
      "operator_primary_number": "01234 567890",
      "operator_secondary_number": "",
      "operator_email": "FBO_fsatestemail.valid@gmail.com",
      "operator_type": "Sole trader"
    },
    "premise": {
      "establishment_postcode": "NR14 7PZ",
      "establishment_town": "Norwich",
      "establishment_type": "Mobile or moveable premises",
      "establishment_address_line_1": "Test 2 Ltd",
      "establishment_address_line_2": "2 Test Lane",
      "establishment_address_line_3": "Testland"
    },
    "activities": {
      "customer_type": "End consumer",
      "business_type": "Any other retailer",
      "business_type_search_term": "Casino",
      "import_export_activities": "None",
      "water_supply": "Private",
      "business_other_details": "gdsgs",
      "opening_day_monday": true,
      "opening_day_tuesday": false,
      "opening_day_wednesday": false,
      "opening_day_thursday": false,
      "opening_day_friday": false,
      "opening_day_saturday": false,
      "opening_day_sunday": false,
      "opening_hours_monday": "ddfg"
    }
  },
  "declaration": {
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 8015,
    "local_council": "Test Council",
    "local_council_notify_emails": [
      "LC0_fsatestemail.valid@gmail.com"
    ],
    "local_council_email": "LC_fsatestemail.valid@gmail.com",
    "local_council_phone_number": "01234 123 456"
  },
  "status": {
    "registration": {
      "time": "2/9/2020, 22:18:03",
      "complete": false
    }
  }
});

db.cachedRegistrations.insertOne(  {
  "fsa-rn": "0101-FAILED-REG3",
  "reg_submission_date": "2020-02-09",
  "establishment": {
    "establishment_details": {
      "establishment_trading_name": "Failed registration 3",
      "establishment_primary_number": "01234 456789",
      "establishment_secondary_number": "",
      "establishment_email": "EE_fsatestemail.valid@gmail.com",
      "establishment_opening_date": "2001-01-01"
    },
    "operator": {
      "operator_first_name": "Sammy",
      "operator_last_name": "Healey",
      "operator_postcode": "NR14 7PZ",
      "operator_town": "Norwich",
      "operator_address_line_1": "Test 1 Ltd",
      "operator_address_line_2": "1 Test Lane",
      "operator_address_line_3": "Testland",
      "operator_primary_number": "01234 567890",
      "operator_secondary_number": "",
      "operator_email": "FBO_fsatestemail.valid@gmail.com",
      "operator_type": "Sole trader"
    },
    "premise": {
      "establishment_postcode": "NR14 7PZ",
      "establishment_town": "Norwich",
      "establishment_type": "Mobile or moveable premises",
      "establishment_address_line_1": "Test 2 Ltd",
      "establishment_address_line_2": "2 Test Lane",
      "establishment_address_line_3": "Testland"
    },
    "activities": {
      "customer_type": "End consumer",
      "business_type": "Any other retailer",
      "business_type_search_term": "Casino",
      "import_export_activities": "None",
      "water_supply": "Private",
      "business_other_details": "gdsgs",
      "opening_day_monday": true,
      "opening_day_tuesday": false,
      "opening_day_wednesday": false,
      "opening_day_thursday": false,
      "opening_day_friday": false,
      "opening_day_saturday": false,
      "opening_day_sunday": false,
      "opening_hours_monday": "ddfg"
    }
  },
  "declaration": {
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 8015,
    "local_council": "Test Council",
    "local_council_notify_emails": [
      "LC0_fsatestemail.valid@gmail.com"
    ],
    "local_council_email": "LC_fsatestemail.valid@gmail.com",
    "local_council_phone_number": "01234 123 456"
  },
  "status": {
    "registration": {
      "time": "2/9/2020, 22:18:03",
      "complete": false
    }
  }
});


db.cachedRegistrations.insertOne(  {
  "fsa-rn": "0101-NULL-NOTI-STAT",
  "reg_submission_date": "2020-02-09",
  "establishment": {
    "establishment_details": {
      "establishment_trading_name": "Failed registration 4",
      "establishment_primary_number": "01234 456789",
      "establishment_secondary_number": "",
      "establishment_email": "EE_fsatestemail.valid@gmail.com",
      "establishment_opening_date": "2001-01-01"
    },
    "operator": {
      "operator_first_name": "John",
      "operator_last_name": "Healey",
      "operator_postcode": "NR14 7PZ",
      "operator_town": "Norwich",
      "operator_address_line_1": "Test 1 Ltd",
      "operator_address_line_2": "1 Test Lane",
      "operator_address_line_3": "Testland",
      "operator_primary_number": "01234 567890",
      "operator_secondary_number": "",
      "operator_email": "FBO_fsatestemail.valid@gmail.com",
      "operator_type": "Sole trader"
    },
    "premise": {
      "establishment_postcode": "NR14 7PZ",
      "establishment_town": "Norwich",
      "establishment_type": "Mobile or moveable premises",
      "establishment_address_line_1": "Test 2 Ltd",
      "establishment_address_line_2": "2 Test Lane",
      "establishment_address_line_3": "Testland"
    },
    "activities": {
      "customer_type": "End consumer",
      "business_type": "Any other retailer",
      "business_type_search_term": "Casino",
      "import_export_activities": "None",
      "water_supply": "Private",
      "business_other_details": "gdsgs",
      "opening_day_monday": true,
      "opening_day_tuesday": false,
      "opening_day_wednesday": false,
      "opening_day_thursday": false,
      "opening_day_friday": false,
      "opening_day_saturday": false,
      "opening_day_sunday": false,
      "opening_hours_monday": "ddfg"
    }
  },
  "declaration": {
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 8015,
    "local_council": "Test Council",
    "local_council_notify_emails": [
      "LC0_fsatestemail.valid@gmail.com"
    ],
    "local_council_email": "LC_fsatestemail.valid@gmail.com",
    "local_council_phone_number": "01234 123 456"
  },
  "status": {
    "notifications": null,
    "registration": {
      "time": "2/9/2020, 22:18:03",
      "complete": false
    }
  }
});

db.cachedRegistrations.insertOne({
      "_id" : ObjectId("5dca72519315020042c8e345"),
      "fsa-rn" : "K9ZLSA-78MVM6-W4LPF1",
      "reg_submission_date" : "2019-11-12",
      "establishment" : {
        "establishment_details" : {
          "establishment_trading_name" : "sssssssssobdsdsdsdsd",
          "establishment_primary_number" : "345435345435",
          "establishment_secondary_number" : "",
          "establishment_email" : "fsatestemail.valid@gmail.com",
          "establishment_opening_date" : "2001-01-01"
        },
        "operator" : {
          "operator_first_name" : "fgvcvbnhn",
          "operator_last_name" : "dfdgf",
          "operator_postcode" : "BA1 5LR",
          "operator_first_line" : "Eveleigh House",
          "operator_street" : "Grove Street",
          "operator_town" : "Bath",
          "operator_primary_number" : "345435345435",
          "operator_secondary_number" : "",
          "operator_email" : "fsatestemail.valid@gmail.com",
          "operator_type" : "Sole trader",
          "operator_uprn" : "100121172378"
        },
        "premise" : {
          "establishment_postcode" : "BA1 6QE",
          "establishment_first_line" : "7A",
          "establishment_street" : "Lambridge Mews",
          "establishment_town" : "Bath",
          "establishment_type" : "Mobile or moveable premises",
          "establishment_uprn" : "10001141070"
        },
        "activities" : {
          "customer_type" : "End consumer",
          "business_type" : "Abattoir",
          "import_export_activities" : "None",
          "water_supply" : "Private",
          "business_other_details" : "",
          "opening_day_monday" : true,
          "opening_day_tuesday" : true,
          "opening_day_wednesday" : false,
          "opening_day_thursday" : false,
          "opening_day_friday" : false,
          "opening_day_saturday" : false,
          "opening_day_sunday" : false,
          "opening_hours_monday" : "fsdfds",
          "opening_hours_tuesday" : "sdfs"
        }
      },
      "metadata" : {
        "declaration1" : "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
        "declaration2" : "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
        "declaration3" : "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment.",
        "feedback1" : "I agree to be contacted to provide feedback to help develop this service"
      },
      "hygieneAndStandards" : {
        "code" : 8015,
        "local_council" : "City of Cardiff Council",
        "local_council_notify_emails" : [
          "fsatestemail.valid@gmail.com"
        ],
        "local_council_email" : "fsatestemail.valid@gmail.com",
        "local_council_phone_number" : "0300 123 6696"
      },
      "status" : {
        "registration" : {
          "time" : "4/2/2020, 11:34:11",
          "complete" : true
        },
        "notifications" : [
          {
            "time" : "11/12/2019, 08:50:27",
            "sent" : true,
            "type" : "LC",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "11/12/2019, 08:50:27",
            "sent" : true,
            "type" : "FBO",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "11/12/2019, 08:50:27",
            "sent" : true,
            "type" : "FBO_FB",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "11/12/2019, 08:50:28",
            "sent" : true,
            "type" : "FD_FB",
            "address" : "fsatestemail.valid@gmail.com"
          }
        ],
        "tascomi" : {
          "time" : "4/2/2020, 11:24:48",
          "complete" : true
        }
      }
    }
);

db.cachedRegistrations.insertOne({
      "_id" : ObjectId("5dca867622ebd10042c84caa"),
      "fsa-rn" : "A1D3X4-6FCTGC-5WEJQQ",
      "reg_submission_date" : "2019-11-12",
      "establishment" : {
        "establishment_details" : {
          "establishment_trading_name" : "pfffffff",
          "establishment_primary_number" : "01235645987",
          "establishment_secondary_number" : "",
          "establishment_email" : "fsatestemail.valid@gmail.com",
          "establishment_opening_date" : "2020-1-1"
        },
        "operator" : {
          "operator_first_name" : "Luke",
          "operator_last_name" : "Vincent",
          "operator_postcode" : "SN14 0TN",
          "operator_first_line" : "6",
          "operator_street" : "Moss Mead",
          "operator_dependent_locality" : "Locality",
          "operator_town" : "Chippenham",
          "operator_primary_number" : "01235645987",
          "operator_secondary_number" : "",
          "operator_email" : "fsatestemail.valid@gmail.com",
          "operator_type" : "Sole trader",
          "operator_uprn" : "17448021"
        },
        "premise" : {
          "establishment_postcode" : "SN14 0TN",
          "establishment_first_line" : "6",
          "establishment_street" : "Moss Mead",
          "establishment_town" : "Chippenham",
          "establishment_dependent_locality" : "Locality",
          "establishment_type" : "Mobile or moveable premises",
          "establishment_uprn" : "17448021"
        },
        "activities" : {
          "customer_type" : "End consumer",
          "business_type" : "Restaurant, cafe, canteen or fast food",
          "business_type_search_term" : "Cafeteria",
          "import_export_activities" : "None",
          "water_supply" : "Public and private",
          "business_other_details" : "",
          "opening_day_monday" : true,
          "opening_day_tuesday" : false,
          "opening_day_wednesday" : false,
          "opening_day_thursday" : false,
          "opening_day_friday" : false,
          "opening_day_saturday" : false,
          "opening_day_sunday" : false,
          "opening_hours_monday" : "786"
        }
      },
      "hygieneAndStandards" : {
        "code" : 8015,
        "local_council" : "City of Cardiff Council",
        "local_council_notify_emails" : [
          "fsatestemail.valid@gmail.com"
        ],
        "local_council_email" : "fsatestemail.valid@gmail.com",
        "local_council_phone_number" : "0300 123 6696"
      },
      "status" : {
        "registration" : {
          "time" : "4/2/2020, 11:34:11",
          "complete" : true
        },
        "notifications" : [
          {
            "time" : "4/2/2020, 11:24:43",
            "sent" : true,
            "type" : "LC",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "4/2/2020, 11:24:43",
            "sent" : true,
            "type" : "FBO",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "4/2/2020, 11:24:44",
            "sent" : true,
            "type" : "FBO_FB",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "4/2/2020, 11:24:44",
            "sent" : true,
            "type" : "FD_FB",
            "address" : "fsatestemail.valid@gmail.com"
          }
        ],
        "tascomi" : {
          "time" : "4/2/2020, 11:24:50",
          "complete" : true
        }
      },
      "declaration" : {
        "declaration1" : "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
        "declaration2" : "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
        "declaration3" : "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment.",
        "feedback1" : "I agree for this"
      }
    }
);
db.cachedRegistrations.insertOne({
      "_id" : ObjectId("5dcaa65fa24e940041d684bd"),
      "fsa-rn" : "E9S2RC-ED2PJ2-BXY9BA",
      "reg_submission_date" : "2019-11-12",
      "establishment" : {
        "establishment_details" : {
          "establishment_trading_name" : "cafecafe",
          "establishment_primary_number" : "9999999999999999",
          "establishment_secondary_number" : "",
          "establishment_email" : "fsatestemail.valid@gmail.com",
          "establishment_opening_date" : "2000-01-01"
        },
        "operator" : {
          "operator_first_name" : "qqqqqqqqqqqqqqqqq",
          "operator_last_name" : "aaaaaaaaaaaaaa",
          "operator_postcode" : "CB6 1PH",
          "operator_first_line" : "7A",
          "operator_street" : "Main Street",
          "operator_town" : "Ely",
          "operator_dependent_locality" : "Littleport",
          "operator_primary_number" : "9999999999999999",
          "operator_secondary_number" : "",
          "operator_email" : "fsatestemail.valid@gmail.com",
          "operator_type" : "Sole trader",
          "operator_uprn" : "100090049305"
        },
        "premise" : {
          "establishment_postcode" : "BA1 6EW",
          "establishment_first_line" : "7",
          "establishment_street" : "Eastbourne Avenue",
          "establishment_town" : "Bath",
          "establishment_type" : "Mobile or moveable premises",
          "establishment_uprn" : "10001124901"
        },
        "activities" : {
          "customer_type" : "End consumer",
          "business_type" : "Restaurant, cafe, canteen or fast food",
          "business_type_search_term" : "Cafeteria",
          "import_export_activities" : "None",
          "water_supply" : "Private",
          "business_other_details" : "",
          "opening_day_monday" : true,
          "opening_day_tuesday" : false,
          "opening_day_wednesday" : false,
          "opening_day_thursday" : false,
          "opening_day_friday" : false,
          "opening_day_saturday" : false,
          "opening_day_sunday" : false,
          "opening_hours_monday" : "9999999999999"
        }
      },
      "metadata" : {
        "declaration1" : "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
        "declaration2" : "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
        "declaration3" : "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment.",
        "feedback1" : "I agree to be contacted to provide feedback to help develop this service"
      },
      "hygieneAndStandards" : {
        "code" : 8015,
        "local_council" : "City of Cardiff Council",
        "local_council_notify_emails" : [
          "fsatestemail.valid@gmail.com"
        ],
        "local_council_email" : "fsatestemail.valid@gmail.com",
        "local_council_phone_number" : "0300 123 6696"
      },
      "status" : {
        "registration" : {
          "time" : "4/2/2020, 11:34:12",
          "complete" : true
        },
        "notifications" : [
          {
            "time" : "11/12/2019, 12:32:33",
            "sent" : false,
            "type" : "LC",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "11/12/2019, 12:32:33",
            "sent" : true,
            "type" : "FBO",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "11/12/2019, 12:32:33",
            "sent" : true,
            "type" : "FBO_FB",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "11/12/2019, 12:32:34",
            "sent" : true,
            "type" : "FD_FB",
            "address" : "fsatestemail.valid@gmail.com"
          }
        ],
        "tascomi" : {
          "time" : "11/12/2019, 12:32:33",
          "complete" : true
        }
      }
    }
);
db.cachedRegistrations.insertOne({
      "_id" : ObjectId("5dcaa787a24e940041d684be"),
      "fsa-rn" : "CTA4VV-BR5N6H-SS73C2",
      "reg_submission_date" : "2019-11-12",
      "establishment" : {
        "establishment_details" : {
          "establishment_trading_name" : "nonono",
          "establishment_primary_number" : "666666666666",
          "establishment_secondary_number" : "",
          "establishment_email" : "fsatestemail.valid@gmail.com",
          "establishment_opening_date" : "2001-01-01"
        },
        "operator" : {
          "operator_first_name" : "ppppppppppp",
          "operator_last_name" : "llllllllllllll",
          "operator_postcode" : "BA1 6EF",
          "operator_first_line" : "1A",
          "operator_street" : "Arundel Road",
          "operator_town" : "Bath",
          "operator_primary_number" : "666666666666",
          "operator_secondary_number" : "",
          "operator_email" : "fsatestemail.valid@gmail.com",
          "operator_type" : "Sole trader",
          "operator_uprn" : "10023109760"
        },
        "premise" : {
          "establishment_postcode" : "CB6 1PH",
          "establishment_first_line" : "The Barn",
          "establishment_street" : "Main Street",
          "establishment_town" : "Littleport",
          "establishment_type" : "Mobile or moveable premises",
          "establishment_uprn" : "10002598122"
        },
        "activities" : {
          "customer_type" : "End consumer",
          "business_type" : "Restaurant, cafe, canteen or fast food",
          "business_type_search_term" : "Cafeteria",
          "import_export_activities" : "None",
          "water_supply" : "Private",
          "business_other_details" : "",
          "opening_day_monday" : true,
          "opening_day_tuesday" : false,
          "opening_day_wednesday" : false,
          "opening_day_thursday" : false,
          "opening_day_friday" : false,
          "opening_day_saturday" : false,
          "opening_day_sunday" : false,
          "opening_hours_monday" : "vbnvbnv"
        }
      },
      "metadata" : {
        "declaration1" : "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
        "declaration2" : "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
        "declaration3" : "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment.",
        "feedback1" : "I agree to be contacted to provide feedback to help develop this service"
      },
      "hygieneAndStandards" : {
        "code" : 8015,
        "local_council" : "City of Cardiff Council",
        "local_council_notify_emails" : [
          "fsatestemail.valid@gmail.com"
        ],
        "local_council_email" : "fsatestemail.valid@gmail.com",
        "local_council_phone_number" : "0300 123 6696"
      },
      "status" : {
        "registration" : {
          "time" : "4/2/2020, 11:34:13",
          "complete" : true
        },
        "notifications" : [
          {
            "time" : "11/12/2019, 12:37:28",
            "sent" : false,
            "type" : "LC",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "11/12/2019, 12:37:28",
            "sent" : true,
            "type" : "FBO",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "11/12/2019, 12:37:28",
            "sent" : true,
            "type" : "FBO_FB",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "11/12/2019, 12:37:28",
            "sent" : true,
            "type" : "FD_FB",
            "address" : "fsatestemail.valid@gmail.com"
          }
        ],
        "tascomi" : {
          "time" : "11/12/2019, 12:32:33",
          "complete" : true
        }
      }
    }
);
db.cachedRegistrations.insertOne({
      "_id" : ObjectId("5dcaa838a24e940041d684bf"),
      "fsa-rn" : "PT07JA-VTZ577-ZDMAVZ",
      "reg_submission_date" : "2019-11-12",
      "establishment" : {
        "establishment_details" : {
          "establishment_trading_name" : "Partners Co",
          "establishment_primary_number" : "01111111111111",
          "establishment_secondary_number" : "",
          "establishment_email" : "fsatestemail.valid@gmail.com",
          "establishment_opening_date" : "2019-12-22"
        },
        "operator" : {
          "operator_first_name" : "Test",
          "operator_last_name" : "Trader",
          "operator_postcode" : "DN10 6XB",
          "operator_first_line" : "Carrilon UK",
          "operator_primary_number" : "01111111111111",
          "operator_secondary_number" : "",
          "operator_email" : "fsatestemail.valid@gmail.com",
          "operator_type" : "Sole trader",
          "operator_uprn" : "10023263307"
        },
        "premise" : {
          "establishment_postcode" : "DN10 6XB",
          "establishment_first_line" : "Carrilon UK",
          "establishment_type" : "Mobile or moveable premises",
          "establishment_uprn" : "10023263307"
        },
        "activities" : {
          "customer_type" : "End consumer",
          "business_type" : "Fruit and vegetable product manufacturer",
          "business_type_search_term" : "Jam",
          "import_export_activities" : "None",
          "water_supply" : "Public and private",
          "business_other_details" : "",
          "opening_day_monday" : false,
          "opening_day_tuesday" : true,
          "opening_day_wednesday" : false,
          "opening_day_thursday" : false,
          "opening_day_friday" : false,
          "opening_day_saturday" : false,
          "opening_day_sunday" : false,
          "opening_hours_tuesday" : "10:00 - 12:00"
        }
      },
      "metadata" : {
        "declaration1" : "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
        "declaration2" : "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
        "declaration3" : "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
      },
      "hygieneAndStandards" : {
        "code" : 4003,
        "local_council" : "City of London",
        "local_council_notify_emails" : [
          "fsatestemail.valid@gmail.com"
        ],
        "local_council_email" : "fsatestemail.valid@gmail.com",
        "local_council_phone_number" : "01234 567890"
      },
      "status" : {
        "registration" : {
          "time" : "11/12/2019, 12:40:26",
          "complete" : true
        },
        "notifications" : [
          {
            "time" : "11/12/2019, 12:37:28",
            "sent" : true,
            "type" : "LC",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "11/12/2019, 12:37:28",
            "sent" : true,
            "type" : "FBO",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "11/12/2019, 12:37:28",
            "sent" : true,
            "type" : "FBO_FB",
            "address" : "fsatestemail.valid@gmail.com"
          },
          {
            "time" : "11/12/2019, 12:37:28",
            "sent" : true,
            "type" : "FD_FB",
            "address" : "fsatestemail.valid@gmail.com"
          }
        ],
        "tascomi" : {
          "time" : "11/12/2019, 12:32:33",
          "complete" : true
        }
      }
    }
);