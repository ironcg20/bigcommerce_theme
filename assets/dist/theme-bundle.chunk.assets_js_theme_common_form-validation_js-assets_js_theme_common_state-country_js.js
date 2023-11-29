"use strict";
(self["webpackChunkRoots"] = self["webpackChunkRoots"] || []).push([["assets_js_theme_common_form-validation_js-assets_js_theme_common_state-country_js"],{

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation, requiredMessage) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
  // Required Empty Date field
  if (validation.required && (!validation.min_date || !validation.max_date)) {
    var _formElementId = $formField.attr('id');
    return {
      selector: "#" + _formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + _formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = $formField.find('select[data-label="day"]').val();
        var month = $formField.find('select[data-label="month"]').val();
        var year = val;
        cb(day && month && year);
      },
      errorMessage: requiredMessage
    };
  }
}

/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 * @param errorText provides error validation message
 */
function buildRequiredCheckboxValidation(validation, $formField, errorText) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: errorText
  };
}
function buildRequiredValidation(validation, selector, errorText) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: errorText
  };
}
function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}
function buildValidation($validateableElement, errorMessage) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');
  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation, errorMessage);
    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation(validation, $validateableElement, errorMessage));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";
      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }
      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector, errorMessage));
      }
    });
  }
  return fieldValidations;
}

/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @param context provides access for error messages on required fields validation
 * @returns {Array}
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($form, context) {
  var validationsToPerform = [];
  var _createTranslationDic = (0,_utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__.createTranslationDictionary)(context),
    requiredFieldValidationText = _createTranslationDic.field_not_blank;
  $form.find('[data-validation]').each(function (index, input) {
    var getLabel = function getLabel($el) {
      return $el.first().data('validation').label;
    };
    var requiredValidationMessage = getLabel($(input)) + requiredFieldValidationText;
    validationsToPerform = validationsToPerform.concat(buildValidation($(input), requiredValidationMessage));
  });
  return validationsToPerform;
}

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");







