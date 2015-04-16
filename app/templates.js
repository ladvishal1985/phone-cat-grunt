angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/partials/phone-detail',
    "<div class=\"phone-images\">\n" +
    "  <img ng-src=\"{{img}}\"\n" +
    "       class=\"phone\"\n" +
    "       ng-repeat=\"img in phone.images\"\n" +
    "       ng-class=\"{active: mainImageUrl==img}\">\n" +
    "</div>\n" +
    "\n" +
    "<h1>{{phone.name}}</h1>\n" +
    "\n" +
    "<p>{{phone.description}}</p>\n" +
    "\n" +
    "<ul class=\"phone-thumbs\">\n" +
    "  <li ng-repeat=\"img in phone.images\">\n" +
    "    <img ng-src=\"{{img}}\" ng-click=\"setImage(img)\">\n" +
    "  </li>\n" +
    "</ul>\n" +
    "\n" +
    "<ul class=\"specs\">\n" +
    "  <li>\n" +
    "    <span>Availability and Networks</span>\n" +
    "    <dl>\n" +
    "      <dt>Availability</dt>\n" +
    "      <dd ng-repeat=\"availability in phone.availability\">{{availability}}</dd>\n" +
    "    </dl>\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <span>Battery</span>\n" +
    "    <dl>\n" +
    "      <dt>Type</dt>\n" +
    "      <dd>{{phone.battery.type}}</dd>\n" +
    "      <dt>Talk Time</dt>\n" +
    "      <dd>{{phone.battery.talkTime}}</dd>\n" +
    "      <dt>Standby time (max)</dt>\n" +
    "      <dd>{{phone.battery.standbyTime}}</dd>\n" +
    "    </dl>\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <span>Storage and Memory</span>\n" +
    "    <dl>\n" +
    "      <dt>RAM</dt>\n" +
    "      <dd>{{phone.storage.ram}}</dd>\n" +
    "      <dt>Internal Storage</dt>\n" +
    "      <dd>{{phone.storage.flash}}</dd>\n" +
    "    </dl>\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <span>Connectivity</span>\n" +
    "    <dl>\n" +
    "      <dt>Network Support</dt>\n" +
    "      <dd>{{phone.connectivity.cell}}</dd>\n" +
    "      <dt>WiFi</dt>\n" +
    "      <dd>{{phone.connectivity.wifi}}</dd>\n" +
    "      <dt>Bluetooth</dt>\n" +
    "      <dd>{{phone.connectivity.bluetooth}}</dd>\n" +
    "      <dt>Infrared</dt>\n" +
    "      <dd>{{phone.connectivity.infrared | checkmark}}</dd>\n" +
    "      <dt>GPS</dt>\n" +
    "      <dd>{{phone.connectivity.gps | checkmark}}</dd>\n" +
    "    </dl>\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <span>Android</span>\n" +
    "    <dl>\n" +
    "      <dt>OS Version</dt>\n" +
    "      <dd>{{phone.android.os}}</dd>\n" +
    "      <dt>UI</dt>\n" +
    "      <dd>{{phone.android.ui}}</dd>\n" +
    "    </dl>\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <span>Size and Weight</span>\n" +
    "    <dl>\n" +
    "      <dt>Dimensions</dt>\n" +
    "      <dd ng-repeat=\"dim in phone.sizeAndWeight.dimensions\">{{dim}}</dd>\n" +
    "      <dt>Weight</dt>\n" +
    "      <dd>{{phone.sizeAndWeight.weight}}</dd>\n" +
    "    </dl>\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <span>Display</span>\n" +
    "    <dl>\n" +
    "      <dt>Screen size</dt>\n" +
    "      <dd>{{phone.display.screenSize}}</dd>\n" +
    "      <dt>Screen resolution</dt>\n" +
    "      <dd>{{phone.display.screenResolution}}</dd>\n" +
    "      <dt>Touch screen</dt>\n" +
    "      <dd>{{phone.display.touchScreen | checkmark}}</dd>\n" +
    "    </dl>\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <span>Hardware</span>\n" +
    "    <dl>\n" +
    "      <dt>CPU</dt>\n" +
    "      <dd>{{phone.hardware.cpu}}</dd>\n" +
    "      <dt>USB</dt>\n" +
    "      <dd>{{phone.hardware.usb}}</dd>\n" +
    "      <dt>Audio / headphone jack</dt>\n" +
    "      <dd>{{phone.hardware.audioJack}}</dd>\n" +
    "      <dt>FM Radio</dt>\n" +
    "      <dd>{{phone.hardware.fmRadio | checkmark}}</dd>\n" +
    "      <dt>Accelerometer</dt>\n" +
    "      <dd>{{phone.hardware.accelerometer | checkmark}}</dd>\n" +
    "    </dl>\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <span>Camera</span>\n" +
    "    <dl>\n" +
    "      <dt>Primary</dt>\n" +
    "      <dd>{{phone.camera.primary}}</dd>\n" +
    "      <dt>Features</dt>\n" +
    "      <dd>{{phone.camera.features.join(', ')}}</dd>\n" +
    "    </dl>\n" +
    "  </li>\n" +
    "  <li>\n" +
    "    <span>Additional Features</span>\n" +
    "    <dd>{{phone.additionalFeatures}}</dd>\n" +
    "  </li>\n" +
    "</ul>\n"
  );


  $templateCache.put('app/partials/phone-list',
    "<div class=\"container-fluid\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-2\">\n" +
    "      <!--Sidebar content-->\n" +
    "\n" +
    "      Search: <input ng-model=\"query\">\n" +
    "      Sort by:\n" +
    "      <select ng-model=\"orderProp\">\n" +
    "        <option value=\"name\">Alphabetical</option>\n" +
    "        <option value=\"age\">Newest</option>\n" +
    "      </select>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"col-md-10\">\n" +
    "      <!--Body content-->\n" +
    "\n" +
    "      <ul class=\"phones\">\n" +
    "        <li ng-repeat=\"phone in phones | filter:query | orderBy:orderProp\"\n" +
    "            class=\"thumbnail phone-listing\">\n" +
    "          <a href=\"#/phones/{{phone.id}}\" class=\"thumb\"><img ng-src=\"{{phone.imageUrl}}\"></a>\n" +
    "          <a href=\"#/phones/{{phone.id}}\">{{phone.name}}</a>\n" +
    "          <p>{{phone.snippet}}</p>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
