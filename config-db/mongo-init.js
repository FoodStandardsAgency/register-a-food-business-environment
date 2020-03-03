db = db.getSiblingDB('register_a_food_business_status');
db.createUser({
  user: 'test-user',
  pwd: 'test-password',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});

db.createCollection('lcConfig');
db.lcConfig.insertOne({
	"_id" : 8015,
	"local_council" : "City of Cardiff Council",
	"local_council_email" : "FoodSafetyCardiff-SRSWales@valeofglamorgan.gov.uk",
	"local_council_notify_emails" : [
		"FoodSafetyCardiff-SRSWales@valeofglamorgan.gov.uk"
	],
	"local_council_phone_number" : "0300 123 6696",
	"local_council_url" : "cardiff",
	"country" : "wales"
});

db.createCollection('status');
db.status.insertOne({
	"_id" : "emailDistribution",
	"emailAddresses" : [
		"fsatestemail.valid@gmail.com"
	]
});
db.status.insertOne({
	"_id" : "backEndStatus",
	"submissionsReceived" : 0,
	"authenticationsPassed" : 0,
	"authenticationsBlocked" : 0,
	"fsaRnCallsSucceeded" : 0,
	"fsaRnCallsFailed" : 0,
	"mostRecentFsaRnCallSucceeded" : true,
	"tascomiCreateRegistrationCallsSucceeded" : 0,
	"tascomiCreateRegistrationCallsFailed" : 0,
	"mostRecentTascomiCreateRegistrationSucceeded" : true,
	"tascomiCreateRefnumberCallsSucceeded" : 0,
	"tascomiCreateRefnumberCallsFailed" : 0,
	"mostRecentTascomiCreateRefnumberSucceeded" : true,
	"storeRegistrationsInDbSucceeded" : 0,
	"storeRegistrationsInDbFailed" : 0,
	"mostRecentStoreRegistrationInDbSucceeded" : true,
	"storeRegistrationsInCacheSucceeded" : 0,
	"storeRegistrationsInCacheFailed" : 0,
	"mostRecentRegistrationInCacheSucceeded" : true,
	"getConfigFromDbSucceeded" : 0,
	"getConfigFromDbFailed" : 0,
	"mostRecentGetConfigFromDbSucceeded" : true,
	"emailNotificationsSucceeded" : 0,
	"emailNotificationsFailed" : 0,
	"mostRecentEmailNotificationSucceeded" : true,
	"endToEndRegistrationsSucceeded" : 0,
	"endToEndRegistrationsFailed" : 0,
	"mostRecentEndToEndRegistrationSucceeded" : true,
	"userRegistrationsSucceeded" : 0,
	"mostRecentUserRegistrationSucceeded" : true,
	"addNotificationToStatusFailed" : 0,
	"addNotificationToStatusSucceeded" : 0,
	"mostRecentUpdateNotificationOnSentSucceeded" : true,
	"updateNotificationOnSentFailed" : 0,
	"updateNotificationOnSentSucceeded" : 0,
	"mostRecentUpdateStatusInCacheSucceeded" : true,
	"updateStatusInCacheSucceeded" : 0,
	"updateStatusInCacheFailed" : 0,
	"mostRecentAddNotificationToStatusSucceeded" : true
});
db.status.insertOne({
	"_id" : "frontEndStatus",
	"registrationsStarted" : 0,
	"submissionsSucceeded" : 0,
	"submissionsFailed" : 0,
	"mostRecentSubmitSucceeded" : true,
	"addressLookupsSucceeded" : 0,
	"addressLookupsReturnedZero" : 0,
	"addressLookupsFailed" : 0,
	"mostRecentAddressLookupSucceeded" : true,
	"getPathConfigSucceeded" : 0,
	"getPathConfigFailed" : 0,
	"mostRecentGetPathConfigSucceeded" : true,
	"getLocalCouncilsSucceeded" : 0,
	"getLocalCouncilsFailed" : 0,
	"mostRecentGetLocalCouncilsSucceeded" : true,
	"getCouncilDataFailed" : 0,
	"getCouncilDataSucceeded" : 0,
	"mostRecentGetCouncilDataSucceeded" : true
});
	
	
db = db.getSiblingDB('register_a_food_business_config');
db.createUser({
  user: 'test-user',
  pwd: 'test-password',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});