/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    (0,_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__.insertStateHiddenField)($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()($selectElement)) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(statesArray.states, function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + (stateObj.label ? stateObj.label : stateObj.name) + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }

  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_5__.showAlertModal)(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fZm9ybS12YWxpZGF0aW9uX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fc3RhdGUtY291bnRyeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUU7O0FBRXpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLG1CQUFtQkEsQ0FBQ0MsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGVBQWUsRUFBRTtFQUNsRTtFQUNBLElBQUlELFVBQVUsQ0FBQ0UsUUFBUSxJQUFJRixVQUFVLENBQUNHLFFBQVEsRUFBRTtJQUM1QyxJQUFNQyxjQUFjLDJDQUF5Q0osVUFBVSxDQUFDRSxRQUFRLGFBQVFGLFVBQVUsQ0FBQ0csUUFBUSxNQUFHO0lBQzlHLElBQU1FLGFBQWEsR0FBR04sVUFBVSxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzNDLElBQU1DLFFBQVEsR0FBR1AsVUFBVSxDQUFDRSxRQUFRLENBQUNNLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0MsSUFBTUMsUUFBUSxHQUFHVCxVQUFVLENBQUNHLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvQyxJQUFNRSxPQUFPLEdBQUcsSUFBSUMsSUFBSSxDQUFDSixRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUVBLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUVBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxJQUFNSyxPQUFPLEdBQUcsSUFBSUQsSUFBSSxDQUFDRixRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUVBLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUVBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuRSxPQUFPO01BQ0hJLFFBQVEsUUFBTVIsYUFBYSxpQ0FBNEI7TUFDdkRTLFdBQVcsUUFBTVQsYUFBYSx1Q0FBa0M7TUFDaEVVLFFBQVEsRUFBRSxT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QU9nQixHQUFHO0VBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1Jvb3RzLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vUm9vdHMvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3N0YXRlLWNvdW50cnkuanMiLCJ3ZWJwYWNrOi8vUm9vdHMvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5cbi8qKlxuICogVmFsaWRhdGUgdGhhdCB0aGUgZ2l2ZW4gZGF0ZSBmb3IgdGhlIGRheS9tb250aC95ZWFyIHNlbGVjdCBpbnB1dHMgaXMgd2l0aGluIHBvdGVudGlhbCByYW5nZVxuICogQHBhcmFtICRmb3JtRmllbGRcbiAqIEBwYXJhbSB2YWxpZGF0aW9uXG4gKiBAcmV0dXJucyB7e3NlbGVjdG9yOiBzdHJpbmcsIHRyaWdnZXJlZEJ5OiBzdHJpbmcsIHZhbGlkYXRlOiBGdW5jdGlvbiwgZXJyb3JNZXNzYWdlOiBzdHJpbmd9fVxuICovXG5mdW5jdGlvbiBidWlsZERhdGVWYWxpZGF0aW9uKCRmb3JtRmllbGQsIHZhbGlkYXRpb24sIHJlcXVpcmVkTWVzc2FnZSkge1xuICAgIC8vIE5vIGRhdGUgcmFuZ2UgcmVzdHJpY3Rpb24sIHNraXBcbiAgICBpZiAodmFsaWRhdGlvbi5taW5fZGF0ZSAmJiB2YWxpZGF0aW9uLm1heF9kYXRlKSB7XG4gICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFlvdXIgY2hvc2VuIGRhdGUgbXVzdCBmYWxsIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbl9kYXRlfSBhbmQgJHt2YWxpZGF0aW9uLm1heF9kYXRlfS5gO1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBtaW5TcGxpdCA9IHZhbGlkYXRpb24ubWluX2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWF4U3BsaXQgPSB2YWxpZGF0aW9uLm1heF9kYXRlLnNwbGl0KCctJyk7XG4gICAgICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShtaW5TcGxpdFswXSwgbWluU3BsaXRbMV0gLSAxLCBtaW5TcGxpdFsyXSk7XG4gICAgICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShtYXhTcGxpdFswXSwgbWF4U3BsaXRbMV0gLSAxLCBtYXhTcGxpdFsyXSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0W2RhdGEtbGFiZWw9XCJ5ZWFyXCJdYCxcbiAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0Om5vdChbZGF0YS1sYWJlbD1cInllYXJcIl0pYCxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IE51bWJlcigkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwiZGF5XCJdJykudmFsKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJtb250aFwiXScpLnZhbCgpKSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNob3NlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblxuICAgICAgICAgICAgICAgIGNiKGNob3NlbkRhdGUgPj0gbWluRGF0ZSAmJiBjaG9zZW5EYXRlIDw9IG1heERhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIFJlcXVpcmVkIEVtcHR5IERhdGUgZmllbGRcbiAgICBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCAmJiAoIXZhbGlkYXRpb24ubWluX2RhdGUgfHwgIXZhbGlkYXRpb24ubWF4X2RhdGUpKSB7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50SWQgPSAkZm9ybUZpZWxkLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0W2RhdGEtbGFiZWw9XCJ5ZWFyXCJdYCxcbiAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0Om5vdChbZGF0YS1sYWJlbD1cInllYXJcIl0pYCxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9ICRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJkYXlcIl0nKS52YWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aCA9ICRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJtb250aFwiXScpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSB2YWw7XG5cbiAgICAgICAgICAgICAgICBjYihkYXkgJiYgbW9udGggJiYgeWVhcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiByZXF1aXJlZE1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIFdlIHZhbGlkYXRlIGNoZWNrYm94ZXMgc2VwYXJhdGVseSBmcm9tIHNpbmdsZSBpbnB1dCBmaWVsZHMsIGFzIHRoZXkgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGVja2VkIG9wdGlvblxuICogZnJvbSBtYW55IGRpZmZlcmVudCBpbnB1dHNcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXG4gKiBAcGFyYW0gdmFsaWRhdGlvblxuICogQHBhcmFtIGVycm9yVGV4dCBwcm92aWRlcyBlcnJvciB2YWxpZGF0aW9uIG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbih2YWxpZGF0aW9uLCAkZm9ybUZpZWxkLCBlcnJvclRleHQpIHtcbiAgICBjb25zdCBmb3JtRmllbGRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcbiAgICBjb25zdCBwcmltYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0OmZpcnN0LW9mLXR5cGVgO1xuICAgIGNvbnN0IHNlY29uZGFyeVNlbGVjdG9yID0gYCMke2Zvcm1GaWVsZElkfSBpbnB1dGA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogcHJpbWFyeVNlbGVjdG9yLFxuICAgICAgICB0cmlnZ2VyZWRCeTogc2Vjb25kYXJ5U2VsZWN0b3IsXG4gICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgJChzZWNvbmRhcnlTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JUZXh0LFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uKHZhbGlkYXRpb24sIHNlbGVjdG9yLCBlcnJvclRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGUoY2IsIHZhbCkge1xuICAgICAgICAgICAgY2IodmFsLmxlbmd0aCA+IDApO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGVycm9yVGV4dCxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBmb3JtRmllbGRTZWxlY3Rvcikge1xuICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFRoZSB2YWx1ZSBmb3IgJHt2YWxpZGF0aW9uLmxhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbn0gYW5kICR7dmFsaWRhdGlvbi5tYXh9LmA7XG4gICAgY29uc3QgbWluID0gTnVtYmVyKHZhbGlkYXRpb24ubWluKTtcbiAgICBjb25zdCBtYXggPSBOdW1iZXIodmFsaWRhdGlvbi5tYXgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1GaWVsZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiJHt2YWxpZGF0aW9uLm5hbWV9XCJdYCxcbiAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJWYWwgPSBOdW1iZXIodmFsKTtcblxuICAgICAgICAgICAgY2IobnVtYmVyVmFsID49IG1pbiAmJiBudW1iZXJWYWwgPD0gbWF4KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBpbnZhbGlkTWVzc2FnZSxcbiAgICB9O1xufVxuXG5cbmZ1bmN0aW9uIGJ1aWxkVmFsaWRhdGlvbigkdmFsaWRhdGVhYmxlRWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9ICR2YWxpZGF0ZWFibGVFbGVtZW50LmRhdGEoJ3ZhbGlkYXRpb24nKTtcbiAgICBjb25zdCBmaWVsZFZhbGlkYXRpb25zID0gW107XG4gICAgY29uc3QgZm9ybUZpZWxkU2VsZWN0b3IgPSBgIyR7JHZhbGlkYXRlYWJsZUVsZW1lbnQuYXR0cignaWQnKX1gO1xuXG4gICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2RhdGVjaG9vc2VyJykge1xuICAgICAgICBjb25zdCBkYXRlVmFsaWRhdGlvbiA9IGJ1aWxkRGF0ZVZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24sIGVycm9yTWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKGRhdGVWYWxpZGF0aW9uKSB7XG4gICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goZGF0ZVZhbGlkYXRpb24pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWxpZGF0aW9uLnJlcXVpcmVkICYmICh2YWxpZGF0aW9uLnR5cGUgPT09ICdjaGVja2JveHNlbGVjdCcgfHwgdmFsaWRhdGlvbi50eXBlID09PSAncmFkaW9zZWxlY3QnKSkge1xuICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbih2YWxpZGF0aW9uLCAkdmFsaWRhdGVhYmxlRWxlbWVudCwgZXJyb3JNZXNzYWdlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJHZhbGlkYXRlYWJsZUVsZW1lbnQuZmluZCgnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGlucHV0RWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gJGlucHV0RWxlbWVudC5nZXQoMCkudGFnTmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0TmFtZSA9ICRpbnB1dEVsZW1lbnQuYXR0cignbmFtZScpO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudFNlbGVjdG9yID0gYCR7Zm9ybUZpZWxkU2VsZWN0b3J9ICR7dGFnTmFtZX1bbmFtZT1cIiR7aW5wdXROYW1lfVwiXWA7XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLnR5cGUgPT09ICdudW1iZXJvbmx5Jykge1xuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBmb3JtRmllbGRTZWxlY3RvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24ucmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24odmFsaWRhdGlvbiwgZWxlbWVudFNlbGVjdG9yLCBlcnJvck1lc3NhZ2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkVmFsaWRhdGlvbnM7XG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSB2YWxpZGF0aW9uIG1vZGVsIGZvciBkeW5hbWljIGZvcm1zXG4gKiBAcGFyYW0gJGZvcm1cbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyBmb3IgZXJyb3IgbWVzc2FnZXMgb24gcmVxdWlyZWQgZmllbGRzIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCRmb3JtLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRpb25zVG9QZXJmb3JtID0gW107XG4gICAgY29uc3QgeyBmaWVsZF9ub3RfYmxhbms6IHJlcXVpcmVkRmllbGRWYWxpZGF0aW9uVGV4dCB9ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuXG4gICAgJGZvcm0uZmluZCgnW2RhdGEtdmFsaWRhdGlvbl0nKS5lYWNoKChpbmRleCwgaW5wdXQpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0TGFiZWwgPSAkZWwgPT4gJGVsLmZpcnN0KCkuZGF0YSgndmFsaWRhdGlvbicpLmxhYmVsO1xuICAgICAgICBjb25zdCByZXF1aXJlZFZhbGlkYXRpb25NZXNzYWdlID0gZ2V0TGFiZWwoJChpbnB1dCkpICsgcmVxdWlyZWRGaWVsZFZhbGlkYXRpb25UZXh0O1xuXG4gICAgICAgIHZhbGlkYXRpb25zVG9QZXJmb3JtID0gdmFsaWRhdGlvbnNUb1BlcmZvcm0uY29uY2F0KGJ1aWxkVmFsaWRhdGlvbigkKGlucHV0KSwgcmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25zVG9QZXJmb3JtO1xufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XHJcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcclxuXHJcbi8qKlxyXG4gKiBJZiB0aGVyZSBhcmUgbm8gb3B0aW9ucyBmcm9tIGJjYXBwLCBhIHRleHQgZmllbGQgd2lsbCBiZSBzZW50LiBUaGlzIHdpbGwgY3JlYXRlIGEgc2VsZWN0IGVsZW1lbnQgdG8gaG9sZCBvcHRpb25zIGFmdGVyIHRoZSByZW1vdGUgcmVxdWVzdC5cclxuICogQHJldHVybnMge2pRdWVyeXxIVE1MRWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VTdGF0ZVJlcXVpcmVkKHN0YXRlRWxlbWVudCwgY29udGV4dCkge1xyXG4gICAgY29uc3QgYXR0cnMgPSBfLnRyYW5zZm9ybShzdGF0ZUVsZW1lbnQucHJvcCgnYXR0cmlidXRlcycpLCAocmVzdWx0LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xyXG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xyXG4gICAgICAgIGlkOiBhdHRycy5pZCxcclxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXHJcbiAgICAgICAgY2xhc3M6ICdmb3JtLXNlbGVjdCcsXHJcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcclxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPHNlbGVjdD48L3NlbGVjdD4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcclxuXHJcbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xyXG4gICAgY29uc3QgJGhpZGRlbklucHV0ID0gJCgnW25hbWUqPVwiRm9ybUZpZWxkSXNUZXh0XCJdJyk7XHJcblxyXG4gICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAkaGlkZGVuSW5wdXQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIC8vIFN0cmluZyBpcyBpbmplY3RlZCBmcm9tIGxvY2FsaXplclxyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5hcHBlbmQoYDxzbWFsbD4ke2NvbnRleHQucmVxdWlyZWR9PC9zbWFsbD5gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIElmIGEgY291bnRyeSB3aXRoIHN0YXRlcyBpcyB0aGUgZGVmYXVsdCwgYSBzZWxlY3Qgd2lsbCBiZSBzZW50LFxyXG4gKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIHN3aXRjaCB0byBhbiBpbnB1dCBmaWVsZCBhbmQgaGlkZSB0aGUgcmVxdWlyZWQgZmllbGRcclxuICovXHJcbmZ1bmN0aW9uIG1ha2VTdGF0ZU9wdGlvbmFsKHN0YXRlRWxlbWVudCkge1xyXG4gICAgY29uc3QgYXR0cnMgPSBfLnRyYW5zZm9ybShzdGF0ZUVsZW1lbnQucHJvcCgnYXR0cmlidXRlcycpLCAocmVzdWx0LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xyXG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlcGxhY2VtZW50QXR0cmlidXRlcyA9IHtcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgaWQ6IGF0dHJzLmlkLFxyXG4gICAgICAgICdkYXRhLWxhYmVsJzogYXR0cnNbJ2RhdGEtbGFiZWwnXSxcclxuICAgICAgICBjbGFzczogJ2Zvcm0taW5wdXQnLFxyXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXHJcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxpbnB1dCAvPicsIHJlcGxhY2VtZW50QXR0cmlidXRlcykpO1xyXG5cclxuICAgIGNvbnN0ICRuZXdFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcblxyXG4gICAgaWYgKCRuZXdFbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJG5ld0VsZW1lbnQpO1xyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJG5ld0VsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZyb20gdGhlIHJlbW90ZSByZXF1ZXN0IHRvIHRoZSBuZXdseSBjcmVhdGVkIHNlbGVjdCBib3guXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZXNBcnJheVxyXG4gKiBAcGFyYW0ge2pRdWVyeX0gJHNlbGVjdEVsZW1lbnRcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICovXHJcbmZ1bmN0aW9uIGFkZE9wdGlvbnMoc3RhdGVzQXJyYXksICRzZWxlY3RFbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBbXTtcclxuXHJcbiAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIlwiPiR7c3RhdGVzQXJyYXkucHJlZml4fTwvb3B0aW9uPmApO1xyXG5cclxuICAgIGlmICghXy5pc0VtcHR5KCRzZWxlY3RFbGVtZW50KSkge1xyXG4gICAgICAgIF8uZWFjaChzdGF0ZXNBcnJheS5zdGF0ZXMsIChzdGF0ZU9iaikgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VJZEZvclN0YXRlcykge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCIke3N0YXRlT2JqLmlkfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5uYW1lfVwiPiR7c3RhdGVPYmoubGFiZWwgPyBzdGF0ZU9iai5sYWJlbCA6IHN0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHNlbGVjdEVsZW1lbnQuaHRtbChjb250YWluZXIuam9pbignICcpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7alF1ZXJ5fSBzdGF0ZUVsZW1lbnRcclxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZUVsZW1lbnQsIGNvbnRleHQgPSB7fSwgb3B0aW9ucywgY2FsbGJhY2spIHtcclxuICAgIC8qKlxyXG4gICAgICogQmFja3dhcmRzIGNvbXBhdGlibGUgZm9yIHRocmVlIHBhcmFtZXRlcnMgaW5zdGVhZCBvZiBmb3VyXHJcbiAgICAgKlxyXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnM6XHJcbiAgICAgKlxyXG4gICAgICogdXNlSWRGb3JTdGF0ZXMge0Jvb2x9IC0gR2VuZXJhdGVzIHN0YXRlcyBkcm9wZG93biB1c2luZyBpZCBmb3IgdmFsdWVzIGluc3RlYWQgb2Ygc3RyaW5nc1xyXG4gICAgICovXHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcclxuICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4gICAgfVxyXG5cclxuICAgICQoJ3NlbGVjdFtkYXRhLWZpZWxkLXR5cGU9XCJDb3VudHJ5XCJdJykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChjb3VudHJ5TmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLmNvdW50cnkuZ2V0QnlOYW1lKGNvdW50cnlOYW1lLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChjb250ZXh0LnN0YXRlX2Vycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIV8uaXNFbXB0eShyZXNwb25zZS5kYXRhLnN0YXRlcykpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3RFbGVtZW50ID0gbWFrZVN0YXRlUmVxdWlyZWQoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAkc2VsZWN0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbmV3RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJidWlsZERhdGVWYWxpZGF0aW9uIiwiJGZvcm1GaWVsZCIsInZhbGlkYXRpb24iLCJyZXF1aXJlZE1lc3NhZ2UiLCJtaW5fZGF0ZSIsIm1heF9kYXRlIiwiaW52YWxpZE1lc3NhZ2UiLCJmb3JtRWxlbWVudElkIiwiYXR0ciIsIm1pblNwbGl0Iiwic3BsaXQiLCJtYXhTcGxpdCIsIm1pbkRhdGUiLCJEYXRlIiwibWF4RGF0ZSIsInNlbGVjdG9yIiwidHJpZ2dlcmVkQnkiLCJ2YWxpZGF0ZSIsImNiIiwidmFsIiwiZGF5IiwiTnVtYmVyIiwiZmluZCIsIm1vbnRoIiwieWVhciIsImNob3NlbkRhdGUiLCJlcnJvck1lc3NhZ2UiLCJyZXF1aXJlZCIsImJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24iLCJlcnJvclRleHQiLCJmb3JtRmllbGRJZCIsInByaW1hcnlTZWxlY3RvciIsInNlY29uZGFyeVNlbGVjdG9yIiwicmVzdWx0IiwiJCIsImVhY2giLCJpbmRleCIsImNoZWNrYm94IiwiY2hlY2tlZCIsImJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uIiwibGVuZ3RoIiwiYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24iLCJmb3JtRmllbGRTZWxlY3RvciIsImxhYmVsIiwibWluIiwibWF4IiwibmFtZSIsIm51bWJlclZhbCIsImJ1aWxkVmFsaWRhdGlvbiIsIiR2YWxpZGF0ZWFibGVFbGVtZW50IiwiZGF0YSIsImZpZWxkVmFsaWRhdGlvbnMiLCJ0eXBlIiwiZGF0ZVZhbGlkYXRpb24iLCJwdXNoIiwiZWxlbWVudCIsIiRpbnB1dEVsZW1lbnQiLCJ0YWdOYW1lIiwiZ2V0IiwiaW5wdXROYW1lIiwiZWxlbWVudFNlbGVjdG9yIiwiJGZvcm0iLCJjb250ZXh0IiwidmFsaWRhdGlvbnNUb1BlcmZvcm0iLCJfY3JlYXRlVHJhbnNsYXRpb25EaWMiLCJyZXF1aXJlZEZpZWxkVmFsaWRhdGlvblRleHQiLCJmaWVsZF9ub3RfYmxhbmsiLCJpbnB1dCIsImdldExhYmVsIiwiJGVsIiwiZmlyc3QiLCJyZXF1aXJlZFZhbGlkYXRpb25NZXNzYWdlIiwiY29uY2F0IiwidXRpbHMiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwic2hvd0FsZXJ0TW9kYWwiLCJtYWtlU3RhdGVSZXF1aXJlZCIsInN0YXRlRWxlbWVudCIsImF0dHJzIiwiX3RyYW5zZm9ybSIsInByb3AiLCJpdGVtIiwicmV0IiwidmFsdWUiLCJyZXBsYWNlbWVudEF0dHJpYnV0ZXMiLCJpZCIsInJlcGxhY2VXaXRoIiwiJG5ld0VsZW1lbnQiLCIkaGlkZGVuSW5wdXQiLCJyZW1vdmUiLCJwcmV2IiwiYXBwZW5kIiwic2hvdyIsIm1ha2VTdGF0ZU9wdGlvbmFsIiwiaGlkZSIsImFkZE9wdGlvbnMiLCJzdGF0ZXNBcnJheSIsIiRzZWxlY3RFbGVtZW50Iiwib3B0aW9ucyIsImNvbnRhaW5lciIsInByZWZpeCIsIl9pc0VtcHR5IiwiX2VhY2giLCJzdGF0ZXMiLCJzdGF0ZU9iaiIsInVzZUlkRm9yU3RhdGVzIiwiaHRtbCIsImpvaW4iLCJjYWxsYmFjayIsIm9uIiwiZXZlbnQiLCJjb3VudHJ5TmFtZSIsImN1cnJlbnRUYXJnZXQiLCJhcGkiLCJjb3VudHJ5IiwiZ2V0QnlOYW1lIiwiZXJyIiwicmVzcG9uc2UiLCJzdGF0ZV9lcnJvciIsIiRjdXJyZW50SW5wdXQiLCJuZXdFbGVtZW50IiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJhcmd1bWVudHMiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInBvcCIsInJlZHVjZSIsImFjYyJdLCJzb3VyY2VSb290IjoiIn0=
