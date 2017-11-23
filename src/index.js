var settingDefault = "false"
var default_stop = ""

//Need to consider eastbound and westbound fml
var routes = {
    "lakeshore west eastbound": {
        "stationstops": "Aldershot, Burlington, Applyby, Bronte, Oakville, clarkson, port credit, long branch Mimico, Exhibition, and Union Station",
        "cancellations": "There are currently no delays for the Lakeshore West Eastbound"
    },
    "lakeshore west westbound": {
        "stationstops": "Union Station, exhibition, Mimico, Long Branch, Port Credit, clarkson, Oakville, Bronte, Applyby, Burlington, and Aldershot. ",
        "cancellations": "There are currently no delays for the Lakeshore West Westbound"
    },
    "lakeshore east eastbound": {
        "stationstops":  "Union Station, Danforth, Scarborough, Eglinton, guildwood, rouge hill, pickering, ajax, whitby, and oshawa",
        "cancellations": "There are currently no delays for the Lakeshore East Westbound"
    },
    "lakeshore east westbound": {
        "stationstops":  "Oshawa, Whitby, Ajax, Pickering, Rouge Hill, Guildwood,  Eglinton, Scarborough, Danforth, and Union Station",
        "cancellations": "There are currently no delays for the Lakeshore East Westbound"
    },
    "niagara falls eastbound": {
        "stationstops":  "Burlington, Appleby, Bronte, Oakville, Clarkson, Port Credit, Long Branch, Mimico, Exhibition, and union Station",
        "cancellations": "There are currently no delays for the Niagara Falls Eastbound",
    },
    "niagara falls westbound": {
        "stationstops": "Union Station, Exhibition, Mimico, Long Branch, Port Credit, Clarkson, Oakville, Bronte, Appleby, and Burlington",
        "cancellations": "There are currently no delays for the Niagara Falls Westbound",
    },
    "milton and oakville northbound": {
        "stationstops":  "Oakville, Clarkson, Port Credit, Long Branch, Mimico, Exhibition, and Union Station",
        "cancellations": "There are currently no delays for the Milton and Oakville Northbound",
    },
    "milton and oakville southbound": {
        "stationstops":  "Union Station, Exhibition, Mimico, Long Branch, Port Credit, Clarkson, Oakville",
        "cancellations": "There are currently no delays for the Milton and Oakville Southbound",
    },
    "port perry and whitby northbound": {
        "stationstops":  "union station, danforth, scarborough, eglinton, guildwood, rouge hill, pickering, ajax, whitby",
        "cancellations": "There are currently no delays for the Port Perry and Whitby Northbound",
    },
    "port perry and whitby southbound": {
        "stationstops":  "whitby, ajax, pickering, rouge hill, guildwood, eglinton, scarborough, danforth,  union station",
        "cancellations": "There are currently no delays for the Port Perry and Whitby Southbound",
    }
}


