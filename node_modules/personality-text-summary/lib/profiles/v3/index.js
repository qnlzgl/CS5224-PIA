/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersonalityProfile = function () {
  function PersonalityProfile(profile) {
    _classCallCheck(this, PersonalityProfile);

    this._traits = profile.personality;
    this._needs = profile.needs;
    this._values = profile.values;
  }

  _createClass(PersonalityProfile, [{
    key: 'traits',
    value: function traits() {
      return this._traits.map(function (t) {
        return {
          id: t.trait_id,
          name: t.name,
          category: t.category,
          score: t.percentile,
          facets: t.children.map(function (f) {
            return {
              id: f.trait_id,
              name: f.name,
              category: f.category,
              score: f.percentile
            };
          })
        };
      });
    }
  }, {
    key: 'needs',
    value: function needs() {
      return this._needs.map(function (n) {
        return {
          id: n.trait_id,
          name: n.name,
          category: n.category,
          score: n.percentile
        };
      });
    }
  }, {
    key: 'values',
    value: function values() {
      return this._values.map(function (v) {
        return {
          id: v.trait_id,
          name: v.name,
          category: v.category,
          score: v.percentile
        };
      });
    }
  }]);

  return PersonalityProfile;
}();

module.exports = PersonalityProfile;