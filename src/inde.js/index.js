// GoPal Alexa App
// Uses Alexa Skills Kit, NodeJS, and Google's General Transit Feed Specification 
// Author: Caroline George
// Made for the d{} innovation hackaton May 2017 


//Moved to external file
var routes = {

}

var transportations = {
    "bus": {
        "mode": "bus",
        "description": "bus routes for the Toronto area."
    },
    "train": {
        "mode": "train",
        "description":"Information about the trains running on GoTransit",  
    }
}

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Removed skill's application ID to avoid unauthorized access and undesired 
         * changes in configurations.
         */

     if (event.session.application.applicationId !== "reducated for public upload") {
         context.fail("Invalid Application ID");
      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {

    var intent = intentRequest.intent
    var intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if(intentName == "GoPalIntent") {
        handleTransportationResponse(intent, session, callback)
    } else if (intentName == "AMAZON.YesIntent") {
        handleYesResponse(intent, session, callback)
    }
    else if (intentName == "AMAZON.NoIntent") {
        handleNoResponse(intent, session, callback)
    }
    else if (intentName == "AMAZON.HelpIntent") {
        handleGetHelpRequest(intent, session, callback)
    }
    else if (intentName == "AMAZON.StopIntent") {
        handleFinishSessionRequest(intent, session,callback)
    }
    else if (intentName == "AMAZON.CancelIntent") {
        handleFinishSessionRequest(intent, session,callback)
    }
    else {
        throw "Invalid intent"
    }


/*        GoPalIntent                         //Main Home
                                        //Can access 
    TrainIntent                         
    TrainHelpIntent
    DefaultStationIntent
    NoDefaultStationIntent
    DefaulttationDSetIntent
    CheckingTrainStationsIntent
    TrainStationsIntent
    UpcomingTrainTimesIntent
    TrainStationForId
    YesForAnotherStop
    CheckingTrainStops
    YesForAnotherStop*/
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {

}

// ------- Skill specific logic -------

function getWelcomeResponse(callback) {
    var speechOutput = "Hi! I am the GoPal." +
    "I can give you bus or train information for the GTA region." +
    + "Would you like to know train or bus information?"

    var reprompt = "Would you like to know train or bus information"

    var header = "GoPal: Your voice guide to the Go Pal"

    var shouldEndSession = false;

    var sessionAttributes = {
        "speechOutput" :  speechOutput,
        "repromptText" :  reprompt
    }

    callback(sessionAttributes, buildSpeechletResponse(header, speechOutput, reprompt, shouldEndSession))
}

function handleTransportationResponse(intent, session,callback) {
    var transportation = intent.slots.Transportation.value.toLowerCase();

    if(!transportations[transportation]) {
        var speechOutput = "I'm sorry. We don't offer those services for that type of travel. Would you like to know train or bus information?"
        var repromptText = "Would you like to know train or bus information?"
        var header = "Non Existing transport"
    } else {
        var travel_mode = transportations[transportation].mode

        if (travel_mode == "bus") {
            var speechOutput = "I'm sorry. Currently, the bus information is still under progress. Stay tuned for updates. Do you want to know information about the Go Trians?"
            var repromptText = "We don't offer that specified service. Do you want to know about Go Trians?"
            var header = "Bus Info"
        }
        // (travel_mode == "train")
        else {
            var speechOutput = "Accessing GO Train info. Would you like to know about the train routes, stop times, or stops?"
            var repromptText = "Would you like to know about the GoTrains routes, stop times, or stops?"
            var header = "Train Info"
        }
    }

    var shouldEndSession = false;

    callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession))
}

function handleYesResponse(intent, session,callback) {
    var speechOutput = "Great! Would you like to know about train information or bus information ?"
    var repromptText = speechOutput
    var shouldEndSession = false
     callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession))
}

function handleNoResponse(intent, session,callback) {
    handleFinishSessionRequest(intent,session,callback); 
}


function handleGetHelpRequest(intent, session, callback) {
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }
    var speechOutput = "I can give you information about the trains. Bus information is still work in progress. What would you like to know?"

    var repromptText = speechOutput

    var shouldEndSession = false

    callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession))
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "Thank you for using the Go Pal", "", true));
}


// ------- Helper functions to build responses for Alexa -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}