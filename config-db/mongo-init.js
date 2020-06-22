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

db.createCollection('lcConfig');
db.lcConfig.insertOne({
	"_id" : 8015,
	"local_council" : "Fakes council",
	"local_council_email" : "fakecouncil@test.com",
	"local_council_notify_emails" : [
		"LC1_fsatestemail.valid@gmail.com"
	],
	"local_council_phone_number" : "01234 456788",
	"local_council_url" : "bath",
	"country" : "england"
});

db.lcConfig.insertOne({
	"_id" : 4226,
	"local_council" : "Dorset County Council",
	"local_council_email" : "fsatestemail.valid@gmail.com",
	"local_council_notify_emails" : [
		"fsatestemail.valid@gmail.com"
	],
	"local_council_phone_number" : "123456789",
	"local_council_url" : "",
	"country" : "england",
	"auth" : {
		"url" : "https://fsa-pilot-enviro.tascomi.com/rest/v1/",
		"public_key" : "changeme",
		"private_key" : "changeme"
	}
});

db.lcConfig.insertOne({
	"_id" : 4221,
	"local_council" : "West Dorset District Council",
	"local_council_email" : "fsatestemail.valid@gmail.com",
	"separate_standards_council" : 4226,
	"local_council_notify_emails" : [
		"LC1_fsatestemail.valid@gmail.com"
	],
	"local_council_phone_number" : "02388 899766",
	"local_council_url" : "west-dorset",
	"country" : "england",
	"auth": {
		"public_key":"changeme",
		"private_key":"changeme",
		"url":"https://fsa-pilot-enviro.tascomi.com/rest/v1/"
	}
});

db.lcConfig.insertOne({
	"_id" : 4012,
	"local_council" : "Fakes cardiff council",
	"local_council_email" : "fakecouncilcardiff@test.com",
	"local_council_notify_emails" : [
		"LC1_fsatestemail.validcardiff@gmail.com"
	],
	"local_council_phone_number" : "01233 333445",
	"local_council_url" : "cardiff",
	"country" : "england"
});

db.lcConfig.insertOne({
	"_id" : 4013,
	"local_council" : "Fakes vale of G council",
	"local_council_email" : "fakecouncilvog@test.com",
	"local_council_notify_emails" : [
		"LC1_fsatestemail.validvog@gmail.com"
	],
	"local_council_phone_number" : "01233 333445",
	"local_council_url" : "the-vale-of-glamorgan",
	"country" : "england"
});
db.lcConfig.insertOne({
	"_id" : 6008,
	"local_council" : "Mid & East Antrim Borough Council",
	"local_council_email" : "fsatestemail.valid@gmail.com",
	"local_council_notify_emails" : [
		"fsatestemail.valid@gmail.com"
	],
	"local_council_phone_number" : "123456789",
	"local_council_url" : "mid-and-east-antrim",
	"country" : "northern-ireland",
});

db.createCollection('configVersion');
db.configVersion.insertOne({
		"_id" : "1.7.0",
		"notify_template_keys" : {
			"fbo_submission_complete" : "f29f4571-e0d2-45fb-bb33-aca1123fb76b",
			"lc_new_registration" : "9bea0a7d-50fe-40f7-898f-da8405f32796",
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
	}
);
db.configVersion.insertOne({
	"_id" : "1.6.0",
	"notify_template_keys" : {
		"fbo_submission_complete" : "integration-test",
		"lc_new_registration" : "integration-test",
		"fbo_feedback" : "integration-test",
		"fd_feedback" : "integration-test"
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