db.createCollection('configVersion');
db.configVersion.insertOne({
	"_id" : "1.6.0",
	"notify_template_keys" : {
		"fbo_submission_complete" : "f4a85ab9-218f-4c2d-9170-d540313c4831",
		"lc_new_registration" : "943ca3e1-b730-47c6-b739-fec3c18d75ce",
		"fbo_feedback" : "6b3fc252-3436-4c15-9a37-caf9d70c79a3",
		"fd_feedback" : "890eedd7-99b6-43e8-9d91-e7e2d79c502e"
	},
	"future_delivery_email" : "fsatestemail.valid@gmail.com",
	"path" : {
		"/index" : {
			"on" : true,
			"switches" : {
			}
		},
		"/registration-role" : {
			"on" : true,
			"switches" : {
				"Sole trader" : {
					"/operator-name" : true,
					"/operator-contact-details" : true
				},
				"Partnership" : {
					"/partner-name" : true,
					"/main-partnership-contact" : true,
					"/operator-contact-details" : true
				},
				"Representative" : {
					"/operator-type" : true
				}
			}
		},
		"/operator-type" : {
			"on" : false,
			"switches" : {
				"A person" : {
					"/operator-name" : true,
					"/operator-contact-details" : true
				},
				"A company" : {
					"/operator-company-details" : true,
					"/contact-representative" : true
				},
				"A charity" : {
					"/operator-charity-details" : true,
					"/contact-representative" : true
				}
			}
		},
		"/operator-company-details" : {
			"on" : false,
			"switches" : {
			}
		},
		"/operator-charity-details" : {
			"on" : false,
			"switches" : {
			}
		},
		"/operator-name" : {
			"on" : false,
			"switches" : {
			}
		},
		"/partner-name" : {
			"on" : false,
			"switches" : {
			}
		},
		"/main-partnership-contact" : {
			"on" : false,
			"switches" : {
			}
		},
		"/operator-address" : {
			"on" : true,
			"switches" : {
			}
		},
		"/operator-address-select" : {
			"on" : true,
			"switches" : {
			}
		},
		"/operator-address-manual" : {
			"on" : false,
			"switches" : {
				"operator_address_line_1" : {
					"/operator-address-manual" : true
				}
			}
		},
		"/operator-contact-details" : {
			"on" : false,
			"switches" : {
			}
		},
		"/contact-representative" : {
			"on" : false,
			"switches" : {
			}
		},
		"/establishment-trading-name" : {
			"on" : true,
			"switches" : {
			}
		},
		"/establishment-address-type" : {
			"on" : true,
			"switches" : {
			}
		},
		"/establishment-address" : {
			"on" : true,
			"switches" : {
			}
		},
		"/establishment-address-select" : {
			"on" : true,
			"switches" : {
			}
		},
		"/establishment-address-manual" : {
			"on" : false,
			"switches" : {
				"establishment_address_line_1" : {
					"/establishment-address-manual" : true
				}
			}
		},
		"/establishment-contact-details" : {
			"on" : true,
			"switches" : {
			}
		},
		"/establishment-opening-status" : {
			"on" : true,
			"switches" : {
				"Establishment is already trading" : {
					"/establishment-opening-date-retroactive" : true
				},
				"Establishment is not trading yet" : {
					"/establishment-opening-date-proactive" : true
				}
			}
		},
		"/establishment-opening-date-proactive" : {
			"on" : false,
			"switches" : {
			}
		},
		"/establishment-opening-date-retroactive" : {
			"on" : false,
			"switches" : {
			}
		},
		"/opening-days-start" : {
			"on" : true,
			"switches" : {
				"Every day" : {
					"/opening-hours" : true
				},
				"Some days" : {
					"/opening-days-some" : true,
					"/opening-hours" : true
				},
				"Irregular days" : {
					"/opening-days-irregular" : true
				}
			}
		},
		"/opening-days-some" : {
			"on" : false,
			"switches" : {
			}
		},
		"/opening-days-irregular" : {
			"on" : false,
			"switches" : {
			}
		},
		"/opening-hours" : {
			"on" : false,
			"switches" : {
			}
		},
		"/customer-type" : {
			"on" : true,
			"switches" : {
			}
		},
		"/business-type" : {
			"on" : true,
			"switches" : {
			}
		},
		"/business-import-export" : {
			"on" : true,
			"switches" : {
			}
		},
		"/business-water-supply" : {
			"on" : true,
			"switches" : {
			}
		},
		"/business-other-details" : {
			"on" : true,
			"switches" : {
			}
		},
		"/registration-summary" : {
			"on" : true,
			"switches" : {
			}
		},
		"/declaration" : {
			"on" : true,
			"switches" : {
			}
		}
	}
});

