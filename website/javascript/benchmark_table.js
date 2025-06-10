
//Formatter to generate charts
var chartFormatter = function (cell, formatterParams, onRendered) {
    var content = document.createElement("span");
    var values = cell.getValue();

    //invert values if needed
    if (formatterParams.invert) {
        values = values.map(val => val * -1);
    }

    //add values to chart and style
    content.classList.add(formatterParams.type);
    content.inneHrTML = values.join(",");

    //setup chart options
    var options = {
        width: 50,
        // min: 0.0,
        // max: 100.0,
    }

    if (formatterParams.fill) {
        options.fill = formatterParams.fill
    }

    //instantiate piety chart after the cell element has been aded to the DOM
    onRendered(function () {
        peity(content, formatterParams.type, options);
    });

    return content;
};

var colorFormatterMinerva = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 27.0,
        max: 34.5,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 238, g: 211, b: 217 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font_size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterMinervaToken = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 4000,
        max: 6000,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 238, g: 211, b: 217 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font_size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterMinerva7 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 39.0,
        max: 43.8,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 238, g: 211, b: 217 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font_size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterMinervaToken7 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 2000,
        max: 7500,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 238, g: 211, b: 217 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font_size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterMinerva32 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 43.0,
        max: 48,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 238, g: 211, b: 217 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font_size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterMinervaToken32 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 1400,
        max: 3000,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 238, g: 211, b: 217 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font_size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterAIME = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 21.0,
        max: 30.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 230, b: 210 },
        // endColor: { r: 235, g: 220, b: 200 },
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterAIME7 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 40.0,
        max: 51.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 230, b: 210 },
        // endColor: { r: 235, g: 220, b: 200 },
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}