var stations = {
    "aldershot": {
        "name": "Aldershot Go", 
        "timeslots": {
            "lakeshore west eastbound": {
                "arrival_times": "three o one, three thirty one, four o one p.m. ",
            },
            "lakeshore west westbound": {
                "arrival_times": "four twenty one, four fifty one, five twenty one p.m. ",
            },
        },
        "cancelations":"There are currently no delays.",
        "parent_station": "aldershot go",
    },
    "burlington": {
        "name": "Burlington Go", 
        "timeslots": {
            "lakeshore west eastbound": {
                "arrival_times": "three o seven, three thirty seven, and four o seven p.m. ",
            },
            "lakeshore_west_westbound": {
                "arrival_times":  "four fourteen, four fourty four, five fourteen p.m. ",
            },
        },
        "cancelations": "There are currently no delays.",
        "parent_station": "milton_go",
    },
    "applyby": {
        "name": "Applyby Go", 
        "timeslots": {
            "lakeshore west eastbound": {
                "arrival_times": "three four teen, three fourty seven, and four four teen p.m. ",
            },
            "lakeshore_west_westbound": {
                "arrival_times": "four o seven, four thirty seven, five o seven p.m. ",
            },
        },
        "cancelations":"There are currently no delays.",
        "parent_station": "milton_go",
    },
    "bronte": {
        "name": "Bronte Go", 
        "timeslots": {
            "lakeshore west eastbound": {
                "arrival_times": "three twenty, three fifthy, and four twenty p.m. ",
            },
            "lakeshore west westbound": {
                "arrival_times": "three o clock, three thirty, four o clock. ",
            },
        },
        "cancelations":"There are currently no delays. ",
        "parent_station": "milton_go",
    },
    "oakville": {
        "name": "Oakville Go", 
        "timeslots": {
            "lakeshore west eastbound": {
                "arrival_times": "three twenty six, three fifthy six, and four twenty six p.m. ",
            },
            "lakeshore_west_westbound": {
                "arrival_times": "three twenty four, three fifthy four, and four twenty four p.m. ",
            },
        },
        "cancelations":"There are currently no delays. ",
        "parent_station": "milton_go",
    },
    "clarkson": {
        "name": "Port Credit Go", 
        "timeslots": {
            "lakeshore west eastbound": {
                "arrival_times": "three o four, three thirty four, and four o four p.m. ",
            },
            "lakeshore west westbound": {
                "arrival_times": "three sixteen, three fourty six, and four sixteen p.m. ",
            },
        },
        "cancelations":"There are currently no delays. ",
        "parent_station": "milton_go",
    },
    "port credit": {
        "name": "Port Credit Go", 
        "timeslots": {
            "lakeshore west eastbound": {
                "arrival_times": "three eleven, three fourty one, and four eleven p.m. ",
            },
            "lakeshore_west_westbound": {
                "arrival_times": "three ten, three fourty, and four ten p.m. ",
            },
        },
        "cancelations":"There are currently no delays. ",
        "parent_station": "milton_go",
    },
    "long branch": {
        "name": "Long Branch Go", 
        "timeslots": {
            "lakeshore west eastbound": {
                "arrival_times": "three sixteen, three fourty six, and four sixteen p.m. ",
            },
            "lakeshore_west_westbound": {
                "arrival_times": "three o four, three thirty four, and four o four p.m. ",
            },
        },
        "cancelations":"There are currently no delays. ",
        "parent_station": "milton_go",
    },
    "mimco": {
        "name": "Mimico Go", 
         "timeslots": {
            "lakeshore west eastbound": {
                "arrival_times": "two fifty four, three twenty four, and three fifthy four. ",
            },
            "lakeshore west westbound": {
                "arrival_times": "two fifty eight, three fifty eight, four twenty eight. ",
            },
        },
        "cancelations":"There are currently no delays. ",
        "parent_station": "milton_go", 
    },
    "exhibition": {
        "name": "Exhibition Go", 
         "timeslots": {
            "lakeshore west eastbound": {
                "arrival_times": "three o clock, three thirty, and four o clock p.m. ",
            },
            "lakeshore west westbound": {
                "arrival_times": "two fifthy, three twenty, and three fifty p.m. ",
            },
        },
        "cancelations":"There are currently no delays. ",
        "parent_station": "milton_go", 
    },
    "union station": {
        "name": "Union Go", 
        "timeslots": {
          "lakeshore west westbound": {
                "arrival_times": "three fourty three, four thirteen, and four fourty three p.m. ",
            },
            "lakeshore west eastbound": {
                "arrival_times": "three ten, three fourty, and four ten p.m. ",
            },
        },
        "cancelations": "There are currently no delays. ",
        "parent_station": "milton_go",
    }
}

//Need to consider eastbound and westbound 
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
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

     if (event.session.application.applicationId !== "") {
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
    /* if(intentName == "GoPalIntent") {
        handleTransportationResponse(intent, session, callback)
    }  */
   if (intentName == "TrianArrivalTimesIntent") {
        handleArrivalTimesResponse(intent, session, callback)
    }
    else if (intentName == "SetDefaultStation") {
        handleSetDefaultStationResponse(intent, session, callback)
    }
    else if (intentName == "RoutesIntent") {
        handleRouteLinesResponse(intent, session, callback)
    }
    else if (intentName == "CancellationsIntent") {
        handleCheckCancelationsResponse(intent, session, callback)
    }
    else if (intentName == "PurchaseTicketIntent") {
        handlePurchaseTicketResponse(intent, session, callback)
    }
    else if (intentName == "CheckStationInRouteIntent") {
        handleCheckStationInRoute(intent, session, callback)
    }
    else if (intentName == "ClearDefaultStationIntent") {
        handleClearDefaultStationIntentResponse(intent, session, callback)
    }
    else if (intentName == "AMAZON.YesIntent") {
        handleYesResponse(intent, session, callback)
    }
    else if (intentName == "AMAZON.StopIntent") {
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
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {

}

// ------- Skill specific logic -------

function getWelcomeResponse(callback) {
    var speechOutput = "Hi! I am the Go Pal! I can give you information about the Go Train. What would you like to know?"

    var reprompt = "What would you like to know ?"

    var header = "GoPal: Your voice guide to the Go Pal"

    var shouldEndSession = false;

    var sessionAttributes = {
        "speechOutput" :  speechOutput,
        "repromptText" :  reprompt
    }

    callback(sessionAttributes, buildSpeechletResponse(header, speechOutput, reprompt, shouldEndSession))
}

function handleGetInfo(intent, session,callback) {
    var speechOutput = "We have an error"

    getJSON(function(data) {
        if (data != "ERROR") {
            var speechOutput = data
        }
        callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, "", true))
    })

}


