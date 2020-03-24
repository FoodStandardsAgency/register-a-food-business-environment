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
  "metadata": {
    "feedback1": true,
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 1001,
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
  "metadata": {
    "feedback1": true,
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 1001,
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
  "metadata": {
    "feedback1": true,
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 1001,
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
  "metadata": {
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 1001,
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
  "metadata": {
    "feedback1": true,
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 1001,
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
  "metadata": {
    "feedback1": true,
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 1001,
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
  "metadata": {
    "feedback1": true,
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 1001,
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
  "metadata": {
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 1001,
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
  "metadata": {
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 1001,
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
  "metadata": {
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 1001,
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
  "fsa-rn": "0101-FAILED-REG4",
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
  "metadata": {
    "declaration1": "I declare that the information I have given on this form is correct and complete to the best of my knowledge and belief.",
    "declaration2": "I, or the operator, will notify food authorities of any significant changes to the business activity, including closure, within 28 days of the change happening.",
    "declaration3": "I, or the operator, understands the operator is legally responsible for the safety and authenticity of the food being produced or served at this establishment."
  },
  "hygieneAndStandards": {
    "code": 1001,
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