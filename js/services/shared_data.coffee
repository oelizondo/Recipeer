recipeer.service('sharedData', ->
	URL = ""
	return {
		recieveCallInfo: (url) ->
			URL = url
		getCallInfo: ->
			URL
	}
)