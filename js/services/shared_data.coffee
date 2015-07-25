recipeer.service('sharedData', ->
	URL = ""
	INGREDIENTS = []
	return {
		recieveCallInfo: (url) ->
			URL = url
		getCallInfo: ->
			URL
		sendRecipeCall: (id) ->
			URL = "http://api.yummly.com/v1/api/recipe/#{id}?_app_id=9c953c03&_app_key=71d46663793f28c4477818649e4e6a40"
		getCallforId: ->
			URL
		recieveIngredients: (ingredients) ->
			INGREDIENTS = ingredients
		sendIngredients: ->
			INGREDIENTS
	}
)