function addUnderscores(s) {
    //lowercase first letter
    var new_word = s.toLowerCase();
    //Add underscore at the first whitespace
    new_word = new_word.charAt(0).replace(/ /g,"_")
    return new_word
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

// Gives the next upcoming trains for a certain time
//TrianArrivalTimesIntent {Stations}
///TrianArrivalTimesIntent When is the next train
//TrianArrivalTimesIntent When is the next train for {Stations}
//TrianArrivalTimesIntent Train times
//Check when the train for {Stations} is coming     -> {List station times}
//Train times for {Stations}                        -> {List station}


function handleCheckStationInRoute(intent, session, callback) {
    var route = intent.slots.Routes.value.toLowerCase();
    var station = intent.slots.Stations.value.toLowerCase();
    if (routes[route].stationstops.includes(station)) {
        var speechOutput = "Yes. " + route + " has the " + station + " station. What else do you want to know?"
        var repromptText = "What else do you want to know?"
        var header = "Checking if " + route +" has station " + station
    }
    else {
      var speechOutput = "No. " + route + "has" + station + ". What else do you want to know?"
      var repromptText = "What else do you want to know?"
      var header = "Checking if " + route +" has station " + station
    }

    var shouldEndSession = false;

    callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession))
}

function handleArrivalTimesResponse(intent, session,callback) {

    if (!(intent.slots.Stations.hasOwnProperty("value"))) {
        if((default_stop !== "")) {
            var speechOutput = "The upcoming train times for " + default_stop + " are " + stations[default_stop].timeslots[Object.keys(stations[default_stop].timeslots)[0]].arrival_times + ". Would you like to purchase the train tickets for this stop?"
            var repromptText = "Would you like to purchase the train tickets for this stop?"
            var header = "Asking for which train, first route"
        }
        else {
            var speechOutput = "Which station do you want to check?"
            var repromptText = "Which station do you want to know about the upcoming time?"
            var header = "Asking for which train"
        }
    }

    else {
        var station = intent.slots.Stations.value.toLowerCase();

        if ((!station) || (!(station.length > 0))) {
            //If default station was already set and no route set
            if((default_stop !== "")) {
                var speechOutput = "The upcoming train times for " + default_stop + " are "  + stations[default_stop].timeslots[Object.keys(stations[default_stop].timeslots)[0]].arrival_times + ". Would you like to purchase the train tickets for this stop?"
                var repromptText = "Would you like to purchase the train tickets for this stop?" 
                var header = "Asking for which train, first route"
            }
            //If default station was already set and no route set
            /*else if (default_stop !== "") {
                var speechOutput = "The upcoming train times for " + default_stop + "is "  + stations[default_stop].timeslots[0].arrival_times[0] + " , " + stations[default_stop].timeslots[0].arrival_times[1] + stations[default_stop].timeslots[0].arrival_times[2]
                var repromptText = "Would you like to kmow about another station's upcoming times?"
                var header = "Asking for which train"
            }*/
            //No default station so prompt for a station
            else {
                var speechOutput = "Which station do you want to check?"
                var repromptText = "Which station do you want to know about the upcoming time?"
                var header = "Asking for which train"
            }
        }
        //Some station was mentioned
        else {
            //station = addUnderscores(station);
            //Station does not exist mentioned
            if(!stations[station]) {
                var speechOutput = "I'm sorry but that station does not exist or is not reachable. Would you like to know another station's arrival times?"
                var repromptText = "Would you like to know another station's arrival times?"
                var header = "Non Existing Station"
            }
            //Station exists 
            else {
                //var arrival_stop = stations[station]
                var speechOutput = "The upcoming train times for " + station + " are " + stations[station].timeslots[Object.keys(stations[station].timeslots)[0]].arrival_times + ". Would you like to purchase a ticket?"
                var repromptText = "Would you like to purchase the train tickets for this stop?"
                var header = "Asking for which train"
                // (travel_mode == "train")
            }
        }
    }
    var shouldEndSession = false;

    callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession))
}