var colorFormatterLiveCode = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 12.0,
        max: 25.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 230, b: 210 },
        // endColor: { r: 235, g: 220, b: 200 },
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterLiveCodeToken = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 5400,
        max: 8000,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 230, b: 210 },
        // endColor: { r: 235, g: 220, b: 200 },
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterLiveCode7 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 40.0,
        max: 50.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 230, b: 210 },
        // endColor: { r: 235, g: 220, b: 200 },
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterLiveCodeToken7 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 5050,
        max: 6500,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 230, b: 210 },
        // endColor: { r: 235, g: 220, b: 200 },
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterAIMEToken = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 5900,
        max: 8500,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 230, b: 210 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterAIMEToken7 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 6050,
        max: 8000,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 230, b: 210 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterAIME32 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 36.0,
        max: 54.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 230, b: 210 },
        // endColor: { r: 235, g: 220, b: 200 },
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterAIMEToken32 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 3100,
        max: 4800,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 230, b: 210 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterLiveCode32 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 63.0,
        max: 76.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 230, b: 210 },
        // endColor: { r: 235, g: 220, b: 200 },
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterLiveCodeToken32 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 4900,
        max: 6500,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 245, g: 230, b: 210 },
        // endColor: { r: 235, g: 220, b: 200 },
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterAMC = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 50.0,
        max: 75.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 185, g: 195, b: 180 }
        // endColor: { r: 204, g: 211, b: 202 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterAMCToken = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 4200,
        max: 6800,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 185, g: 195, b: 180 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterAMC7 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 75.0,
        max: 93.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 185, g: 195, b: 180 }
        // endColor: { r: 204, g: 211, b: 202 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterAMCToken7 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 3000,
        max: 6300,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 185, g: 195, b: 180 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterAMC32 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 74.0,
        max: 91.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 185, g: 195, b: 180 }
        // endColor: { r: 204, g: 211, b: 202 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterAMCToken32 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 2100,
        max: 3500,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 185, g: 195, b: 180 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterOlympiad = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 36.0,
        max: 48.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 185, g: 195, b: 180 }
        // endColor: { r: 204, g: 211, b: 202 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterOlympiadToken = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 4500,
        max: 7000,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 185, g: 195, b: 180 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterOlympiad7 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 48.0,
        max: 56.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 185, g: 195, b: 180 }
        // endColor: { r: 204, g: 211, b: 202 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterOlympiadToken7 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 4500,
        max: 6500,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 185, g: 195, b: 180 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterOlympiad32 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 50.0,
        max: 58.0,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 185, g: 195, b: 180 }
        // endColor: { r: 204, g: 211, b: 202 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterOlympiadToken32 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 2500,
        max: 3650,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 185, g: 195, b: 180 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterMath = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 77,
        max: 81.5,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 181, g: 192, b: 208 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterMathToken = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 2900,
        max: 5200,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 181, g: 192, b: 208 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterMath7 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 85,
        max: 93,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 181, g: 192, b: 208 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterMathToken7 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 2000,
        max: 7000,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 181, g: 192, b: 208 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterMath32 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 88,
        max: 91,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 181, g: 192, b: 208 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var colorFormatterMathToken32 = function (cell, formatterParams) {
    var value = cell.getValue();

    // Check for the specific string "-"
    if (value === "-") {
        return value;
    }

    // Default values
    var defaults = {
        min: 1400,
        max: 2500,
        startColor: { r: 255, g: 255, b: 255 },
        endColor: { r: 181, g: 192, b: 208 }
    };

    // Override defaults with provided formatterParams values
    var min = (formatterParams && formatterParams.min) || defaults.min;
    var max = (formatterParams && formatterParams.max) || defaults.max;
    var startColor = (formatterParams && formatterParams.startColor) || defaults.startColor;
    var endColor = (formatterParams && formatterParams.endColor) || defaults.endColor;

    // Normalize the value between 0 and 1
    var normalizedValue = 1 - (value - min) / (max - min);

    // Compute the color gradient 
    var red = Math.floor(startColor.r + (endColor.r - startColor.r) * normalizedValue);
    var green = Math.floor(startColor.g + (endColor.g - startColor.g) * normalizedValue);
    var blue = Math.floor(startColor.b + (endColor.b - startColor.b) * normalizedValue);

    // make sure the value is rounded to 1 decimal place
    value = parseFloat(value).toFixed(1)

    return "<span style='display: block; width: 100%; height: 100%; font-size: 1.1em; background-color: rgb(" + red + ", " + green + ", " + blue + ");'>" + value + "</span>";
}

var barColorFn = function (value, formatterParams) {
    var defaults = {
        range : [-50, 50],
        low: { r: 255, g: 255, b: 255 },
        high: { r: 206, g: 212, b: 218 }
    };

    // Override defaults with provided formatterParams values

    var low_range = (formatterParams && formatterParams.range[0]) || defaults.range[0];
    var high_range = (formatterParams && formatterParams.range[1]) || defaults.range[1];
    var low = (formatterParams && formatterParams.low) || defaults.low;
    var high = (formatterParams && formatterParams.high) || defaults.high;

    // Clamp the value to the range [-100, 100]
    value = Math.max(low_range, Math.min(high_range, value));
    var range = high_range - low_range;

    // Normalize the value to the range [0, 1]
    var normalizedValue = (value + range / 2) / range;
    // Interpolate between the two colors based on the normalized value
    var interpolated = {
        r: Math.floor(low.r + (high.r - low.r) * normalizedValue),
        g: Math.floor(low.g + (high.g - low.g) * normalizedValue),
        b: Math.floor(low.b + (high.b - low.b) * normalizedValue)
    };

    return 'rgba(' + interpolated.r + ',' + interpolated.g + ',' + interpolated.b + ',0.9)';
}

