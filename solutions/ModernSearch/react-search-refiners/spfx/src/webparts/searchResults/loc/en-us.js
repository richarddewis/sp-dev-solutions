define([], function () {
  return {
    "SearchQuerySettingsGroupName": "Search query configuration",
    "SearchSettingsGroupName": "Search settings",
    "SearchQueryKeywordsFieldLabel": "Search query keywords",
    "QueryTemplateFieldLabel": "Query template",
    "SelectedPropertiesFieldLabel": "Selected Properties",
    "LoadingMessage": "Results are loading, please wait...",
    "EnableLocalizationLabel": "Enable taxonomy values localization for refiners and results",
    "EnableLocalizationOnLabel": "Localization enabled",
    "EnableLocalizationOffLabel": "Localization disabled",
    "MaxResultsCount": "Number of items to retrieve per page",
    "NoResultMessage": "No results to display",
    "FilterPanelTitle": "Available filters",
    "FilterResultsButtonLabel": "Filters",
    "SelectedFiltersLabel": "Selected filters",
    "SearchResultsLabel": "Search results",
    "RemoveAllFiltersLabel": "Remove all filters",
    "UsePaginationWebPartLabel": "Connect to a search pagination Web Part",
    "ShowResultsCountLabel": "Show results count",
    "ShowBlankLabel": "Show blank if no result",
    "ShowBlankEditInfoMessage": "No result returned for this query. This Web Part will remain blank in display mode according to parameters.",
    "NoFilterConfiguredLabel": "No filter configured",
    "SearchQueryPlaceHolderText": "Search query in KQL format",
    "EmptyFieldErrorMessage": "This field cannot be empty",
    "PlaceHolderEditLabel": "Edit",
    "PlaceHolderConfigureBtnLabel": "Configure",
    "PlaceHolderIconText": "Search Results Web Part",
    "PlaceHolderDescription": "This component displays search results with paging",
    "ResultSourceIdLabel": "Result Source Identifier",
    "InvalidResultSourceIdMessage": "Invalid identifier",
    "EnableQueryRulesLabel": "Enable query rules",
    "StylingSettingsGroupName": "Styling options",
    "SelectedPropertiesFieldDescription": "Speficies the properties to retrieve from the search results.",
    "SearchQueryKeywordsFieldDescription": "Use pre-defined search query keywords to retrieve a static set of results.",
    "CountMessageLong": "<b>{0}</b> results for '<em>{1}</em>'",
    "CountMessageShort": "<b>{0}</b> results",
    "CancelButtonText": "Cancel",
    "DialogButtonLabel": "Styles",
    "DialogButtonText": "Edit template",
    "DialogTitle": "Edit results template",
    "SaveButtonText": "Save",
    "ListLayoutOption": "List",
    "TilesLayoutOption": "Tiles",
    "CustomLayoutOption": "Custom",
    "ResultsLayoutLabel": "Results layout",
    "TemplateUrlFieldLabel": "Use an external template URL",
    "TemplateUrlPlaceholder": "https://myfile.html",
    "ErrorTemplateExtension": "The template must be a valid .htm or .html file",
    "ErrorTemplateResolve": "Unable to resolve the specified template. Error details: '{0}'",
    "WebPartTitle": "Web part title",
    "HandlebarsHelpersDescription": "Enable functions from moment and handlebars helpers. See https://github.com/SharePoint/sp-dev-fx-webparts/blob/master/samples/react-search-refiners/README.md#available-tokens for more information.",
    "PromotedResultsLabel": "Promoted result(s)",
    "PanelCloseButtonAria": "Close",
    "UseRefinersWebPartLabel": "Connect to a search refiners Web Part",
    "UseRefinersFromComponentLabel": "Use refiners from this component",
    "UsePaginationFromComponentLabel": "Use pagination from this component",
    "customTemplateFieldsLabel": "Custom template field values",
    "customTemplateFieldsPanelHeader": "Custom template field values",
    "customTemplateFieldsConfigureButtonLabel": "Configure",
    "customTemplateFieldTitleLabel": "Field Name",
    "customTemplateFieldPropertyLabel": "Search Property",
    "Sort": {
      "SortableFieldsPropertyPaneField": "Sortable properties",
      "SortableFieldsDescription": "Specifies sortable properties that users can use in the UI. Only one property can be used at a time for sorting and will override the search order specified in the WP if exists.",
      "SortPropertyPaneFieldLabel": "Sort order",
      "SortListDescription": "Specify the sort order for the search results. This will only  applied when no manual filters have been set (i.e. sortable fields)",
      "SortDirectionAscendingLabel": "Ascending",
      "SortDirectionDescendingLabel": "Descending",
      "SortErrorMessage": "Invalid search property (Check if the managed property is sortable).",
      "SortPanelSortFieldLabel": "Sort on field",
      "SortPanelSortFieldAria": "Select a field",
      "SortPanelSortFieldPlaceHolder": "Select a field",
      "SortPanelSortDirectionLabel": "Sort Direction",
      "SortableFieldManagedPropertyField": "Sort managed property",
      "SortableFieldDisplayValueField": "Field name to display",
      "EditSortableFieldsLabel": "Edit sortable fields",
      "EditSortLabel": "Edit sort order"
    },
    "Synonyms": {
      "EditSynonymLabel": "Edit synonyms",
      "SynonymListDescription": "Specify all the synonyms that will be used when searching. Each term a search will be enchanced with all the associated synonyms when the query is sent to the server. If a synonym contains more than one word, it has to be wrapped in double quotes.",
      "SynonymPropertyPanelFieldLabel": "Configure synonyms",
      "SynonymListTerm": "Term",
      "SynonymListSynonyms": "Synonyms",
      "SynonymIsTwoWays": "Two-ways?",
      "SynonymListSynonymsExemple": "Laptop, \"Desktop with monitor\"",
      "SynonymListTermExemple": "Computer"
    },
    "TermNotFound": "(Term with ID '{0}' not found)",
    "UseDefaultSearchQueryKeywordsFieldLabel": "Use a default search query",
    "DefaultSearchQueryKeywordsFieldLabel": "Default search query",
    "DefaultSearchQueryKeywordsFieldDescription": "This query will be used when the data source value is still empty.",
    "ResultTypes": {
      "ResultTypeslabel": "Result Types",
      "ResultTypesDescription": "Add here the display templates to use for result items according to one ore more conditions. Conditions are evaluated in the configured order and external template takes precedence over inline templates. Make sure the managed properties you use are present in the 'Selected Properties' of this Web Part.",
      "EditResultTypesLabel": "Edit Result Types",
      "ConditionPropertyLabel": "Managed Property",
      "ConditionValueLabel": "Condition Value",
      "CondtionOperatorValue": "Operator",
      "ExternalUrlLabel": "External Template Url",
      "EqualOperator": "Equals",
      "ContainsOperator": "Contains",
      "StartsWithOperator": "Starts with",
      "NotNullOperator": "Is not null",
      "GreaterOrEqualOperator": "Greater or equal",
      "GreaterThanOperator": "Greater than",
      "LessOrEqualOperator": "Less or equal",
      "LessThanOperator": "Less than"
    },
    "QueryCultureLabel": "Language of search request",
    "QueryCultureUseUiLanguageLabel": "Use interface language"
  }
});