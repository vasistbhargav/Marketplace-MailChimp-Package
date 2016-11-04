module.exports.do = function(req, res) {
    res.status(200).send({
  "package": "MailChimp",
  "tagline": "MailChimp Package",
  "description": "The MailChimp Package can be used to build real time application based on the MailChimp platform.",
  "image": "https://pbs.twimg.com/profile_images/709825689181147136/SdVd6iit.jpg",
  "repo": "https://github.com/RapidSoftwareSolutions/marketplace-MailChimp-package",
  "accounts": {
    "domain": "mailchimp.com",
    "credentials": [
      "apiKey"
    ]
  },
  "blocks": [
    {
      "name": "getAutomationsList",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "fields",
          "type": "String",
          "info": "A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation."
        },
        {
          "name": "excludeFields",
          "type": "String",
          "info": "A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getAutomationInWorkflow",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "The unique id for the Automation workflow."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "pauseAllEmails",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "The unique id for the Automation workflow."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "startAllEmails",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "The unique id for the Automation workflow."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getAutomatedEmailsList",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "The unique id for the Automation workflow."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getWorkflowEmail",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "The unique id for the Automation workflow."
        },
        {
          "name": "emailId",
          "type": "String",
          "info": "The unique id for the Automation workflow email."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "pauseAutomatedEmail",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "The unique id for the Automation workflow."
        },
        {
          "name": "emailId",
          "type": "String",
          "info": "The unique id for the Automation workflow email."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "startAutomatedEmail",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "The unique id for the Automation workflow."
        },
        {
          "name": "emailId",
          "type": "String",
          "info": "The unique id for the Automation workflow email."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "addWorkflowEmailSubscriber",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "The unique id for the Automation workflow."
        },
        {
          "name": "emailId",
          "type": "String",
          "info": "The unique id for the Automation workflow email."
        },
        {
          "name": "emailAddress",
          "type": "String",
          "info": "The unique id for the Automation workflow email."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getEmailSubscriber",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "The unique id for the Automation workflow."
        },
        {
          "name": "emailId",
          "type": "String",
          "info": "The unique id for the Automation workflow email."
        },
        {
          "name": "emailAddress",
          "type": "String",
          "info": "The unique id for the Automation workflow email."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "removeWorkflowSubscriber",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "The unique id for the Automation workflow."
        },
        {
          "name": "emailAddress",
          "type": "String",
          "info": "The list member’s email address."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "createCampaignFolder",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "name",
          "type": "String",
          "info": "Name to associate with the folder."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getCampaignFolders",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getCampaignFolder",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "folderId",
          "type": "String",
          "info": "The api key obtained from MailChimp."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "updateCampaignFolder",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "folderId",
          "type": "String",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "name",
          "type": "String",
          "info": "Name to associate with the folder."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "deleteCampaignFolder",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "folderId",
          "type": "String",
          "info": "The api key obtained from MailChimp."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "createCampaign",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "type",
          "type": "String",
          "info": "There are four types of campaigns you can create in MailChimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead."
        },
        {
          "name": "recipientsListId",
          "type": "String",
          "info": "The unique list id."
        },
        {
          "name": "subjectLine",
          "type": "String",
          "info": "The subject line for the campaign."
        },
        {
          "name": "title",
          "type": "String",
          "info": "The title of the campaign."
        },
        {
          "name": "fromName",
          "type": "String",
          "info": "The ‘from’ name on the campaign (not an email address)."
        },
        {
          "name": "replyTo",
          "type": "String",
          "info": "The reply-to email address for the campaign."
        },
        {
          "name": "useConversation",
          "type": "String",
          "info": "The reply-to email address for the campaign."
        },
        {
          "name": "toName",
          "type": "String",
          "info": "The campaign’s custom ‘To’ name."
        },
        {
          "name": "folderId",
          "type": "String",
          "info": "If the campaign is listed in a folder, the id for that folder."
        },
        {
          "name": "authenticate",
          "type": "String",
          "info": "Whether MailChimp authenticated the campaign. Defaults to true."
        },
        {
          "name": "autoFooter",
          "type": "String",
          "info": "Automatically append MailChimp’s default footer to the campaign."
        },
        {
          "name": "inlineCss",
          "type": "String",
          "info": "Automatically inline the CSS included with the campaign content."
        },
        {
          "name": "autoTweet",
          "type": "String",
          "info": "Automatically tweet a link to the campaign archive page when the campaign is sent."
        },
        {
          "name": "autoFbPost",
          "type": "String",
          "info": "An comma separated string of Facebook page ids to auto-post to."
        },
        {
          "name": "fbComments",
          "type": "String",
          "info": "Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`."
        },
        {
          "name": "variateSettingsWinnerCriteria",
          "type": "String",
          "info": "The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_critera is ignored. For Multivariate Campaigns with ‘manual’ as the winner_citeria, the winner must be chosen in the MailChimp web application. Possible Values: `opens`, `clicks`, `manual`, `total_revenue`"
        },
        {
          "name": "variateSettingsWaitTime",
          "type": "Number",
          "info": "The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes."
        },
        {
          "name": "variateSettingsTestSize",
          "type": "Number",
          "info": "The percentage of recipients to send the test combinations to, must be a value between 10 and 100."
        },
        {
          "name": "variateSettingsSubjectLines",
          "type": "String",
          "info": "The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used."
        },
        {
          "name": "variateSettingsSendTimes",
          "type": "String",
          "info": "The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored."
        },
        {
          "name": "variateSettingsFromNames",
          "type": "String",
          "info": "The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used."
        },
        {
          "name": "replyToAddresses",
          "type": "String",
          "info": "The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used."
        },
        {
          "name": "trackingOpens",
          "type": "String",
          "info": "Whether to track opens. Defaults to true. Cannot be set to false for variate campaigns."
        },
        {
          "name": "trackingHtmlClicks",
          "type": "String",
          "info": "Whether to track clicks in the HTML version of the campaign. Defaults to true. Cannot be set to false for variate campaigns."
        },
        {
          "name": "trackingTextClicks",
          "type": "String",
          "info": "Whether to track clicks in the plain-text version of the campaign. Defaults to true. Cannot be set to false for variate campaigns."
        },
        {
          "name": "trackingGoalTracking",
          "type": "String",
          "info": "Whether to enable Goal tracking."
        },
        {
          "name": "trackingEcomm360",
          "type": "String",
          "info": "Whether to enable eCommerce360 tracking."
        },
        {
          "name": "trackingGoogleAnalytics",
          "type": "String",
          "info": "The custom slug for Google Analytics tracking (max of 50 bytes)."
        },
        {
          "name": "trackingClicktale ",
          "type": "String",
          "info": "The custom slug for ClickTale tracking (max of 50 bytes)."
        },
        {
          "name": "trackingSalesforceCampaign ",
          "type": "String",
          "info": "Create a campaign in a connected Salesforce account."
        },
        {
          "name": "trackingSalesforceNotes ",
          "type": "String",
          "info": "Update contact notes for a campaign based on subscriber email addresses."
        },
        {
          "name": "trackingHighriseCampaign",
          "type": "String",
          "info": "Create a campaign in a connected Highrise account."
        },
        {
          "name": "trackingHighriseNotes",
          "type": "String",
          "info": "Update contact notes for a campaign based on subscriber email addresses."
        },
        {
          "name": "trackingCapsuleNotes",
          "type": "String",
          "info": "Update contact notes for a campaign based on subscriber email addresses."
        },
        {
          "name": "rssOptsFeedUrl",
          "type": "String",
          "info": "The URL for the RSS feed."
        },
        {
          "name": "rssOptsFrequency",
          "type": "String",
          "info": "The frequency of the RSS Campaign."
        },
        {
          "name": "rssOptsScheduleHour",
          "type": "String",
          "info": "The hour to send the campaign in local time. Acceptable hours are 0-23. For example, ‘4’ would be 4am in your account’s default time zone."
        },
        {
          "name": "rssOptsScheduleDailySendSunday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Sundays."
        },
        {
          "name": "rssOptsScheduleDailySendMonday",
          "type": "String",
          "info": "TSends the daily RSS Campaign on Mondays."
        },
        {
          "name": "rssOptsScheduleDailySendTuesday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Tuesdays."
        },
        {
          "name": "rssOptsScheduleDailySendWednesday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Wednesdays."
        },
        {
          "name": "rssOptsScheduleDailySendThursday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Thursdays."
        },
        {
          "name": "rssOptsScheduleDailySendFriday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Fridays."
        },
        {
          "name": "rssOptsScheduleDailySendSaturday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Saturdays."
        },
        {
          "name": "rssOptsScheduleWeeklySendDay",
          "type": "String",
          "info": "The day of the week to send a weekly RSS Campaign."
        },
        {
          "name": "rssOptsScheduleMonthlySendDate",
          "type": "String",
          "info": "The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where ‘0’ is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February."
        },
        {
          "name": "rssOptsLastSent",
          "type": "String",
          "info": "The date the campaign was last sent."
        },
        {
          "name": "rssOptsConstrainRssImg",
          "type": "String",
          "info": "Whether to add CSS to images in the RSS feed to constrain their width in campaigns."
        },
        {
          "name": "socialCardImageUrl",
          "type": "String",
          "info": "The url for the header image for the card."
        },
        {
          "name": "socialCardDescription",
          "type": "String",
          "info": "A short summary of the campaign to display."
        },
        {
          "name": "socialCardTitle",
          "type": "String",
          "info": "The title for the card. Typically the subject line of the campaign."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getCampaigns",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "type",
          "type": "String",
          "info": "The campaign type."
        },
        {
          "name": "status",
          "type": "String",
          "info": "The status of the campaign."
        },
        {
          "name": "beforeSendTime",
          "type": "String",
          "info": "Restrict the response to campaigns sent before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00."
        },
        {
          "name": "sinceSendTime",
          "type": "String",
          "info": "Restrict the response to campaigns sent after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00."
        },
        {
          "name": "beforeCreateTime",
          "type": "String",
          "info": "Restrict the response to campaigns created before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00."
        },
        {
          "name": "sinceCreateTime",
          "type": "String",
          "info": "Restrict the response to campaigns created after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00."
        },
        {
          "name": "listId",
          "type": "String",
          "info": "The unique id for the list."
        },
        {
          "name": "folderId",
          "type": "String",
          "info": "The unique folder id."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getCampaign",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The campaign id."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "updateCampaign",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "recipientsListId",
          "type": "String",
          "info": "The unique list id."
        },
        {
          "name": "subjectLine",
          "type": "String",
          "info": "The subject line for the campaign."
        },
        {
          "name": "title",
          "type": "String",
          "info": "The title of the campaign."
        },
        {
          "name": "fromName",
          "type": "String",
          "info": "The ‘from’ name on the campaign (not an email address)."
        },
        {
          "name": "replyTo",
          "type": "String",
          "info": "The reply-to email address for the campaign."
        },
        {
          "name": "useConversation",
          "type": "String",
          "info": "The reply-to email address for the campaign."
        },
        {
          "name": "toName",
          "type": "String",
          "info": "The campaign’s custom ‘To’ name."
        },
        {
          "name": "folderId",
          "type": "String",
          "info": "If the campaign is listed in a folder, the id for that folder."
        },
        {
          "name": "authenticate",
          "type": "String",
          "info": "Whether MailChimp authenticated the campaign. Defaults to true."
        },
        {
          "name": "autoFooter",
          "type": "String",
          "info": "Automatically append MailChimp’s default footer to the campaign."
        },
        {
          "name": "inlineCss",
          "type": "String",
          "info": "Automatically inline the CSS included with the campaign content."
        },
        {
          "name": "autoTweet",
          "type": "String",
          "info": "Automatically tweet a link to the campaign archive page when the campaign is sent."
        },
        {
          "name": "autoFbPost",
          "type": "String",
          "info": "An String of Facebook page ids to auto-post to."
        },
        {
          "name": "fbComments",
          "type": "String",
          "info": "Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`."
        },
        {
          "name": "variateSettingsWinnerCriteria",
          "type": "String",
          "info": "The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_critera is ignored. For Multivariate Campaigns with ‘manual’ as the winner_citeria, the winner must be chosen in the MailChimp web application. Possible Values: `opens`, `clicks`, `manual`, `total_revenue`"
        },
        {
          "name": "variateSettingsWaitTime",
          "type": "Number",
          "info": "The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes."
        },
        {
          "name": "variateSettingsTestSize",
          "type": "Number",
          "info": "The percentage of recipients to send the test combinations to, must be a value between 10 and 100."
        },
        {
          "name": "variateSettingsSubjectLines",
          "type": "String",
          "info": "The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used."
        },
        {
          "name": "variateSettingsSendTimes",
          "type": "String",
          "info": "The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored."
        },
        {
          "name": "variateSettingsFromNames",
          "type": "String",
          "info": "The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used."
        },
        {
          "name": "replyToAddresses",
          "type": "String",
          "info": "The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used."
        },
        {
          "name": "trackingOpens",
          "type": "String",
          "info": "Whether to track opens. Defaults to true. Cannot be set to false for variate campaigns."
        },
        {
          "name": "trackingHtmlClicks",
          "type": "String",
          "info": "Whether to track clicks in the HTML version of the campaign. Defaults to true. Cannot be set to false for variate campaigns."
        },
        {
          "name": "trackingTextClicks",
          "type": "String",
          "info": "Whether to track clicks in the plain-text version of the campaign. Defaults to true. Cannot be set to false for variate campaigns."
        },
        {
          "name": "trackingGoalTracking",
          "type": "String",
          "info": "Whether to enable Goal tracking."
        },
        {
          "name": "trackingEcomm360",
          "type": "String",
          "info": "Whether to enable eCommerce360 tracking."
        },
        {
          "name": "trackingGoogleAnalytics",
          "type": "String",
          "info": "The custom slug for Google Analytics tracking (max of 50 bytes)."
        },
        {
          "name": "trackingClicktale ",
          "type": "String",
          "info": "The custom slug for ClickTale tracking (max of 50 bytes)."
        },
        {
          "name": "trackingSalesforceCampaign ",
          "type": "String",
          "info": "Create a campaign in a connected Salesforce account."
        },
        {
          "name": "trackingSalesforceNotes ",
          "type": "String",
          "info": "Update contact notes for a campaign based on subscriber email addresses."
        },
        {
          "name": "trackingHighriseCampaign",
          "type": "String",
          "info": "Create a campaign in a connected Highrise account."
        },
        {
          "name": "trackingHighriseNotes",
          "type": "String",
          "info": "Update contact notes for a campaign based on subscriber email addresses."
        },
        {
          "name": "trackingCapsuleNotes",
          "type": "String",
          "info": "Update contact notes for a campaign based on subscriber email addresses."
        },
        {
          "name": "rssOptsFeedUrl",
          "type": "String",
          "info": "The URL for the RSS feed."
        },
        {
          "name": "rssOptsFrequency",
          "type": "String",
          "info": "The frequency of the RSS Campaign."
        },
        {
          "name": "rssOptsScheduleHour",
          "type": "String",
          "info": "The hour to send the campaign in local time. Acceptable hours are 0-23. For example, ‘4’ would be 4am in your account’s default time zone."
        },
        {
          "name": "rssOptsScheduleDailySendSunday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Sundays."
        },
        {
          "name": "rssOptsScheduleDailySendMonday",
          "type": "String",
          "info": "TSends the daily RSS Campaign on Mondays."
        },
        {
          "name": "rssOptsScheduleDailySendTuesday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Tuesdays."
        },
        {
          "name": "rssOptsScheduleDailySendWednesday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Wednesdays."
        },
        {
          "name": "rssOptsScheduleDailySendThursday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Thursdays."
        },
        {
          "name": "rssOptsScheduleDailySendFriday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Fridays."
        },
        {
          "name": "rssOptsScheduleDailySendSaturday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Saturdays."
        },
        {
          "name": "rssOptsScheduleWeeklySendDay",
          "type": "String",
          "info": "The day of the week to send a weekly RSS Campaign."
        },
        {
          "name": "rssOptsScheduleMonthlySendDate",
          "type": "String",
          "info": "The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where ‘0’ is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February."
        },
        {
          "name": "rssOptsLastSent",
          "type": "String",
          "info": "The date the campaign was last sent."
        },
        {
          "name": "rssOptsConstrainRssImg",
          "type": "String",
          "info": "Whether to add CSS to images in the RSS feed to constrain their width in campaigns."
        },
        {
          "name": "socialCardImageUrl",
          "type": "String",
          "info": "The url for the header image for the card."
        },
        {
          "name": "socialCardDescription",
          "type": "String",
          "info": "A short summary of the campaign to display."
        },
        {
          "name": "socialCardTitle",
          "type": "String",
          "info": "The title for the card. Typically the subject line of the campaign."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "deleteCampaign",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The unique id for the campaign."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "cancelCampaign",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The unique id for the campaign."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "replicateCampaign",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The unique id for the campaign."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "resumeRSSCampaign",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The unique id for the campaign."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "scheduleCampaign",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The unique id for the campaign."
        },
        {
          "name": "scheduleTime",
          "type": "String",
          "info": "The date and time in UTC to schedule the campaign for delivery. Campaigns may only be scheduled to send on the quarter-hour (:00, :15, :30, :45)."
        },
        {
          "name": "timewarp",
          "type": "String",
          "info": "Choose whether the campaign should use Timewarp when sending. Campaigns scheduled with Timewarp are localized based on the recipients’ time zones. For example, a Timewarp campaign with a schedule_time of 13:00 will be sent to each recipient at 1:00pm in their local time. Cannot be set to true for campaigns using Batch Delivery."
        },
        {
          "name": "batchDeliveryBatchDelay",
          "type": "String",
          "info": "The delay, in minutes, between batches."
        },
        {
          "name": "batchDeliveryBatchCount",
          "type": "String",
          "info": "The number of batches for the campaign send."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "sendCampaign",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The unique id for the campaign."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "sendTestEmail",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The unique id for the campaign."
        },
        {
          "name": "testEmails",
          "type": "String",
          "info": "The unique id for the campaign."
        },
        {
          "name": "sendType",
          "type": "String",
          "info": "The unique id for the campaign."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "unscheduleCampaign",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The unique id for the campaign."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getCampaignContent",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The unique id for the campaign."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getSendChecklist",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The unique id for the campaign."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getConversationsList",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getConversation",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "conversationId",
          "type": "String",
          "info": "The unique id for the campaign."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "sendConversationMessage",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "conversationId",
          "type": "String",
          "info": "The unique id for the conversation."
        },
        {
          "name": "fromEmail",
          "type": "String",
          "info": "A label representing the email of the sender of this message"
        },
        {
          "name": "subject",
          "type": "String",
          "info": "The subject of this message"
        },
        {
          "name": "message",
          "type": "String",
          "info": "The plain-text content of the message"
        },
        {
          "name": "read",
          "type": "String",
          "info": "Whether this message has been marked as read"
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getConversationMessages",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "conversationId",
          "type": "String",
          "info": "The unique id for the campaign."
        },
        {
          "name": "isRead",
          "type": "String",
          "info": "Whether a conversation message has been marked as read."
        },
        {
          "name": "beforeTimestamp",
          "type": "String",
          "info": "Restrict the response to messages created before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00."
        },
        {
          "name": "sinceTimestamp",
          "type": "String",
          "info": "Restrict the response to messages created after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getConversationMessage",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "conversationId",
          "type": "String",
          "info": "The unique id for the campaign."
        },
        {
          "name": "messageId ",
          "type": "String",
          "info": "Whether a conversation message has been marked as read."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "createList",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "name",
          "type": "String",
          "info": "The name of the list."
        },
        {
          "name": "contactCompany",
          "type": "String",
          "info": "The company name for the list."
        },
        {
          "name": "contactAddress1",
          "type": "String",
          "info": "The street address for the list contact."
        },
        {
          "name": "contactAddress2",
          "type": "String",
          "info": "The street address for the list contact."
        },
        {
          "name": "contactCity",
          "type": "String",
          "info": "The city for the list contact."
        },
        {
          "name": "contactState",
          "type": "String",
          "info": "The state for the list contact."
        },
        {
          "name": "contactZip",
          "type": "String",
          "info": "The postal or zip code for the list contact."
        },
        {
          "name": "contactCountry",
          "type": "String",
          "info": "A two-character ISO3166 country code. Defaults to US if invalid."
        },
        {
          "name": "contactPhone",
          "type": "String",
          "info": "The phone number for the list contact."
        },
        {
          "name": "permissionReminder",
          "type": "String",
          "info": "The permission reminder for the list."
        },
        {
          "name": "useArchiveBar",
          "type": "String",
          "info": "Whether campaigns for this list use the Archive Bar in archives by default."
        },
        {
          "name": "campaignDefaultsFromName",
          "type": "String",
          "info": "The default from name for campaigns sent to this list."
        },
        {
          "name": "campaignDefaultsFromEmail",
          "type": "String",
          "info": "The default from email for campaigns sent to this list."
        },
        {
          "name": "campaignDefaultsSubject",
          "type": "String",
          "info": "The default subject line for campaigns sent to this list."
        },
        {
          "name": "campaignDefaultsLanguage",
          "type": "String",
          "info": "The default language for this lists’s forms."
        },
        {
          "name": "notifyOnSubscribe",
          "type": "String",
          "info": "The email address to send subscribe notifications to."
        },
        {
          "name": "notifyOnUnsubscribe",
          "type": "String",
          "info": "The email address to send unsubscribe notifications to."
        },
        {
          "name": "emailTypeOption",
          "type": "String",
          "info": "Whether the list supports multiple formats for emails. When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup."
        },
        {
          "name": "visibility",
          "type": "String",
          "info": "Whether this list is public or private."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "batchAddMembersToList",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "listId",
          "type": "String",
          "info": "The unique id for the list."
        },
        {
          "name": "members",
          "type": "JSON",
          "info": ""
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getLists",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "beforeDateCreated",
          "type": "String",
          "info": "Restrict response to lists created before the set date."
        },
        {
          "name": "sinceDateCreated",
          "type": "String",
          "info": "Restrict results to lists created after the set date."
        },
        {
          "name": "beforeCampaignLastSent",
          "type": "String",
          "info": "Restrict results to lists created before the last campaign send date."
        },
        {
          "name": "sinceCampaignLastSent",
          "type": "String",
          "info": "Restrict results to lists created after the last campaign send date."
        },
        {
          "name": "email",
          "type": "String",
          "info": "Restrict results to lists that include a specific subscriber’s email address."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getList",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "listId",
          "type": "String",
          "info": "The unique id for the list."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "deleteList",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "listId",
          "type": "String",
          "info": "The unique id for the list."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "updateList",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "listId",
          "type": "String",
          "info": ""
        },
        {
          "name": "name",
          "type": "String",
          "info": "The name of the list."
        },
        {
          "name": "contactCompany",
          "type": "String",
          "info": "The company name for the list."
        },
        {
          "name": "contactAddress1",
          "type": "String",
          "info": "The street address for the list contact."
        },
        {
          "name": "contactAddress2",
          "type": "String",
          "info": "The street address for the list contact."
        },
        {
          "name": "contactCity",
          "type": "String",
          "info": "The city for the list contact."
        },
        {
          "name": "contactState",
          "type": "String",
          "info": "The state for the list contact."
        },
        {
          "name": "contactZip",
          "type": "String",
          "info": "The postal or zip code for the list contact."
        },
        {
          "name": "contactCountry",
          "type": "String",
          "info": "A two-character ISO3166 country code. Defaults to US if invalid."
        },
        {
          "name": "contactPhone",
          "type": "String",
          "info": "The phone number for the list contact."
        },
        {
          "name": "permissionReminder",
          "type": "String",
          "info": "The permission reminder for the list."
        },
        {
          "name": "useArchiveBar",
          "type": "String",
          "info": "Whether campaigns for this list use the Archive Bar in archives by default."
        },
        {
          "name": "campaignDefaultsFromName",
          "type": "String",
          "info": "The default from name for campaigns sent to this list."
        },
        {
          "name": "campaignDefaultsFromEmail",
          "type": "String",
          "info": "The default from email for campaigns sent to this list."
        },
        {
          "name": "campaignDefaultsSubject",
          "type": "String",
          "info": "The default subject line for campaigns sent to this list."
        },
        {
          "name": "campaignDefaultsLanguage",
          "type": "String",
          "info": "The default language for this lists’s forms."
        },
        {
          "name": "notifyOnSubscribe",
          "type": "String",
          "info": "The email address to send subscribe notifications to."
        },
        {
          "name": "notifyOnUnsubscribe",
          "type": "String",
          "info": "The email address to send unsubscribe notifications to."
        },
        {
          "name": "emailTypeOption",
          "type": "String",
          "info": "Whether the list supports multiple formats for emails. When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup."
        },
        {
          "name": "visibility",
          "type": "String",
          "info": "Whether this list is public or private."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getAbuseReportsList",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "listId",
          "type": "String",
          "info": "The unique id for the list."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getAbuseReport",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "listId",
          "type": "String",
          "info": "The unique id for the list."
        },
        {
          "name": "reportId",
          "type": "String",
          "info": "The unique id for the report."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getListActivity",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "listId",
          "type": "String",
          "info": "The unique id for the list."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getTopEmailClients",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "listId",
          "type": "String",
          "info": "The unique id for the list."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "setCampaignContentHTML",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The unique id for the campaign."
        },
        {
          "name": "plainText",
          "type": "String",
          "info": "Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically."
        },
        {
          "name": "html",
          "type": "String",
          "info": "The raw HTML for the campaign."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "setCampaignContentFromURL",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The unique id for the campaign."
        },
        {
          "name": "plainText",
          "type": "String",
          "info": "Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically."
        },
        {
          "name": "url",
          "type": "String",
          "info": "When importing a campaign, the URL where the HTML lives."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "setCampaignContentFromTemplate",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "The api key obtained from MailChimp."
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "The unique id for the campaign."
        },
        {
          "name": "plainText",
          "type": "String",
          "info": "Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically."
        },
        {
          "name": "templateId",
          "type": "String",
          "info": "The id of the template to use."
        },
        {
          "name": "templateSections",
          "type": "String",
          "info": "Content for the sections of the template. Each key should be the unique mc:edit area name from the template."
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    }
  ]
})
};