document.addEventListener('DOMContentLoaded', function () {
    Promise.all([
        fetch('website/data/deepseek-1-5b.json').then(response => response.json()),
        fetch('website/data/deepseek-7b.json').then(response => response.json()),
        fetch('website/data/qwq-32b.json').then(response => response.json()),
    ])
        .then(([
            deepseek_1_5b_data,
            deepseek_7b_data,
            qwq_32b_data,
        ]) => {
            var getColumnMinMax = (data, field) => {
                let values = data.map(item => item[field]).filter(val => val !== "-").map(Number);
                return { min: Math.min(...values), max: Math.max(...values) };
            };

            var deepseek_1_5b_columns = [
                {
                    title: "Method",
                    field: "method",
                    cssClass: "avg-column",
                    hozAlign: "center",
                    widthGrow: 1.1,
                    minWidth: 100,
                    headerSort: true 
                },
                {
                    title: "Avg<br>P@1<br>Gain",
                    field: "deepseek_1_5b_avg",
                    cssClass: "avg-column",
                    formatter: "progress",
                    minWidth: 90,
                    widthGrow: 1.1,
                    formatterParams: {
                        min: 0,
                        max: 10,
                        legend: true,
                        color: barColorFn
                    },
                },
                {
                    title: "Mathematical",
                    cssClass: "avg-column",
                    headerHozAlign: "center",
                    columns: [
                        { 
                            title: "AIME24",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "deepseek_1_5b_aime24_pass", hozAlign: "center", formatter: colorFormatterAIME, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "deepseek_1_5b_aime24_tokens", hozAlign: "center", formatter: colorFormatterAIMEToken, minWidth: 65, responsive: 2}
                            ]
                        },
                        { 
                            title: "AMC23",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "deepseek_1_5b_amc23_pass", hozAlign: "center", formatter: colorFormatterAMC, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "deepseek_1_5b_amc23_tokens", hozAlign: "center", formatter: colorFormatterAMCToken, minWidth: 65, responsive: 2}
                            ]
                        },
                        { 
                            title: "Minerva",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "deepseek_1_5b_minerva_pass", hozAlign: "center", formatter: colorFormatterMinerva, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "deepseek_1_5b_minerva_tokens", hozAlign: "center", formatter: colorFormatterMinervaToken, minWidth: 65, responsive: 2}
                            ]
                        },
                        { 
                            title: "MATH500",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "deepseek_1_5b_math500_pass", hozAlign: "center", formatter: colorFormatterMath, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "deepseek_1_5b_math500_tokens", hozAlign: "center", formatter: colorFormatterMathToken, minWidth: 65, responsive: 2}
                            ]
                        }
                    ]
                },
                {
                    title: "Coding",
                    cssClass: "avg-column",
                    headerHozAlign: "center",
                    columns: [
                        { 
                            title: "LiveCode",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "deepseek_1_5b_livecodebench_pass", hozAlign: "center", formatter: colorFormatterLiveCode, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "deepseek_1_5b_livecodebench_tokens", hozAlign: "center", formatter: colorFormatterLiveCodeToken, minWidth: 65, responsive: 2}
                            ]
                        }
                    ]
                },
                {
                    title: "Science",
                    cssClass: "avg-column",
                    headerHozAlign: "center",
                    columns: [
                        { 
                            title: "Olympiad",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "deepseek_1_5b_olympiad_pass", hozAlign: "center", formatter: colorFormatterOlympiad, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "deepseek_1_5b_olympiad_tokens", hozAlign: "center", formatter: colorFormatterOlympiadToken, minWidth: 65, responsive: 2}
                            ]
                        }
                    ]
                },
            ];

            deepseek_1_5b_columns.forEach(column => {
                if (column.columns) {
                    column.columns.forEach(subColumn => {
                        let { min, max } = getColumnMinMax(deepseek_1_5b_data, subColumn.field);
                        subColumn.formatterParams = { min, max };
                    });
                } else if (column.field !== "deepseek_1_5b_avg") {
                    let { min, max } = getColumnMinMax(deepseek_1_5b_data, column.field);
                    column.formatterParams = { min, max };
                }
            });

            var deepseek_1_5b_table = new Tabulator("#deepseek-1-5b-main-table", {
                data: deepseek_1_5b_data,
                layout: "fitColumns",
                responsiveLayout: "collapse",
                responsiveLayoutCollapseStartOpen: false,
                movableColumns: false,
                initialSort: [
                    { column: "deepseek_1_5b_avg", dir: "desc" },
                ],
                columnDefaults: {
                    tooltip: true,
                },
                // columns: eb_alfred_columns
                columns: deepseek_1_5b_columns.map(column => {
                    if (column.field === "deepseek_1_5b_avg") {
                        return { ...column, sorter: "number" };
                    }
                    return column;
                })
            });

            
            var deepseek_7b_columns = [
                {
                    title: "Method",
                    field: "method",
                    cssClass: "avg-column",
                    hozAlign: "center",
                    widthGrow: 1.1,
                    minWidth: 100,
                    headerSort: true 
                },
                {
                    title: "Avg<br>P@1<br>Gain",
                    field: "deepseek_7b_avg",
                    cssClass: "avg-column",
                    formatter: "progress",
                    minWidth: 90,
                    widthGrow: 1.1,
                    formatterParams: {
                        min: 0,
                        max: 10,
                        legend: true,
                        color: barColorFn
                    },
                },
                {
                    title: "Mathematical",
                    cssClass: "avg-column",
                    headerHozAlign: "center",
                    columns: [
                        { 
                            title: "AIME24",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "deepseek_7b_aime24_pass", hozAlign: "center", formatter: colorFormatterAIME7, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "deepseek_7b_aime24_tokens", hozAlign: "center", formatter: colorFormatterAIMEToken7, minWidth: 65, responsive: 2}
                            ]
                        },
                        { 
                            title: "AMC23",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "deepseek_7b_amc23_pass", hozAlign: "center", formatter: colorFormatterAMC7, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "deepseek_7b_amc23_tokens", hozAlign: "center", formatter: colorFormatterAMCToken7, minWidth: 65, responsive: 2}
                            ]
                        },
                        { 
                            title: "Minerva",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "deepseek_7b_minerva_pass", hozAlign: "center", formatter: colorFormatterMinerva7, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "deepseek_7b_minerva_tokens", hozAlign: "center", formatter: colorFormatterMinervaToken7, minWidth: 65, responsive: 2}
                            ]
                        },
                        { 
                            title: "MATH500",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "deepseek_7b_math500_pass", hozAlign: "center", formatter: colorFormatterMath7, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "deepseek_7b_math500_tokens", hozAlign: "center", formatter: colorFormatterMathToken7, minWidth: 65, responsive: 2}
                            ]
                        }
                    ]
                },
                {
                    title: "Coding",
                    cssClass: "avg-column",
                    headerHozAlign: "center",
                    columns: [
                        { 
                            title: "LiveCode",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "deepseek_7b_livecodebench_pass", hozAlign: "center", formatter: colorFormatterLiveCode7, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "deepseek_7b_livecodebench_tokens", hozAlign: "center", formatter: colorFormatterLiveCodeToken7, minWidth: 65, responsive: 2}
                            ]
                        }
                    ]
                },
                {
                    title: "Science",
                    cssClass: "avg-column",
                    headerHozAlign: "center",
                    columns: [
                        { 
                            title: "Olympiad",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "deepseek_7b_olympiad_pass", hozAlign: "center", formatter: colorFormatterOlympiad7, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "deepseek_7b_olympiad_tokens", hozAlign: "center", formatter: colorFormatterOlympiadToken7, minWidth: 65, responsive: 2}
                            ]
                        }
                    ]
                },
            ];

            deepseek_7b_columns.forEach(column => {
                if (column.columns) {
                    column.columns.forEach(subColumn => {
                        let { min, max } = getColumnMinMax(deepseek_7b_data, subColumn.field);
                        subColumn.formatterParams = { min, max };
                    });
                } else if (column.field !== "deepseek_7b_avg") {
                    let { min, max } = getColumnMinMax(deepseek_7b_data, column.field);
                    column.formatterParams = { min, max };
                }
            });

            var deepseek_7b_table = new Tabulator("#deepseek-7b-main-table", {
                data: deepseek_7b_data,
                layout: "fitColumns",
                responsiveLayout: "collapse",
                responsiveLayoutCollapseStartOpen: false,
                movableColumns: false,
                initialSort: [
                    { column: "deepseek_7b_avg", dir: "desc" },
                ],
                columnDefaults: {
                    tooltip: true,
                },
                // columns: eb_alfred_columns
                columns: deepseek_7b_columns.map(column => {
                    if (column.field === "deepseek_7b_avg") {
                        return { ...column, sorter: "number" };
                    }
                    return column;
                })
            });

            var qwq_32b_columns = [
                {
                    title: "Method",
                    field: "method",
                    cssClass: "avg-column",
                    hozAlign: "center",
                    widthGrow: 1.1,
                    minWidth: 100,
                    headerSort: true 
                },
                {
                    title: "Avg<br>P@1<br>Gain",
                    field: "qwq_32b_avg",
                    cssClass: "avg-column",
                    formatter: "progress",
                    minWidth: 90,
                    widthGrow: 1.1,
                    formatterParams: {
                        min: 0,
                        max: 10,
                        legend: true,
                        color: barColorFn
                    },
                },
                {
                    title: "Mathematical",
                    cssClass: "avg-column",
                    headerHozAlign: "center",
                    columns: [
                        { 
                            title: "AIME24",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "qwq_32b_aime24_pass", hozAlign: "center", formatter: colorFormatterAIME32, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "qwq_32b_aime24_tokens", hozAlign: "center", formatter: colorFormatterAIMEToken32, minWidth: 65, responsive: 2}
                            ]
                        },
                        { 
                            title: "AMC23",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "qwq_32b_amc23_pass", hozAlign: "center", formatter: colorFormatterAMC32, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "qwq_32b_amc23_tokens", hozAlign: "center", formatter: colorFormatterAMCToken32, minWidth: 65, responsive: 2}
                            ]
                        },
                        { 
                            title: "Minerva",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "qwq_32b_minerva_pass", hozAlign: "center", formatter: colorFormatterMinerva32, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "qwq_32b_minerva_tokens", hozAlign: "center", formatter: colorFormatterMinervaToken32, minWidth: 65, responsive: 2}
                            ]
                        },
                        { 
                            title: "MATH500",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "qwq_32b_math500_pass", hozAlign: "center", formatter: colorFormatterMath32, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "qwq_32b_math500_tokens", hozAlign: "center", formatter: colorFormatterMathToken32, minWidth: 65, responsive: 2}
                            ]
                        }
                    ]
                },
                {
                    title: "Coding",
                    cssClass: "avg-column",
                    headerHozAlign: "center",
                    columns: [
                        { 
                            title: "LiveCode",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "qwq_32b_livecodebench_pass", hozAlign: "center", formatter: colorFormatterLiveCode32, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "qwq_32b_livecodebench_tokens", hozAlign: "center", formatter: colorFormatterLiveCodeToken32, minWidth: 65, responsive: 2}
                            ]
                        }
                    ]
                },
                {
                    title: "Science",
                    cssClass: "avg-column",
                    headerHozAlign: "center",
                    columns: [
                        { 
                            title: "Olympiad",
                            headerHozAlign: "center",
                            columns: [
                                { title: "P@1", field: "qwq_32b_olympiad_pass", hozAlign: "center", formatter: colorFormatterOlympiad32, minWidth: 65, responsive: 2},
                                { title: "#Tk", field: "qwq_32b_olympiad_tokens", hozAlign: "center", formatter: colorFormatterOlympiadToken32, minWidth: 65, responsive: 2}
                            ]
                        }
                    ]
                },
            ];

            qwq_32b_columns.forEach(column => {
                if (column.columns) {
                    column.columns.forEach(subColumn => {
                        let { min, max } = getColumnMinMax(qwq_32b_data, subColumn.field);
                        subColumn.formatterParams = { min, max };
                    });
                } else if (column.field !== "qwq_32b_avg") {
                    let { min, max } = getColumnMinMax(qwq_32b_data, column.field);
                    column.formatterParams = { min, max };
                }
            });

            var qwq_32b_table = new Tabulator("#qwq-32b-main-table", {
                data: qwq_32b_data,
                layout: "fitColumns",
                responsiveLayout: "collapse",
                responsiveLayoutCollapseStartOpen: false,
                movableColumns: false,
                initialSort: [
                    { column: "qwq_32b_avg", dir: "desc" },
                ],
                columnDefaults: {
                    tooltip: true,
                },
                // columns: eb_alfred_columns
                columns: qwq_32b_columns.map(column => {
                    if (column.field === "qwq_32b_avg") {
                        return { ...column, sorter: "number" };
                    }
                    return column;
                })
            });

            // var eb_habitat_columns = [
            //     {
            //         title: "Model",
            //         field: "model",
            //         widthGrow: 1.5,
            //         minWidth: 180,
            //         headerSort: true 
            //     },
            //     {
            //         title: "Avg<br>Perf.",
            //         field: "eb_habitat_avg",
            //         formatter: "progress",
            //         minWidth: 90,
            //         formatterParams: {
            //             min: 0, max: 80,
            //             legend: true,
            //             color: barColorFn,
            //         },
            //     },
            //     {
            //         title: "Base",
            //         field: "eb_habitat_base",
            //         hozAlign: "center",
            //         minWidth: 100,
            //         headerSort: true,
            //         formatter: colorFormatterSubgoal
            //     },
            //     {
            //         title: "Common",
            //         field: "eb_habitat_common",
            //         hozAlign: "center",
            //         minWidth: 100,
            //         headerSort: true,
            //         formatter: colorFormatterActionSeq
            //     },
            //     {
            //         title: "Complex",
            //         field: "eb_habitat_complex",
            //         hozAlign: "center",
            //         minWidth: 100,
            //         headerSort: true,
            //         formatter: colorFormatterTrans
            //     },
            //     {
            //         title: "Visual",
            //         field: "eb_habitat_visual",
            //         hozAlign: "center",
            //         minWidth: 100,
            //         headerSort: true,
            //         formatter: colorFormatterGoalInt
            //     },
            //     {
            //         title: "Spatial",
            //         field: "eb_habitat_spatial",
            //         hozAlign: "center",
            //         minWidth: 100,
            //         headerSort: true,
            //         formatter: colorFormatterSubgoal
            //     },
            //     {
            //         title: "Long",
            //         field: "eb_habitat_long",
            //         hozAlign: "center",
            //         minWidth: 100,
            //         headerSort: true,
            //         formatter: colorFormatterActionSeq
            //     }
            // ];

            // eb_habitat_columns.forEach(column => {
            //     if (column.columns) {
            //         column.columns.forEach(subColumn => {
            //             let { min, max } = getColumnMinMax(eb_habitat_total_benchmark_data, subColumn.field);
            //             subColumn.formatterParams = { min, max };
            //         });
            //     } else if (column.field !== "eb_habitat_avg") {
            //         let { min, max } = getColumnMinMax(eb_habitat_total_benchmark_data, column.field);
            //         column.formatterParams = { min, max };
            //     }
            // });

            // var eb_habitat_table = new Tabulator("#eb-habitat-benchmark-main-table", {
            //     data: eb_habitat_total_benchmark_data,
            //     layout: "fitColumns",
            //     responsiveLayout: "collapse",
            //     responsiveLayoutCollapseStartOpen: false,
            //     movableColumns: false,
            //     initialSort: [
            //         { column: "eb_habitat_avg", dir: "desc" },
            //     ],
            //     columnDefaults: {
            //         tooltip: true,
            //     },
            //     // columns: eb_habitat_columns
            //     columns: eb_habitat_columns.map(column => {
            //         if (column.field === "eb_habitat_avg") {
            //             return { ...column, sorter: "number" };
            //         }
            //         return column;
            //     })
            // });
        });
})