function handleClearDefaultStationIntentResponse(intent, session, callback) {
    default_stop = ""
    var speechOutput = "Your default station has been cleared. What else do you want to do?"
    var repromptText = "What else do you want to do?"
    var header = "Train Info"

    var shouldEndSession = false;

    callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession))
}

function handleSetDefaultStationResponse(intent, session,callback) {
    var station = intent.slots.Stations.value.toLowerCase();

    if (station === "") {        
        var speechOutput = "What do you want to change the default station to?"
        var repromptText = "What do you want to change the default station to?"
        var header = "Asking to set default station"
    }
    else {
        //station = addUnderscores(station)
        if(!stations[station]) {
            var speechOutput = "Station " + station + " does not exist. Please try again." 
            var repromptText = "Would you like to set your default station?"
            var header = "Non Existing station"
        } else {
            default_stop = intent.slots.Stations.value.toLowerCase();
            var speechOutput = "Your default station has been set to " + default_stop + ". What else do you want to do?"
            var repromptText = "What else do you want to do?"
            var header = "Train Info"
        }
    }

    var shouldEndSession = false;

    callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession))
}

function handleRouteLinesResponse(intent, session, callback){
    var route = intent.slots.Routes.value.toLowerCase();

    if (route === "") {        
        var speechOutput = "Which route are you asking for?"
        var repromptText = "Which route are you asking for?"
        var header = "Asking for route"
    }
    else {
        //route = addUnderscores(route)
        if(!routes[route]) {
        var speechOutput = "Station " + route + " does not exist. Please try again." 
        var repromptText = "Please ask for a valid route"
        var header = "Non Existing route"
        } else {
            var speechOutput = "Stations on route " + route + " are: " + routes[route].stationstops + "What else would you like to do?"
            var repromptText = "Would you like to know about the GoTrains routes, stop times, or stops?"
            var header = "Train Info"
        }
    }

    var shouldEndSession = false;

    callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession))
}

function handleCheckCancelationsResponse(intent, session,callback) {
    var route = intent.slots.Routes.value.toLowerCase();

    if (route === "") {        
        var speechOutput = "Which route are you checking for cancellations for?"
        var repromptText = "Which route are you checking for cancellations for?"
        var header = "Asking for route"
    }
    else {
        //route = addUnderscores(route)
        if(!routes[route]) {
        var speechOutput = "Route " + route + " does not exist. Please try again." 
        var repromptText = "Please ask for a valid route"
        var header = "Non Existing route"
        } else {
            var speechOutput = routes[route].cancellations + ". What else do you want to check?"
            var repromptText = "What else do you want to check?"
            var header = "Train Info"
        }
    }

    var shouldEndSession = false;

    callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession))
}

/*function handleYesResponse(intent, session,callback) {
    var speechOutput = "Great! Your ticket has been purchase"
    var repromptText = speechOutput
    var shouldEndSession = false
     callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession))
}*/

function handlePurchaseTicketResponse(intent, session,callback) {
    var ticketNumber = intent.slots.NumberOfTickets.value;
    var ticketTime = intent.slots.TrainTimes.value;

    var speechOutput = "Great! " + ticketNumber + " tickets have been  purchased for the " + ticketTime + " train through your Presto. What else do you need?"
    var repromptText = "What else do you need from GoPal?"
    var shouldEndSession = false
     callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession))
}

function handleNoResponse(intent, session,callback) {
     var speechOutput = "Sure! What else would you like to know?"
     var speechOutput = "What else would you like to know?"
     var repromptText = speechOutput
     var shouldEndSession = false
     callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession))
}


function handleGetHelpRequest(intent, session, callback) {
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }
    var speechOutput = "You can ask for upcoming times for a particular station, if a route has any delays, what stations are open on a route today, or set your default station"

    var repromptText = speechOutput

    var shouldEndSession = false

    callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession))
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Thank you for using the Go Pal. Goodbye!", "", true));
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